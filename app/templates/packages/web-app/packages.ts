import { combineReducers, Reducer } from 'redux';

import use from 'redux-package-loader';

import { State } from '<%= namespace %>/types';

const corePackages = <any>[];

const packages = use(corePackages);
const rootReducer: Reducer<State> = combineReducers(packages.reducers);

export { packages, rootReducer };
