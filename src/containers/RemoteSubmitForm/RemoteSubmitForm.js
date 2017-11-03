import React from 'react';
import { Row, InfoMessage } from 'components';
import { Field, reduxForm } from 'redux-form';
import { validators } from 'utils';

const renderField = props => {
  const { input, type, label, meta } = props;
  const { error, touched } = meta;
  return (
    <Row>
      <div className="title">{label}</div>
      <input {...input} type={type} />
      {touched && error &&
        <span className="form-error">{error}</span>
      }
    </Row>
  );
}

const mySubmit = values => {
  alert(JSON.stringify(values));
};

const RemoteSubmitForm = (props) => {
  const { required, number } = validators;
  const { handleSubmit } = props;
  return (
    <div>
      <h3>this is remote form</h3>
      <h5>Buttons below are remote components </h5>
      <form onSubmit={handleSubmit}>
        <Field
          component={renderField}
          name="account"
          type="text"
          label="帳號"
          validate={[required]}
        />
        <Field
          component={renderField}
          name="password"
          type="password"
          label="密碼"
          validate={[required, number]}
        />
      </form>
      <InfoMessage>
        <p>Remote Submit 使用場景是當 Button:submit 不在該 form 底下，所以接收不到 child 的 onSubmit 事件</p>
        <ul>
          <li>解法是透過 Redux actions.</li>
          <li>遙遠的 Button 組件在 onClick 事件來 dispatch 來自 redux-form 的特殊 action creators: submit 或 reset </li>
          <li>submit/reset 會指定 form name, 在該 form 的 reduxForm decorator options 中透過 onSubmit 傳自己的 mySubit 函數</li>
          <li>而 原本的 form 組件上面的 onSubmit 就依舊是 handleSubmit props.</li>
        </ul>
      </InfoMessage>
    </div>
  )
}

const formOptions = {
  form: 'remoteSubmitForm',
  onSubmit: mySubmit, // onSubmit 從 form 裡面 submit 變成從 redux 傳進 onSubmit, 會變成 handleSubmit 傳回 form
};

export default reduxForm(formOptions)(RemoteSubmitForm);
