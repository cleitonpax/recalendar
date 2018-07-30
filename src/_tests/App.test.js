import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from '../App';

const wrapper = shallow(
    <App />
);

test('is loading div', () => {
  expect(wrapper.find('.App')).toHaveLength(1);
});

test('is loading calendar', () => {
  expect(wrapper.find('.App').children().find('Calendar')).toHaveLength(1);
}); 