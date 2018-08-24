import { takeEvery } from 'redux-saga/effects';

import { actions } from './slice';
import { onFetchExample } from './effects';

export function* exampleSaga() {
  yield takeEvery(`${actions.fetch}`, onFetchExample);
}
