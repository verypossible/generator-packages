import { call, put } from 'redux-saga/effects';
import { actions } from './slice';
import { FetchAction } from './types';

export function* onFetchExample(action: FetchAction) {
  const name = action.payload;
  const res = yield call(fetch, `http://httpbin.org/get?example=${name}`);

  if (res.status < 200 || res.status >= 300) {
    // do something with error
    return;
  }

  const data = yield call([res, 'json']);
  yield put(actions.set(data.args.example));
}
