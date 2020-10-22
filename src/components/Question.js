import React, { Component } from "react";
import "./Question.css";

class Question extends Component {
    render() {
        const questions = this.props.questions;
        
        return (
            <div className="mainContainer">
                <div className="questionContainer">
                    <p className="questionNum">
                        {questions.num}
                    </p>
                    <p className="question">
                        {questions.question}
                    </p>      
                </div>          
            </div>
        );
    }
}

export default Question;