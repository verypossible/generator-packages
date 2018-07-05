import * as actionTypes from './action-types';

import {
  FetchExamplePayload,
  FetchExampleAction,
  SetExampleAction,
  Example,
} from './types';

export const fetchExample = (payload: FetchExamplePayload): FetchExampleAction => ({
  type: actionTypes.FETCH_EXAMPLE,
  payload,
});

export const setExample = (payload: Example): SetExampleAction => ({
  type: actionTypes.SET_EXAMPLE,
  payload,
});
