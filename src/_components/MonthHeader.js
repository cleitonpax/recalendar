import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import Select from 'react-select';
import '../_styles/monthHeader.css';
import IconButton from "./IconButton";
import { getYears, getMonths, setMonth } from '../_scripts';

class MonthHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: getYears(),
            months: getMonths()
        };        
    }
    
    render() {
        const { month, year, setState } = this.props;
        const { years, months } = this.state;
        const mountDay = (NewMonth) => (`${year}-${NewMonth.value > 9 ? '' : '0'}${NewMonth.value + 1}-02`);
        const mountYear = (newYear) => (`${newYear.value}-${month + 1}-02`);

        return(
            <div className="Header text-center p-2">
                <div className="Header-container">
                    <IconButton key="left" {...this.props} action="PREV" iconClass="left" />
                    <span className="selectors pl-3 pr-3 small text-muted">
                        <Select 
                            key="month"
                            options={months}
                            onChange={(newMonth) => setMonth('MONTH', mountDay(newMonth), setState) } 
                            value={months.find(m => m.value === month)}
                            isSearchable={true}                            
                            className="dropdown month-dropdown"
                            isRtl={true}
                        />
                        <span className="divisor"> / </span> 
                        <Select 
                            key="years"
                            options={years}
                            onChange={(newYear) => setMonth('YEAR', mountYear(newYear), setState)} 
                            value={years.find(y => y.value === year)}
                            isSearchable={true}
                            className="dropdown year-dropdown"
                        />
                    </span>
                    <IconButton key="right" {...this.props} action="NEXT" iconClass="right" />
                </div>
            </div>
        );
    }
}

export default MonthHeader;

