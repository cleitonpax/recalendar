import moment from "moment";
import { formatDate } from '../../_scripts/';

const today = moment()['_d'];
const iso = moment(today).format('YYYY-MM-DD');
const string = `${iso}`;

test("iso 8601", () => {
  expect(moment(formatDate(iso)).format('YYYY-MM-DD')).toEqual(iso)
})

test("string iso 8601", () => {
  expect(moment(formatDate(string)).format('YYYY-MM-DD')).toEqual(iso)
})

test("js date", () => {
  expect(moment(formatDate(today)).format('YYYY-MM-DD')).toEqual(iso)
})

test("null", () => {
  expect(moment(formatDate(null)).format('YYYY-MM-DD')).toEqual(iso)
})

test("empty", () => {
  expect(moment(formatDate('')).format('YYYY-MM-DD')).toEqual(iso)
})
