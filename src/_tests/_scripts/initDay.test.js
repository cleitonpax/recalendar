import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import moment from "moment";
import { initDay } from '../../_scripts/';

const today = new Date();
const mock = {
  month: today.getMonth() + 1,
  formated: moment(today).format("YYYY-MM-DD"),
  date: today,
  day: today.getDate(),
  week: today.getDay(),
  util: true,
};

test("day object to be filled", () => {
  expect(initDay(today, today.getMonth() + 1)).toEqual(mock)
})