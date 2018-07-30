export function hasClass(day, selectedDays, today) {
    const { start, end } = selectedDays;
    const isOutOfRange = (start <= day) && (end >= day);
    const isInRange = (start >= day) && (end <= day);
    const isRange = isOutOfRange || isInRange ? ' active ' : '';
    const isToday = today.start === day ? ' today ' : '';
    const isExpected = today.start < day ? ' expected ' : '';
    return `${isRange}${isToday}${isExpected}`;
}
