import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import '../_styles/iconButton.css';
import { setMonth } from "./";

class IconButton extends Component {
    render() {
        const { selectedDays, setState, iconClass, action } = this.props;
        return(
            <button 
                className="btn btn-light btn-sm" 
                onClick={() => setState({ isSelecting: false, selectedDays: setMonth(action, selectedDays.start, setState) })} >
                <i className={`fa fa-angle-${iconClass} text-primary`}></i>
            </button>
        );
    }
}

export default IconButton;

