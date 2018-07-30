import { getMonths } from '../../_scripts/';

const january = { value: 0, label: 'January' };
const months = getMonths();

test("number of months", () => {
  expect(months).toHaveLength(12)
})

test("first month is january", () => {
  expect(months[0]).toEqual(january)
})