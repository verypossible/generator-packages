import * as React from 'react';
import { mount } from 'enzyme';

import App from './app';

describe('App', () => {
  it('should display text', () => {
    const tree = mount(<App />);
    expect(tree.find('div').text()).toEqual('You clicked 0 timesClick me');
  });

  describe('when clicking button', () => {
    it('should change the text', () => {
      const tree = mount(<App />);
      tree.find('button').simulate('click');
      expect(tree.find('div').text()).toEqual('You clicked 1 timesClick me');
    });
  });
});
