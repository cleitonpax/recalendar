import { initDay } from "./";

export function getMonthDays(year, month, holidays, schedule) {    
    let date = new Date(year, month, 1);
    let out = [];
    for(date; date.getMonth() === month; date.setDate(date.getDate() + 1)) {
        out.push(initDay(date, "now", holidays, schedule));        
    }
    for(date = new Date(year, month + 1, 1); out[out.length - 1].week < 6; date.setDate(date.getDate() + 1)) {
        out.push(initDay(date, "next", holidays, schedule));        
    }
    date = new Date(year, month, 1);
    for(date.setDate(date.getDate() - 1); out[0].week > 0; date.setDate(date.getDate() - 1)) {
        out.unshift(initDay(date, "last", holidays, schedule));        
    }
    return out;
}