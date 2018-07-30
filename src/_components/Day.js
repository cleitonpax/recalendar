import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import '../_styles/day.css';
import { setClass, mouseDown, mouseUp, mouseOver, mouseClick } from "../_scripts";
import DetailsDay from './DetailsDay';

class Day extends Component {
    render() {
        const { selectedDays, today, item, setState } = this.props;  
        return(
            <div
                className={setClass(item, selectedDays, today)}
                onClick={() => setState(mouseClick(this.props))}
                onMouseUp={() => setState(mouseUp(this.props))}
                onMouseDown={() => setState(mouseDown(this.props))}
                onMouseOver={() => setState(mouseOver(this.props))}
            >
                <DetailsDay item={item} />
            </div>
        );
    }
} 

export default Day;

