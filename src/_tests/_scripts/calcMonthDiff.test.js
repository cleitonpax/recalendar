import { calcMonthDiff } from '../../_scripts/';

const day = '2018-07-24';
const month = 6;
const prevMonthDay = '2018-06-24';
const nextMonthDay = '2018-08-24';
const sameMonthDiff = calcMonthDiff(month, day);
const prevMonthDiff = calcMonthDiff(month, prevMonthDay);
const nextMonthDiff = calcMonthDiff(month, nextMonthDay);

test("same month", () => {
  expect(sameMonthDiff).toEqual(0)
})

test("prev month", () => {
  expect(prevMonthDiff).toEqual(1)
})

test("next month", () => {
  expect(nextMonthDiff).toEqual(-1)
})