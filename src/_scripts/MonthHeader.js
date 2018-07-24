import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import Select from 'react-select';
import '../_styles/monthHeader.css';
import IconButton from "./IconButton";
import { getYears, getMonths, setMonth } from './';

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
        return(
            <div className="Header text-center p-2">
                <div>
                    <IconButton {...this.props} action="PREV" iconClass="left" />
                    <span className="pl-3 pr-3 small text-muted">
                        <Select 
                            options={months}
                            onChange={(newMonth) => setMonth('MONTH', `${year}-${newMonth.value + 1}-02`, setState)} 
                            value={months.find(m => m.value === month)}
                            isSearchable={true}                            
                            className="dropdown"
                            isRtl={true}
                        />
                        <span className="divisor"> / </span> 
                        <Select 
                            options={years}
                            onChange={(newYear) => setMonth('YEAR', `${newYear.value}-${month + 1}-02`, setState)} 
                            value={years.find(y => y.value === year)}
                            isSearchable={true}
                            className="dropdown"
                        />
                    </span>
                    <IconButton {...this.props} action="NEXT" iconClass="right" />
                </div>
            </div>
        );
    }
}

export default MonthHeader;

