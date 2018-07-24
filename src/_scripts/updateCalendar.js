import moment from "moment";
import { getMonthDays, formatDate } from './';

export function updateCalendar(startDay, endDay, holidays, schedule) {
  const start = formatDate(startDay);
  const end = formatDate(endDay);
  const startFormated = moment(start).format("YYYY-MM-DD");
  const endFormated = moment(end).format("YYYY-MM-DD");          
  return({  
    today: moment().format("YYYY-MM-DD"),    
    month: start.getMonth(),
    year: start.getFullYear(),
    isLoading: false,
    isSelecting: false,
    selectedDays: { start: startFormated, end: endFormated },
    days: getMonthDays(start.getFullYear(), start.getMonth(), holidays, schedule),
    schedule
  });  
}
