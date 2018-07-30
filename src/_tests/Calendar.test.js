import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import moment from "moment";
import Calendar from '../Calendar';
import { getMonthDays, formatRangeDays } from '../_scripts';

const wrapper = shallow(
  <Calendar />
);
const today = new Date();
const todayFormated = moment(today).format("YYYY-MM-DD");

test('is month todays month', () => {
  expect(wrapper.state(['month'])).toEqual(today.getMonth());
});

test('is year todays year', () => {
  expect(wrapper.state(['year'])).toEqual(today.getFullYear());
});

test('is not selecting days', () => {
  expect(wrapper.state(['isSelecting'])).toEqual(false);
});

test('days is created', () => {
  expect(wrapper.state(['days'])).toHaveLength(35);
});

test('selected days is today', () => {
  expect(wrapper.state(['selectedDays'])).toEqual(formatRangeDays(todayFormated, todayFormated));
});