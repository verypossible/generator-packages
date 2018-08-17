import createReducer from 'create-reducer';

import * as selectors from './selectors';
import { setExample } from './actions';
import { Example, SetExampleAction } from './types';

const setExampleFn = (state: Example, action: SetExampleAction) =>
  action.payload;

const example = createReducer<Example>([], {
  [`${setExample}`]: setExampleFn,
});

export default {
  [selectors.exampleKey]: example,
};
