import React from 'react';
import { Row, Button, InfoMessage } from 'components';
import { reduxForm, Field } from 'redux-form';
import { validators } from 'utils';

const renderField = (props) => {
  const { label, type, meta, input } = props;
  const { error, touched } = meta;
  return (
    <Row>
      <div className="title">{label}:</div>
      <input {...input} type={type} />
      {touched && error &&
        <span className="form-error">{error}</span>
      }
    </Row>
  );
}

const mySubmit = values => {
  window.alert(JSON.stringify(values));
};

const FieldLevelForm = props => {
  const { handleSubmit, submitting, reset } = props;
  return (
    <div>
      <h3>Field Level Form</h3>
      <form onSubmit={handleSubmit(mySubmit)}>
        <Field
          name="account"
          label="帳號"
          type="text"
          placeholder="請輸入帳號"
          component={renderField}
          validate={[
            validators.required,
            validators.maxLength8
          ]}
        />
        <Field
          name="password"
          label="密碼"
          type="password"
          placeholder="請輸入密碼"
          component={renderField}
          validate={[
            validators.required,
            validators.number,
          ]}
        />
        <Field
          name="email"
          label="電子郵件"
          type="text"
          placeholder="請輸入電子郵件"
          component={renderField}
          validate={[
            validators.required,
            validators.email,
          ]}
        />
        <Button disabled={submitting} btnStyle="primary" type="submit">送出</Button>
        <Button type="button" onClick={reset}>清除</Button>
      </form>
      <InfoMessage>
          <p>Field-level Validation 也是 Sync Form, 差別是 validators 邏輯的位置不同</p>
          <p>跟Sync Form 相比， Field-level 可以把 validators 全部獨立出去變成外掛，再根據不同的欄位掛上不同的規則</p>
          <p>掛在 Field 組件上的 validate 是一個陣列， validators 都是一個個驗證函數，回傳 String 就是錯誤訊息，回傳 undefined 表示通過驗證。</p>
      </InfoMessage>
    </div>
  )
};

const formOptions = {
  form: 'fieldLevelForm',
};

export default reduxForm(formOptions)(FieldLevelForm);
