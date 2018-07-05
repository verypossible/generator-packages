import * as h from 'react-hyperscript';
import { shallow } from 'enzyme';

import App from './app';

describe('App', () => {
  it('should display `Welcome!` text', () => {
    const tree = shallow(h(App));
    expect(tree.find('div').text()).toEqual('Welcome!');
  });
});
