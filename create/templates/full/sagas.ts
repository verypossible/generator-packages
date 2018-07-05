import { takeEvery } from 'redux-saga/effects';

import { FETCH_EXAMPLE } from './action-types';
import { onFetchExample } from './effects';

export function* exampleSaga() {
  yield takeEvery(FETCH_EXAMPLE, onFetchExample);
}
