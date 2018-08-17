import * as h from 'react-hyperscript';
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
  // in console access redux store by typeing reduxStore.getState()
  (window as WindowInterface).reduxStore = store;

  render(h(Provider, { store }, [h(App)]), document.querySelector('#app'));
};
