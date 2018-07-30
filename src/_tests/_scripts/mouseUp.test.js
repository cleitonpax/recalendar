import { mouseUp } from '../../_scripts/';

const day = '2018-07-23';
const otherDay = '2018-07-20';
const otherPrevDay = '2018-06-20';

const selectedDays = (day) => ({
  start: day,
  end: day
});

const props = (isSelecting, multiSelect, month, day, prevDay) => ({ 
  isSelecting,
  multiSelect,
  selectedDays: selectedDays(prevDay),
  month,
  item: { 
    formated: day,
    date: new Date(day)
  },
  setState: (state) => (state),   
});

test("click selecting false, multi true, same month", () => {
  const propsNoSelectingMulti = props(false, true, 6, day, otherDay);
  const propsNoSelectingMultiReturn = mouseUp(propsNoSelectingMulti);
  expect(propsNoSelectingMultiReturn.isSelecting).toEqual(undefined);
  expect(propsNoSelectingMultiReturn.selectedDays).toEqual(undefined);
})

test("click selecting true, multi true, same month", () => {
  const propsSelectingMulti = props(true, true, 6, day, otherDay);
  const propsSelectingMultiReturn = mouseUp(propsSelectingMulti);
  expect(propsSelectingMultiReturn.isSelecting).toEqual(false);
  expect(propsSelectingMultiReturn.selectedDays).toEqual({ start: otherDay, end: day });
})

test("click selecting true, multi false, same month", () => {
  const propsSelectingNoMulti = props(true, false, 6, day, otherDay);
  const propsSelectingNoMultiReturn = mouseUp(propsSelectingNoMulti);
  expect(propsSelectingNoMultiReturn.isSelecting).toEqual(undefined);
  expect(propsSelectingNoMultiReturn.selectedDays).toEqual(undefined);
})

test("click selecting true, multi true, prev month", () => {
  const propsSelectingMultiPrev = props(true, true, 6, day, otherPrevDay);
  const propsSelectingMultiPrevReturn = mouseUp(propsSelectingMultiPrev);
  expect(propsSelectingMultiPrevReturn.isSelecting).toEqual(undefined);
  expect(propsSelectingMultiPrevReturn.selectedDays).toEqual(undefined);
})

test("click selecting false, multi true, prev month", () => {
  const propsNoSelectingMultiPrev = props(false, true, 6, day, otherPrevDay);
  const propsNoSelectingMultiPrevReturn = mouseUp(propsNoSelectingMultiPrev);
  expect(propsNoSelectingMultiPrevReturn.isSelecting).toEqual(undefined);
  expect(propsNoSelectingMultiPrevReturn.selectedDays).toEqual(undefined);
})

test("click selecting false, multi false, prev month", () => {
  const propsNoSelectingNoMultiPrev = props(false, false, 6, day, otherPrevDay);
  const propsNoSelectingNoMultiPrevReturn = mouseUp(propsNoSelectingNoMultiPrev);
  expect(propsNoSelectingNoMultiPrevReturn.isSelecting).toEqual(undefined);
  expect(propsNoSelectingNoMultiPrevReturn.selectedDays).toEqual(undefined);
})