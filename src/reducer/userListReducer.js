import { USER_LIST } from '../actions/actionTypes';

const initialState = {
  loading: true,
  error: false,
  data: [],
  errormsg: '',
};
/**
 * @description Reducer for user list.
 * @param {Object} state - State.
 * @param {Object} action - Action.
 * @returns {Object} State.
 */
const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LIST.SUCCESS:
      return Object.assign({}, state, {
        loading: true,
        data: action.payload,
        error: false,
        errormsg: "",
      });
    case USER_LIST.FAIL:
      return Object.assign({}, state, {
        errormsg: action.message,
        data: [],
        error: true,
        loading: false,
      });
    case USER_LIST.CLEAR:
      return Object.assign({}, state, {
        errormsg: "",
        data: [],
        error: false,
        loading: false,
      });
    default:
      return state;
  }
};

export default userListReducer;
