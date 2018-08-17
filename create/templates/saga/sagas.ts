import { takeEvery } from 'redux-saga/effects';

import { fetchExample } from './actions';
import { onFetchExample } from './effects';

export function* exampleSaga() {
  yield takeEvery(`${fetchExample}`, onFetchExample);
}
