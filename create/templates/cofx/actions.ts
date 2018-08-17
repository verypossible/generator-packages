import createAction from '<%= namespace %>/create-action';

import { FetchExamplePayload, Example } from './types';

export const fetchExample = createAction<FetchExamplePayload>('FETCH_EXAMPLE');
export const setExample = createAction<Example>('SET_EXAMPLE');
