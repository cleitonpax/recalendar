import moment from "moment";
import { updateCalendar, getMonthDays, formatRangeDays } from '../../_scripts/';

const iso8601 = '2018-07-24';
const today = moment().format('YYYY-MM-DD');
const holidays = [{ date: iso8601 }];
const schedule = [
  {
    start: iso8601,
    title: 'Title'
  }
];
const props = (day) => ({
  today,    
  month: 6,
  year: 2018,
  isLoading: false,
  isSelecting: false,
  selectedDays: formatRangeDays(day, day),
  days: getMonthDays(2018, 6, holidays, schedule),
  schedule
});


test("iso8601", () => {
  const isoState = props(iso8601);  
  expect(updateCalendar(iso8601, iso8601, holidays, schedule)).toEqual(isoState);
});

test("today", () => {
  const todayState = props(today);  
  expect(updateCalendar(today, today, holidays, schedule)).toEqual(todayState);
});
 