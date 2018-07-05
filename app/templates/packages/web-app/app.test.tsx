import * as React from 'react';
import { shallow } from 'enzyme';

import App from './app';

describe('App', () => {
  it('should display `Welcome!` text', () => {
    const tree = shallow(<App />);
    expect(tree.find('div').text()).toEqual('Welcome!');
  });
});
