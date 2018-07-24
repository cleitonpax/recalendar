import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import moment from "moment";
import '../_styles/day.css';
import { setClass } from "./";

class Day extends Component {    
    mouseDown(day) {
        const { isSelecting, month, setState } = this.props;       
        const daysDiff = (month - moment(day.date)._d.getMonth());   
        const selectedDays = {
            start: day.formated,
            end: day.formated,
        };     
        if (!isSelecting && daysDiff === 0) {
            setState({ isSelecting: true, selectedDays });
        } else if (daysDiff !== 0) {
            setState({ isSelecting: false, selectedDays });
        }
    }

    mouseUp(day) {
        const { isSelecting, selectedDays, setState, multiSelect } = this.props;  
        if (multiSelect && isSelecting && (moment(selectedDays.start)._d.getMonth() - moment(day.date)._d.getMonth()) === 0) {
            const isBigger = day.date >= selectedDays.start;
            const start = isBigger ? selectedDays.start : day.formated;
            const end = isBigger ? day.formated : selectedDays.start;
            setState({ isSelecting: false, selectedDays: { start, end } });
        }
    }

    mouseOver(day) {
        const { isSelecting, selectedDays, setState, multiSelect } = this.props;
        (multiSelect && isSelecting && (moment(selectedDays.start)._d.getMonth() - moment(day.date)._d.getMonth()) === 0) 
            ? setState({ selectedDays: { start: selectedDays.start, end: day.formated } })
            : setState({ isSelecting: false });        
    }

    mouseClick(day) {
        const { isSelecting, setState, multiSelect } = this.props; 
        if (!isSelecting) setState({ isSelecting: false });
        if (!multiSelect) setState({ isSelecting: false, selectedDays: { start: day.formated, end: day.formated }});
    }

    render() {
        const { selectedDays, today, item } = this.props;  

        return(
            <div
                className={setClass(item, selectedDays, today)}
                onClick={() => this.mouseClick(item)}
                onMouseUp={() => this.mouseUp(item)}
                onMouseDown={() => this.mouseDown(item)}
                onMouseOver={() => this.mouseOver(item)}
            >
                <h6>
                    {item.day}
                    {item.holiday && item.holiday.name &&
                        <span className="holiday-info">
                            {item.holiday.name}
                        </span>
                    }
                </h6>                            
                <div className="info">
                    {item.info}
                </div>
            </div>
        );
    }
}

export default Day;

