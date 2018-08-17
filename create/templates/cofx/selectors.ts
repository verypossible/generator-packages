import { Example } from './types';

type State = any;

export const exampleKey = 'example';
export const getExample = (state: State): Example => state[exampleKey] || '';
