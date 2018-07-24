import { setClass, hasClass } from '../../_scripts/';

const today = new Date();
const mock = `btn btn-secondary col day week${today.week} ${today.month} ${hasClass(today.formated, [ today ], today)}${!today.util && " holiday "}`;

test("select today", () => {
  expect(setClass(today, [ today ], today)).toEqual(mock)
})