import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import '../_styles/weeks.css';
import Day from './Day';

class Weeks extends Component {
    render() {
        const { days } = this.props;

        return(
            <div className="Weeks">
                <div className="btn-group">
                {
                    days.map((item, i) => {
                        return(
                            <Day {...this.props} item={item} key={i} />
                        )
                    })
                }
                </div>
            </div>
        );
    }
}

export default Weeks;

