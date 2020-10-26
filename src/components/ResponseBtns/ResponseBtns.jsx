import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import "./ResponseBtns.css";

class ResponseBtns extends Component {
    render() {
        const { prevQ, nextQ } = this.props;
        
        return (
            <div className="responseBtns">
                <button value="No" onClick={nextQ}>No</button>
                <button value="Yes" onClick={nextQ}>Yes</button>
                <div className="break"></div>
                <button value="Back" onClick={prevQ}><FontAwesomeIcon icon={faArrowLeft} size="2x" /></button>
            </div>
        );
    }
}

export default ResponseBtns;

