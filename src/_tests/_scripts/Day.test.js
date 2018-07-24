import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import moment from "moment";
import Day from '../../_scripts/Day';
import { getMonthDays } from '../../_scripts';

const today = new Date();
const todayFormated = moment(today).format("YYYY-MM-DD");

let props = {
  today: todayFormated,
  day: today.getDate(),
  month: today.getMonth(),
  year: today.getFullYear(),
  isSelecting: false,
  selectedDays: { start: todayFormated, end: todayFormated },
  days: getMonthDays(today.getFullYear(), today.getMonth()),
  setState: (state) => setState(state)
};
const setState = (state) => Object.keys(state).forEach(key => props[key] = state[key]);

const wrapper = shallow(
  <Day {...props} item={props.days[15]} />
);

test('day style is created', () => {
  expect(wrapper.find('.day')).toHaveLength(1);
});

test('is clicked', () => {
  wrapper.find('.day').simulate('click');
  expect(props.selectedDays).toEqual({ start: props.days[15].formated, end: props.days[15].formated });
});
