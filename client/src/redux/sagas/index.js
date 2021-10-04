import { all, fork } from 'redux-saga/effects';
import dotenv from 'dotenv';
import joinSaga from 'joinSaga';

dotenv.config();

export default function* rootSaga() {
  yield all([fork(joinSaga)]);
}
