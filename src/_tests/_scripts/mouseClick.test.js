import { mouseClick, formatRangeDays } from '../../_scripts/';

const day = '2018-07-23';

const props = (isSelecting, multiSelect, day) => ({ 
  isSelecting, 
  selectedDays: formatRangeDays('2018-07-20'),
  multiSelect, 
  item: { 
    formated: day
  },
  setState: (state) => (state),   
});

test("click selecting false and multi true", () => {
  const propsNoSelectingMultiReturn = mouseClick(props(false, true, day));
  expect(propsNoSelectingMultiReturn.isSelecting).toEqual(false);
  expect(propsNoSelectingMultiReturn.selectedDays).toEqual(undefined);
})

test("click selecting true and multi true", () => {
  const propsSelectingMultiReturn = mouseClick(props(true, true, day));
  expect(propsSelectingMultiReturn.isSelecting).toEqual(true);
  expect(propsSelectingMultiReturn.selectedDays).toEqual(undefined);  
})

test("click selecting false and multi false", () => {
  const propsNoSelectingNoMultiReturn = mouseClick(props(false, false, day));
  expect(propsNoSelectingNoMultiReturn.isSelecting).toEqual(false);
  expect(propsNoSelectingNoMultiReturn.selectedDays).toEqual(formatRangeDays(day));
})

test("click selecting true and multi false", () => {
  const propsSelectingNoMultiReturn = mouseClick(props(true, false, day));
  expect(propsSelectingNoMultiReturn.isSelecting).toEqual(false);
  expect(propsSelectingNoMultiReturn.selectedDays).toEqual(formatRangeDays(day));
})