import * as Types from 'actions';
/******
 * This auth reducer is used for initialStateForm
 */

 const initialState = {
   account: 'jaychung',
   email: 'initial@gmail.com',
 };

 export default (state = initialState , action) => {
   switch (action.type) {
     case Types.CHANGE_INITIAL_AUTH:
      return { ...state, ...action.payload };
     default:
      return state;
   }
 }
