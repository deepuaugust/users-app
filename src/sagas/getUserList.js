/**
 * @description - Saga function to call user details api.
 */
import { takeEvery, put } from "redux-saga/effects";
import Papa from "papaparse";
import { USER_LIST } from "../actions/actionTypes";
import { storeUserList } from "../actions";

/**
 * @description - Takes endpoint,calls API function & update the store.
 * @param {Object} endPoint - Endpoint for getData.
 * @param {Object} payload - Payload data.
 */
function* fetchUserList(endPoint, {}) {
  try {
    const users = yield fetchCsvData(endPoint);
    yield put(storeUserList(users));
  } catch (e) {
    yield put({ type: USER_LIST.FAIL, message: e.message });
  }
}

/**
 * @description - Async function to get user data from CSV.
 * @param {String} endPoint - Endpoint for csv file
 * @returns {Array} - Array of user data.
 */
async function fetchCsvData(endPoint) {
  let csvData = await fetchCsv(endPoint);
  const userList = Papa.parse(csvData);
  return userList.data;
}

/**
 * @description - Async function to get user data from CSV after converting to required formats.
 * @param {String} endPoint - Endpoint for csv file
 * @returns {Array} - Array of user data.
 */
function fetchCsv(endPoint) {
  return fetch(`${endPoint}`).then(function (response) {
    let reader = response.body.getReader();
    let decoder = new TextDecoder("utf-8");

    return reader.read().then(function (result) {
      return decoder.decode(result.value);
    });
  });
}

/**
 * @description - Watches for the action getUserList & calls fetchUserList.
 */
export default function* watchGetUserList() {
  yield takeEvery(USER_LIST.GET, fetchUserList, "/data/users.csv");
}
