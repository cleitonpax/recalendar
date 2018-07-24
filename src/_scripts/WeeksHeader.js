import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import moment from "moment";
import '../_styles/weeksHeader.css';

class WeeksHeader extends Component {
    constructor(props) {
      super(props);      
      this.state = {
        weekDays: moment.weekdaysShort()
      }
    }
    render() {
        const { weekDays } = this.state;
        return(
            <div className="WeeksHeader p-2">
              <div>
                {
                    weekDays.map((item, i) => {
                        return(
                            <div className="text-center text-muted" key={i} >{item}</div>
                        )
                    })
                }
              </div>
            </div>
        );
    }
}

export default WeeksHeader;
