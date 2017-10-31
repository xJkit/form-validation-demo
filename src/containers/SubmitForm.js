import React from 'react';
import { Row, Button, InfoMessage } from 'components';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from 'actions';

const renderField = props => {
  const { type, label, meta, input } = props;
  const { touched, error } = meta;
  return (
    <Row>
      <div className="title">{label}: </div>
      <input type={type} {...input} />
      {touched && error &&
        <span className="form-error">{error}</span>
      }
    </Row>
  );
}

const SubmitForm = props => {
  const { handleSubmit, error, reset, submitting } = props;
  return (
    <div>
      <h3>Submit Validation</h3>
      <form onSubmit={handleSubmit(props.handleBackendAuth)}>
        <Field
          name="account"
          type="text"
          placeholder="請輸入帳號"
          label="帳號"
          component={renderField}
        />
        <Field
          name="password"
          type="password"
          placeholder="請輸入密碼"
          label="密碼"
          component={renderField}
        />
        <Button
          type="submit"
          btnStyle="primary"
          disabled={submitting}
        >
          {submitting ? '讀取中...' : '送出'}
        </Button>
        <Button type="button" onClick={reset}>清除</Button>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </form>
      <InfoMessage>
        <p>正確帳密： jay/12345</p>
        <p>Submit Validation 使用後端驗證，模擬發送一個 API 到後端 3 秒回傳認證結果</p>
        <p>認證邏輯做在打 API 的 action 上，被包在 handleSubmit，使用 Promise. 認證成功 resolve, 失敗則 Promise.reject 一個 Redux-form 特定的 Error Object: SubmissionError</p>
        <p>表單的畫法跟 SyncForm 一模一樣，僅差別在 validation 抽離了 redux-form decorator</p>
        <p>照理來說 Sync validation 跟 Submit validation 應該要一起做, 為了程式碼簡潔而分開。</p>
      </InfoMessage>
    </div>
  );
}

const formOptions = {
  form: 'submitForm',
  // validate: validator,
};

const mapDispatchToProps = {
  handleBackendAuth: actions.handleBackendAuth,
};

export default reduxForm(formOptions)(
  connect(null, mapDispatchToProps)(SubmitForm)
);