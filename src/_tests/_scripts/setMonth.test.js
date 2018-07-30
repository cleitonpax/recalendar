import moment from "moment";
import { setMonth, formatRangeDays } from '../../_scripts/';

const setState = (state) => (state);
const today = '2018-07-24';
const nextMonthFistDay ='2018-08-01';
const prevMonthFistDay ='2018-06-01';
const januaryMonthFistDay ='2018-01-02';
const lasYearMonthFistDay ='2017-06-02';
const nextMonthDay = formatRangeDays(nextMonthFistDay);
const prevMonthDay = formatRangeDays(prevMonthFistDay);
const januaryMonthDay = formatRangeDays(januaryMonthFistDay);
const lastYearMonthDay = formatRangeDays(lasYearMonthFistDay);

test("next month", () => {
  expect(setMonth('NEXT', today, setState)).toEqual(nextMonthDay)
})

test("prev month", () => {
  expect(setMonth('PREV', today, setState)).toEqual(prevMonthDay)
})

test("set month", () => {
  expect(setMonth('MONTH', januaryMonthFistDay, setState)).toEqual(januaryMonthDay)
})

test("set year", () => {
  expect(setMonth('YEAR', lasYearMonthFistDay, setState)).toEqual(lastYearMonthDay)
})