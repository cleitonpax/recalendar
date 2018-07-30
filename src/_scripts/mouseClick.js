import { formatRangeDays } from './';

export function mouseClick(props) {
  const { isSelecting, multiSelect, item } = props;
  const selectedDays = formatRangeDays(item.formated, item.formated);
  let state = { isSelecting };
  if (!isSelecting) { 
    state = { isSelecting: false };
  };
  if (!multiSelect) { 
    state = { isSelecting: false, selectedDays };
  }
  return state;
}