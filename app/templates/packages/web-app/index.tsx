import * as React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import createState from './store';
import { rootReducer, rootSaga } from './packages';
import App from './app';

interface WindowInterface extends Window {
  reduxStore: any;
}

export default () => {
  const store = createState({ rootReducer, rootSaga });
  (window as WindowInterface).reduxStore = store;

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('#app'),
  );
};
