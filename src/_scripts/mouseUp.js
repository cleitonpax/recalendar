import moment from "moment";
import { reorderDays, calcMonthDiff } from "./";

export function mouseUp(props) {
  const { isSelecting, selectedDays, multiSelect, item } = props;
  const dayFormated = moment(item.date);
  const monthDiff = calcMonthDiff(moment(selectedDays.start)._d.getMonth(), dayFormated);
  let state = (multiSelect && isSelecting && monthDiff === 0)
    ? {
        isSelecting: false, 
        selectedDays: reorderDays(selectedDays, item, dayFormated.format('YYYY-MM-DD')) 
      }
    : {};
  return state;  
}
