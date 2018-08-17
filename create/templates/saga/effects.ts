import { call, put } from 'redux-saga/effects';
import { FetchExampleAction } from './types';
import { setExample } from './actions';

export function* onFetchExample(action: FetchExampleAction) {
  const { name } = action.payload;
  const res = yield call(fetch, `http://httpbin.org/get?example=${name}`);

  if (res.status < 200 || res.status >= 300) {
    // do something with error
    return;
  }

  const data = yield call([res, 'json']);
  yield put(setExample(data.args.example));
}
