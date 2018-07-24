import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import moment from "moment";
import '../_styles/display.css';

class Display extends Component {
    render() {        
        const { days } = this.props;
        const start = moment(days.start).format('DD/MM/YYYY');
        const end = moment(days.end).format('DD/MM/YYYY');
        return(
            <div className="Display h5 p-5 text-success">
                {start}
                {
                    start !== end && 
                    <span>                    
                        <span className="pl-2 pr-2"> - </span>
                        {end}
                    </span>
                }
            </div>
        );
    }
}

export default Display;

