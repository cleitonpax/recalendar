import { calcMonthDiff, formatRangeDays } from './';

export function mouseDown(props) {
  const { isSelecting, month, item } = props;       
  const daysDiff = calcMonthDiff(month, item.date);
  const selectedDays = formatRangeDays(item.formated, item.formated);  
  const state = !isSelecting && daysDiff === 0
    ? { isSelecting: true, selectedDays }
    : daysDiff !== 0
      ? { isSelecting: false, selectedDays }
      : {};
  return state;
}
 