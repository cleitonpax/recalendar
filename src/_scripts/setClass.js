import { hasClass } from "./";

export function setClass(day, selectedDays, today) {
    return `btn btn-secondary col day week${day.week} ${day.month} ${hasClass(day.formated, selectedDays, today)}${!day.util ? " holiday " : ""}`;
}
