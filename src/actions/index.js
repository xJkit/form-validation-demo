/**
 * Action Types
 */
export const FORM_SUBMIT = 'FORM_SUBMIT';

/**
 * Action Creators
 */

export const handleFormSubmitByAction = (payload) => ({
  type: FORM_SUBMIT,
  payload,
});
