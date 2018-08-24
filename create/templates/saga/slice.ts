import robodux, { createAction } from '<%= namespace %>/robodux';
import { Example, FetchPayload } from './types';

const slice = 'example';

const example = robodux<Example>({
  actions: {
    set: (state: Example, payload: string) => payload,
  },
  initialState: '',
  slice,
});

const reducers = {
  [slice]: example.reducer,
};

const actions = {
  ...example.actions,
  fetch: createAction<FetchPayload>(`${slice}/fetch`),
};

export { actions, reducers, slice };
