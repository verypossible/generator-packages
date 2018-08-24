import { call, put, createEffect } from 'redux-cofx';
import { actions } from './slice';

export function* onFetchExample(name: string) {
  const res = yield call(fetch, `http://httpbin.org/get?example=${name}`);

  if (res.status < 200 || res.status >= 300) {
    // do something with error
    return;
  }

  const data = yield call([res, 'json']);
  yield put(actions.set(data.args.example));
}

export const fetchExample = (name: string) =>
  createEffect(onFetchExample, name);
