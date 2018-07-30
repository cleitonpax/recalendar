import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Weeks from '../../_components/Weeks';
import { getMonthDays } from '../../_scripts';

const today = new Date();
const state = {
  today,
  month: today.getMonth() + 1,
  year: today.getFullYear(),
  isSelecting: false,
  selectedDays: [ { start: today, end: today } ],
  days: getMonthDays(today.getFullYear(), today.getMonth() + 1)
};

const wrapper = shallow(
  <Weeks {...state} />
);

test('is loading div', () => {
  expect(wrapper.find('.Weeks')).toHaveLength(1);
});

test('days are created', () => {
  expect(wrapper.find('Day')).toHaveLength(35);
});
