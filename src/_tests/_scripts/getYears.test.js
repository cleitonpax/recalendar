import { getYears } from '../../_scripts/';

const twoThousand = { value: 2000, label: 2000 };
const years = getYears();

test("number of years", () => {
  expect(years).toHaveLength(50)
})

test("2000 year object", () => {
  expect(years[30]).toEqual(twoThousand)
})