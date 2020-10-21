import React, { Component } from "react";
import "./Question.css";

class Question extends Component {
    render() {
        const questions = this.props.questions;

        return (
            <div className="questionContainer">
                <p className="question">
                    {questions.question}
                </p>                
            </div>
        );
    }
}

export default Question;