import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import moment from "moment";
import { initDay } from '../../_scripts/';

const today = moment()._d;
const ordinaryDay = {
  month: today.getMonth(),
  formated: moment(today).format("YYYY-MM-DD"),
  date: today,
  day: today.getDate(),
  week: today.getDay(),
  util: true,
  holiday: {},
  info: ''
};
const holidays = [
  {
    date: today
  }
];
const schedule = [
  {
    start: today,
    title: 'Title'
  }
];

test("one ordinary day", () => {
  expect(initDay(today, today.getMonth(), [], [])).toEqual(ordinaryDay)
})

test("is holiday yey", () => {
  let holiday = Object.assign({}, ordinaryDay);
  holiday['util'] = false;
  holiday['holiday'] = holidays[0];
  expect(initDay(today, today.getMonth(), holidays, [])).toEqual(holiday)
})

test("has schedule", () => {
  let info = Object.assign({}, ordinaryDay);
  info['info'] = schedule[0].title;
  expect(initDay(today, today.getMonth(), [], schedule)).toEqual(info)
})