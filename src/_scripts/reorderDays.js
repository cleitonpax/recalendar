export function reorderDays(selectedDays, item, dayFormated) {
  const bigger = dayFormated >= selectedDays.start;
  const start = bigger ? selectedDays.start : item.formated;
  const end = bigger ? item.formated : selectedDays.start;
  return { start, end }; 
};