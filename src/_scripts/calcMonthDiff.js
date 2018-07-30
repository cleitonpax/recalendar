import moment from "moment";

export function calcMonthDiff(month, day) {
  return (month - moment(day)._d.getMonth());
}