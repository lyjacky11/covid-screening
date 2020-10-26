import React, { Component } from "react";
import "./Question.css";

class Question extends Component {
    
    render() {
        const { questions, theme } = this.props;

        return (
            <div className="mainContainer">
                <div className={`questionContainer ${theme}`}>
                    <p className="questionNum">
                        {questions.num}
                    </p>
                    <p className="question">
                        {questions.question}
                    </p>
                    <p className="link">
                        <a href={questions.link} target="_blank" rel="noopener noreferrer">{questions.link}</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default Question;