import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import '../_styles/detailsDay.css';

class DetailsDay extends Component {
    render() {
        const { item } = this.props;  
        return(
            <div className="DetailsDay" >
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

export default DetailsDay;

