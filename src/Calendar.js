import React, { Component } from 'react';
import Holidays from 'date-holidays';
import { updateCalendar, formatDate } from './_scripts';
import MonthHeader from './_scripts/MonthHeader';
import WeeksHeader from './_scripts/WeeksHeader';
import Weeks from './_scripts/Weeks';
import './_styles/calendar.css';

class Calendar extends Component {
  constructor(props){
    super(props);
    const { start, end } = props;
    const formated = start ? formatDate(start) : new Date();
    const holidays = new Holidays('BR','SP').getHolidays(formated.getFullYear());
    const multiSelect = props.multiSelect === false ? false : true;
    this.state = {
      ...updateCalendar(start, end, holidays, props.schedule || []),
      multiSelect,
      holidays,
      setState: this.setState.bind(this)
    };    
  }

  componentWillReceiveProps(props) {
    const { start, end } = props;
    const { holidays, schedule } = this.state;
    this.setState(updateCalendar(start, end, holidays, schedule));
  }

  componentWillUpdate(nextProps, nextState) {
    if ( (!nextState.isSelecting && this.state.isSelecting) || 
         (nextState.month !== this.state.month) ||
         (nextState.year !== this.state.year)
        ) {
      this.props.getDate(nextState.selectedDays);
    }
  }

  render() {
    return (
      <div className="Calendar">
        <MonthHeader {...this.state} />
        <WeeksHeader />
        <Weeks {...this.state} />
      </div>
    );
  }
}

export default Calendar;