import moment from "moment";

export function initDay(day, month, holidays, schedule) {
    const formated = moment(day).format("YYYY-MM-DD");
    const info = !!schedule && schedule.lenght !== 0 ? schedule.find(sched => moment(sched.start).format("YYYY-MM-DD") === formated) : {};
    const holiday = !!holidays && holidays.lenght !== 0 ? holidays.find(holy => moment(holy.date).format("YYYY-MM-DD") === formated) : {};
    return {
        month,
        formated: moment(day).format("YYYY-MM-DD"),
        date: moment(day)._d,
        day: day.getDate(),
        week: day.getDay(),
        util: holiday && holiday.lenght !== 0 ? false : true,
        holiday,
        info: info && info.title ? info.title : ''
    };
}

