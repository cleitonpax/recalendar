import moment from "moment";
import { getMonthDays, formatRangeDays } from './';

export function setMonth(action, day, setState) {
    const firstDay = moment(day).format("YYYY-MM-02");
    let newDay = action === 'NEXT' 
        ? new Date(firstDay).setMonth(new Date(firstDay).getMonth() + 1)
        : action === 'PREV'
            ? new Date(firstDay).setMonth(new Date(firstDay).getMonth() - 1)
            : firstDay;
    const month = new Date(newDay).getMonth();
    const year = new Date(newDay).getFullYear();
    const days = getMonthDays(year, month);
    const selectedDays = formatRangeDays(moment(newDay).format("YYYY-MM-DD"), moment(newDay).format("YYYY-MM-DD"));
    setState({ selectedDays, month, year, days, isLoading: true });
    return selectedDays;
}