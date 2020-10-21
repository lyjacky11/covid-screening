import React, { Component } from "react";
import "./ResponseBtns.css";

class ResponseBtns extends Component {
    render() {
        const { nextQ } = this.props;
        
        return (
            <div className="responseBtns">
                <button value="No" onClick={nextQ}>No</button>
                <button value="Yes" onClick={nextQ}>Yes</button>
            </div>
        );
            
    }
}

export default ResponseBtns;

