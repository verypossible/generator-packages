import robodux from '<%= namespace %>/robodux';

type Example = string;

const slice = 'example';

const { actions, reducer } = robodux<Example>({
  actions: {
    setExample: (state: Example, payload: string) => payload,
  },
  initialState: '',
  slice,
});

const reducers = {
  [slice]: reducer,
};

const selectors = {
  getExample: (state: any) => state[slice],
};

export { actions, reducers, slice, selectors };
