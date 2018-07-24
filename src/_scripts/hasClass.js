export function hasClass(day, selectedDays, today) {
    return ((selectedDays.start <= day && selectedDays.end >= day) || (selectedDays.end <= day && selectedDays.start >= day) ? " active " : "") +
                (today.start === day ? " today " : "") +
                (today.start < day ? " expected " : "");
}
