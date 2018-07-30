import { reorderDays, formatRangeDays } from '../../_scripts/';

const yesterday = '2018-07-22';
const today = '2018-07-23';
const tomorrow = '2018-07-24';

const props = (day, selectedDays) => ([ 
  formatRangeDays(selectedDays),
  { 
    formated: day,
    date: new Date(day)
  },
  day,
]);

test("yesterday is less then today", () => {
  const propsYesterdayToday = props(yesterday, today);
  const propsYesterdayTodayReturn = reorderDays(...propsYesterdayToday);
  expect(propsYesterdayTodayReturn).toEqual({ start: yesterday, end: today });
})

test("tomorrow is bigger then today", () => {
  const propsTomorrowToday = props(tomorrow, today);
  const propsTomorrowTodayReturn = reorderDays(...propsTomorrowToday);
  expect(propsTomorrowTodayReturn).toEqual({ start: today, end: tomorrow });
})
 