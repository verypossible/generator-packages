import * as React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import { effects } from '<%= namespace %>/bootup';
const { bootup } = effects;

import createState from './store';
import { rootReducer } from './packages';
import App from './app';

interface WindowInterface extends Window {
  reduxStore: any;
}

export default () => {
  const store = createState({ rootReducer });
  (window as WindowInterface).reduxStore = store;
  store.dispatch(bootup());

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('#app'),
  );
};
