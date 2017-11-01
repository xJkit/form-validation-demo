import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Row, Button, InfoMessage } from 'components';
import * as actions from 'actions';
import * as utils from 'utils';

const renderField = props => {
  const { input, label, type, meta: { touched, error } } = props;
  return (
    <Row>
      <div className="title">{label}</div>
      <input {...input} type={type} />
      { touched && error &&
        <span className="form-error">{error}</span>
      }
    </Row>
  );
}

const InitialStateForm = props => {
  const { handleSubmit, reset } = props;
  const { required, email } = utils.validators;
  console.log('=========initialValues===========================');
  console.log(props.initialValues);
  console.log('====================================');
  console.log('==========pristine means whether form is at inital state==========================');
  console.log(props.pristine);
  console.log('====================================');
  return (
    <div>
      <h3>Form with Initial States</h3>
      <form onSubmit={handleSubmit((values) =>{
          window.alert(`提交表單成功： ${JSON.stringify(values)}`);
          props.changeInitialAuth(values);
      })}>
        <Field validate={[required]} name="account" type="text" label="帳號" component={renderField} />
        <Field validate={[required]} name="password" type="password" label="密碼" component={renderField} />
        <Field validate={[required, email]} name="email" type="text" label="電子郵件" component={renderField} />
        <Button btnStyle="primary" type="submit">送出</Button>
        <Button type="button" onClick={reset}>回到初始值</Button>
      </form>
      <InfoMessage>
        <p>Redux-form 提供一個特別的 props 叫做 initialValues, 這個物件讓你設定 Field 的初始值，根據各欄位的 name 丟值進去就好。</p>
        <p>設定 initialValues 的兩種方式：</p>
        <ol>
          <li> 直接設定 initialValues 這個特別的 props.
            <ul>
              <li>你可以從 reduxForm 的 options, 初始化時 hardcode 進去</li>
              <li>或是從 store 抓出來，寫在 mapStateToProps 裡面，在這裡指定 initialValues. 注意！！如果 initialValues 要從 store 拿值， reduxForm 的 decorator 必須寫在 connect 裡面。</li>
            </ul>
          </li>
          <li>使用 redux-form 獨有的 action creator: initialize(form: string, data: object, keepDirty: boolean) </li>
        </ol>
        <p>設定初始值後，就是這個 form 狀態的 pristine. 使用 reset 將會恢復到 pristine 的狀態。</p>

      </InfoMessage>
    </div>
  );
}

const mapStateToProps = state => ({
  initialValues: { account: state.auth.account, email: state.auth.email },
});

const mapDispatchToProps = {
  changeInitialAuth: actions.changeInitialAuth,
}

const formOptions = {
  form: 'initialStateForm',
  enableReinitialize: true,
};

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm(formOptions)(InitialStateForm)
);
