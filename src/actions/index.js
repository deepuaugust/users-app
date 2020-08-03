import * as actionTypes from './actionTypes';

/**
 * @description - Function to get user list.
 * @returns {Object} - Actions type.
 */
export const getUserList = (data) => ({
  type: actionTypes.USER_LIST.GET,
  payload: data,
});

/**
 * @description - Function to save user list.
 * @param {Object} data - Payload data.
 * @returns {Object} - Returns type and payload.
 */
export function storeUserList(data) {
  return {
    type: actionTypes.USER_LIST.SUCCESS,
    payload: data,
  };
}

/**
 * @description - Function to clear user list.
 * @returns {Object} - Returns type and payload.
 */
export function clearUserList() {
  return {
    type: actionTypes.USER_LIST.CLEAR,
  };
}