import { SubmissionError, submit } from 'redux-form';
const createRequestTypes = (base) => ({
  REQUEST: `${base}_REQUEST`,
  SUCCESS: `${base}_SUCCESS`,
  FAILURE: `${base}_FAILURE`,
});

/**
 * Action Types
 */
export const FORM_SUBMIT = createRequestTypes('FORM_SUBMIT');
export const CHANGE_INITIAL_AUTH = 'CHANGE_INITIAL_AUTH';
/**
 * Fake sleep
 */

const sleep = sec => new Promise(resolve => setTimeout(resolve, sec * 1000));

/**
 * Action Creators
 */

export const handleFormSubmitByAction = (payload) => ({
  type: FORM_SUBMIT.REQUEST,
  payload,
});

export const handleBackendAuth = (values) => async (dispatch) => {
  dispatch({ type: FORM_SUBMIT.REQUEST });
  await sleep(3);
  const accounts = ['jay'];
  const password = '12345';
  const errors = {};
  /**
   * validations
   */
  if (!accounts.includes(values.account)) errors.account = "帳號不存在！";
  else if (password !== values.password) errors.password = "密碼錯誤!";
  /************ */
  if (!Object.keys(errors).length) {
    dispatch({ type: FORM_SUBMIT.SUCCESS });
    window.alert(`Hello, ${values.account}, 登入成功！`);
  } else {
    dispatch({ type: FORM_SUBMIT.FAILURE });
    return Promise.reject(new SubmissionError({
      ...errors, // specific error message
      _error: '登入失敗，請重新登入。', // general error message
    }));
  }
};

export const changeInitialAuth = (data) => (dispatch) => {
  return dispatch({
    type: CHANGE_INITIAL_AUTH,
    payload: data,
  });
}
