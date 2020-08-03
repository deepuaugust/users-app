import { spawn } from 'redux-saga/effects';
import watchGetUserList from '../sagas/getUserList';

/**
 * @description - Core saga function.
 */
export default function* rootSaga() {
  yield 'RootSaga';
  yield spawn(watchGetUserList);
}
