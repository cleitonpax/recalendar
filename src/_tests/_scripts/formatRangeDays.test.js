import { formatRangeDays } from '../../_scripts/';

const yesterday = '2018-07-22';
const today = '2018-07-23';

test("passing only one day", () => {
  const oneDayReturn = formatRangeDays(today);
  expect(oneDayReturn).toEqual({ start: today, end: today });
})

test("passing two days", () => {
  const twoDays = formatRangeDays(yesterday, today);
  expect(twoDays).toEqual({ start: yesterday, end: today });
})
