import moment from "moment";

export function getMonths() {
  const months = moment.months();
  let out = [];
  months.forEach((month, i) => { 
    out.push({ value: i, label: month }); 
  });
  return out;
}
