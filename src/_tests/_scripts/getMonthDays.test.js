import { getMonthDays, initDay } from '../../_scripts/';

const today = new Date();

test("number os days of complete month with previous and next days", () => {
  expect(getMonthDays(today.getFullYear(), today.getMonth() + 1)).toHaveLength(35)
})