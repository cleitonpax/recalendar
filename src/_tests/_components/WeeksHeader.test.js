import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import WeeksHeader from '../../_components/WeeksHeader';

const today = new Date();

const wrapper = shallow(
  <WeeksHeader />
);

test('is loading div', () => {
  expect(wrapper.find('.WeeksHeader')).toHaveLength(1);
});

test('days are created', () => {
  expect(wrapper.find('.text-center')).toHaveLength(7);
});
