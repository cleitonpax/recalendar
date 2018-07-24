import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from '../App';

test('is loading div', () => {
  const wrapper = shallow(
      <App />
  );
  expect(wrapper.find('.App')).toHaveLength(1);
});