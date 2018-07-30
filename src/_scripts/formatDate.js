import moment from "moment";

export function formatDate(date) {
  return (
    (date === '' || date === null || moment(date) === 'Invalid date') 
      ? moment()['_d']
      : date instanceof Date
          ? date
          : moment(date)['_d']
  )
}