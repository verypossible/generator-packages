import robodux from 'robodux';

type Example = string;

const slice = 'example';

const { actions, reducer, selectors } = robodux({
  actions: {
    setExample: (state: Example, payload: string) => payload,
  },
  initialState: '',
  slice,
});

const reducers = {
  [slice]: reducer,
};

export { actions, reducers, slice, selectors };
