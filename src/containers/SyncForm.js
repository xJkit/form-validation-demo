import React from 'react';
import { connect } from 'react-redux';
import { Row, InfoMessage, Button } from 'components';
import * as actions from 'actions';
/**
 * Redux Form HOC
 */
import { Field, reduxForm } from 'redux-form';

const validater = values => {
  const errors = {};
  console.log('====validation function get values===========================');
  console.log(values);
  console.log('====================================');
  /** account validation  */
  if (!values.account) errors.account = "帳號必須填寫！";
  /** password validation */
  if (!values.password) errors.password = "密碼必須填寫！";
  return errors;
}

const warningChecker = values => {
  const { account, password } = values;
  const warnings = {};
  if (account && account.length > 6) warnings.account = "警告：帳號太長喔";
  if (password && password.length > 6) warnings.password = "警告：密碼太長喔";
  return warnings;
}

const renderField = (props) => {
  console.log('=====props into the renderField=================');
  console.log(props);
  console.log('==丟 props: meta, label, type, 以及其他都是 input==');

  const { input, type, label, meta } = props;
  const { touched, error, warning } = meta;

  return (
    <Row>
      <div className="title">{label}: </div>
      <input {...input} type={type} />
      {touched &&
        (
          (error && <span className="form-error">{error}</span>) ||
          (warning && <span className="form-warning">{warning}</span>)
        )
      }
    </Row>
  )
}

const mySubmit = dispatch => values => {
  const messages = `
    ====================================
    mySubmit 自定義 submit 被包在 handleSubmit 下面，只有當認證通過 (也就是 validation 回傳 空物件)時才會發送。
    ${JSON.stringify(values)}
    ====================================
  `;
  alert(messages);
  dispatch(values);
}

const SyncForm = (props) => {
  const {
    handleSubmit, // redux-form handleSubmit(myFunc)
    handleFormSubmitByAction,
    reset,
   } = props;
  return (
    <div >
      <h3>Synchronous Form Validation</h3>
      <form onSubmit={handleSubmit(mySubmit(handleFormSubmitByAction))}>
        <Field name="account" label="帳號" component={renderField} type="text" />
        <Field name="password" label="密碼" component={renderField} type="password" />
        <Button type="submit" btnStyle="primary">送出</Button>
        <Button type="button" onClick={reset}>清除</Button>
      </form>
      <InfoMessage>
        <p>Synchronous Form 就是 input 只要有變動就會 dispatch actions: @@redux-form/EVENT</p>
        <p>驗證方式：提供 validation/warning function 到 decorator 作為 config parameter,或是作為 props 丟到 decorated form component</p>
        <p>請注意，不要直接在 render 裡面寫 inline input, 這會每次都渲染一個新的輸入框；相反地，我們希望盡可能重複使用驗證邏輯和輸入框組件</p>
      </InfoMessage>
    </div>
  );
}

const mapDispatchToProps = {
  handleFormSubmitByAction: actions.handleFormSubmitByAction,
};

const formOptions = {
  form: 'syncForm', // 一個 id, 會在 formReducer 中方便辨識不同的 form
  validate: validater, // 驗證 function, 沒過不可提交
  warn: warningChecker, // 警告 function, 不影響提交
};

export default reduxForm(formOptions)(connect(null, mapDispatchToProps)(SyncForm));