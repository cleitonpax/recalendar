import moment from "moment";

export function formatDate(date) {
  return (date === '' && date === null) 
  ? new Date()
  : date instanceof Date
      ? date
      : moment(date)['_d'];
}