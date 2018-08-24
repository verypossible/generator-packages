import { Example } from './types';
import { slice } from './slice';

type State = any;

export const getExample = (state: State): Example => state[slice] || '';
