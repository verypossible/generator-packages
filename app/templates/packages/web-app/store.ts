import logger from 'redux-logger';
import {
  createStore,
  applyMiddleware,
  Middleware,
  Store,
  Reducer,
} from 'redux';
import cofxMiddleware, { enableBatching } from 'redux-cofx';

import { State } from '<%= namespace %>/types';

interface Props {
  initState?: State;
  rootReducer: Reducer<State>;
}

export default function createState({
  initState,
  rootReducer,
}: Props): Store<State> {
  const middleware: Middleware[] = [];

  if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
  }

  middleware.push(cofxMiddleware);

  const store = createStore(
    enableBatching(rootReducer),
    initState,
    applyMiddleware(...middleware),
  );

  return store;
}
