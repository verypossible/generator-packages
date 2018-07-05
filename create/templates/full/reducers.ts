import { SET_EXAMPLE } from './action-types';
import * as selectors from './selectors';
import { Example, SetExampleAction } from './types';

export const example = (state: Example, action: SetExampleAction) => {
  switch (action.type) {
    case SET_EXAMPLE:
      return action.payload;
    default:
      return state;
  }
};

export default {
  [selectors.exampleKey]: example,
}
