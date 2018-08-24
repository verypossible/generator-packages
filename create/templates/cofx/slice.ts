import robodux, { ActionMap } from '<%= namespace %>/robodux';
import { Example } from './types';
import { fetchExample } from './effects';

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

const actions: ActionMap = {
  ...example.actions,
  fetchExample,
};

export { actions, reducers, slice };
