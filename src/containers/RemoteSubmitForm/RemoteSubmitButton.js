import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'components';
import { submit, reset } from 'redux-form';

const formIdentifier = 'remoteSubmitForm'; // RemoteSubmitForm unique idnetifier

const RemoteSubmitButton = props => {
  const { dispatch } = props;
  return (
    <div>
      <Button type="button" onClick={() => dispatch(submit(formIdentifier))}>送出</Button>
      <Button type="button" onClick={() => dispatch(reset(formIdentifier))}>清除</Button>
    </div>
  );
}

export default connect()(RemoteSubmitButton);
