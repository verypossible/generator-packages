import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {
  createStore,
  applyMiddleware,
  Middleware,
  Store,
  Reducer,
} from 'redux';
import cofxMiddleware from 'redux-cofx';

import { State } from './types';

interface Props {
  initState?: State;
  rootReducer: Reducer<State>;
  rootSaga: any;
}

export default function createState({
  initState,
  rootReducer,
  rootSaga,
}: Props): Store<State> {
  const sagaMiddleware = createSagaMiddleware();
  const middleware: Middleware[] = [cofxMiddleware, sagaMiddleware];

  if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
  }

  const store = createStore(
    rootReducer,
    initState,
    applyMiddleware(...middleware),
  );
  sagaMiddleware.run(rootSaga);

  return store;
}
