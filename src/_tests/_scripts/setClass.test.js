import moment from "moment";
import { setClass, hasClass } from '../../_scripts/';

const todayObject = (day, util) => ({
  date: moment(day)._d,
  day: day.getDate(),
  week: day.getDay(),
  month: day.getMonth(),
  formated: moment(day).format("YYYY-MM-DD"),
  util
});
const today = todayObject(new Date(), true);
const xmas = todayObject(new Date('2018-12-25'), false);
const mockToday = `btn btn-secondary col day week${today.week} ${today.month} ${hasClass(today.formated, [today], today)}`;
const xmasMock = `btn btn-secondary col day week${xmas.week} ${xmas.month} ${hasClass(xmas.formated, [xmas], today)} holiday `;

test("select today", () => {
  expect(setClass(today, [today], today)).toEqual(mockToday)
})

test("it's christmas", () => {
  expect(setClass(xmas, [xmas], today)).toEqual(xmasMock)
})