import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import moment from "moment";
import IconButton from '../../_components/IconButton';

const setDay = (day) => ({ 
  start: day, 
  end: day 
});
const today = '2018-07-24';
const nextMonthFistDay ='2018-08-01';
const todayMonthDay = setDay(today);
const nextMonthDay = setDay(nextMonthFistDay);

let props = {
  iconClass: 'right', 
  action: 'NEXT',
  selectedDays: setDay(today),
  setState: (state) => setState(state)
};
const setState = (state) => props.selectedDays = state.selectedDays;

const wrapper = shallow(
  <IconButton {...props} />
);

test('its a button', () => {
  expect(wrapper.find('.btn')).toHaveLength(1);
});

test('has an icon', () => {
  expect(wrapper.find('.fa-angle-right')).toHaveLength(1);
});

test('is clicked', () => {
  wrapper.find('.btn').simulate('click');
  expect(props.selectedDays).toEqual(nextMonthDay);
});
