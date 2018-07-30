import { mouseOver, formatRangeDays } from '../../_scripts/';

const day = '2018-07-23';
const otherDay = '2018-07-20';
const otherPrevDay = '2018-06-20';

const props = (isSelecting, multiSelect, month, day, prevDay) => ({ 
  isSelecting,
  multiSelect,
  selectedDays: formatRangeDays(prevDay),
  month,
  item: { 
    formated: day,
    date: new Date(day)
  },
  setState: (state) => (state),   
});

test("click selecting false, multi true, same month", () => {
  const propsNoSelectingMultiReturn = mouseOver(props(false, true, 6, day, otherDay));
  expect(propsNoSelectingMultiReturn.isSelecting).toEqual(false);
  expect(propsNoSelectingMultiReturn.selectedDays).toEqual(undefined);
})

test("click selecting true, multi true, same month", () => {
  const propsSelectingMultiReturn = mouseOver(props(true, true, 6, day, otherDay));
  expect(propsSelectingMultiReturn.isSelecting).toEqual(undefined);
  expect(propsSelectingMultiReturn.selectedDays).toEqual({ start: otherDay, end: day });
})

test("click selecting true, multi false, same month", () => {
  const propsSelectingNoMultiReturn = mouseOver(props(true, false, 6, day, otherDay));
  expect(propsSelectingNoMultiReturn.isSelecting).toEqual(false);
  expect(propsSelectingNoMultiReturn.selectedDays).toEqual(undefined);
})

test("click selecting true, multi true, prev month", () => {
  const propsSelectingMultiPrevReturn = mouseOver(props(true, true, 6, day, otherPrevDay));
  expect(propsSelectingMultiPrevReturn.isSelecting).toEqual(false);
  expect(propsSelectingMultiPrevReturn.selectedDays).toEqual(undefined);
})

test("click selecting false, multi true, prev month", () => {
  const propsNoSelectingMultiPrevReturn = mouseOver(props(false, true, 6, day, otherPrevDay));
  expect(propsNoSelectingMultiPrevReturn.isSelecting).toEqual(false);
  expect(propsNoSelectingMultiPrevReturn.selectedDays).toEqual(undefined);
})

test("click selecting false, multi false, prev month", () => {
  const propsNoSelectingNoMultiPrevReturn = mouseOver(props(false, false, 6, day, otherPrevDay));
  expect(propsNoSelectingNoMultiPrevReturn.isSelecting).toEqual(false);
  expect(propsNoSelectingNoMultiPrevReturn.selectedDays).toEqual(undefined);
})