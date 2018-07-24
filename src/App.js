import React, { Component } from 'react';
import moment from "moment";
import 'moment/locale/pt-br';
import Display from './_scripts/Display';
import Calendar from './Calendar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './_styles/app.css';

class App extends Component {
  constructor(props){
    super(props);
    moment.locale('pt-BR'); 
    this.state = {
      today: new Date(),
      days: { 
        start: new Date(), 
        end: new Date() 
      },
      schedule: [{
        start: '2018-07-23',
        end: '2018-07-23',
        title: 'Titulo'
      }]
    }
    this.getDate = this.getDate.bind(this);
  }

  getDate(days) {
    this.setState({ days });
  }

  render() {
    const { days, schedule } = this.state;
    return (
      <div className="App">
        <Calendar multiSelect={true} start={days.start} end={days.end} getDate={this.getDate} schedule={schedule}/>
        <Display days={days} />        
      </div>
    );
  }
}

export default App;
