import moment from "moment";
import { formatRangeDays } from './';

export function mouseOver(props) {
  const { isSelecting, selectedDays, multiSelect, item } = props;
  const monthDiff = moment(selectedDays.start)._d.getMonth() - moment(item.date)._d.getMonth();
  const selected = formatRangeDays(selectedDays.start, item.formated);  
  let state = (multiSelect && isSelecting && monthDiff === 0)
    ? { selectedDays: selected }
    : { isSelecting: false };
  return state;
}
