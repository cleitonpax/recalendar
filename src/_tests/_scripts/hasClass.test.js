import { hasClass, formatRangeDays } from '../../_scripts/';

const today = new Date();
const yesterday = new Date(today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() - 1));
const beforeYesterday = new Date(today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() - 2));
const tomorrow = new Date(today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() + 1));
const todayObject = formatRangeDays(today, today);
const yesterdayObject = formatRangeDays(yesterday, yesterday);

test("is selected", () => {
  expect(hasClass(yesterday, yesterdayObject, todayObject)).toEqual(' active ')
})

test("is not selected", () => {
  expect(hasClass(beforeYesterday, yesterdayObject, todayObject)).toEqual('')
})

test("today", () => {
  expect(hasClass(today, yesterdayObject, todayObject)).toEqual(' today ')
})

test("tomorroy", () => {
  expect(hasClass(tomorrow, todayObject, todayObject)).toEqual(' expected ')
})
