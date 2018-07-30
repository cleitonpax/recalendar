import { mouseDown, formatRangeDays } from '../../_scripts/';

const day = '2018-07-23';

const props = (isSelecting, month, day) => ({ 
  isSelecting, 
  selectedDays: formatRangeDays('2018-07-20'),
  month,
  item: { 
    formated: day,
    date: new Date(day)
  },
  setState: (state) => (state),   
});

test("click selecting false same month", () => {
  const propsNoSelectingReturn = mouseDown(props(false, 6, day));
  expect(propsNoSelectingReturn.isSelecting).toEqual(true);
  expect(propsNoSelectingReturn.selectedDays).toEqual(formatRangeDays(day));
})

test("click selecting true previous month, daysDiff bigger than 0", () => {
  const propsNoSelectingReturn = mouseDown(props(true, 5, day));
  expect(propsNoSelectingReturn.isSelecting).toEqual(false);
  expect(propsNoSelectingReturn.selectedDays).toEqual(formatRangeDays(day));
}) 

test("click selecting false previous month, daysDiff bigger than 0", () => {
  const propsNoSelectingDiffReturn = mouseDown(props(false, 5, day));
  expect(propsNoSelectingDiffReturn).toEqual({ isSelecting: false, selectedDays: formatRangeDays("2018-07-23", "2018-07-23") });
})

test("click selecting true same month", () => {
  const propsSelectingReturn = mouseDown(props(true, 6, day));
  expect(propsSelectingReturn).toEqual({});
})
