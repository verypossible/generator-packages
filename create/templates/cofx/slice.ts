import robodux from '<%= namespace %>/robodux';
import { Example } from './types';

const slice = 'example';

const { actions, reducer } = robodux<Example>({
  actions: {
    set: (state: Example, payload: string) => payload,
  },
  initialState: '',
  slice,
});

const reducers = {
  [slice]: reducer,
};

export { actions, reducers, slice };
