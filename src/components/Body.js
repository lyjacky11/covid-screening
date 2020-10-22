import React, { Component } from "react";
import "./Body.css";
import Question from "./Question.js";
import ResponseBtns from "./ResponseBtns.js";

class Body extends Component {
	constructor (props) {
		super(props);
		this.state = {
			currentQuestion : 0,
			questions       : [
				{
					num: "Question 1:",
					question : "Do you have any of the following new or worsening symptoms: Fever, Cough, Difficulty breathing, Sore throat, Loss of taste or smell, Nausea, vomiting or diarrhea?",
					response : null
				},
				{
					num: "Question 2:",
					question : "Have you been in close contact with someone who is confirmed COVID-19 or probable (symptoms + exposure) in the past 14 days without wearing appropriate PPE?",
					response : null
				},
				{
					num: "Question 3:",
					question: "Have you returned from travel outside Canada in the past 14 days?",
					response: null
				}
			]
		};
		this.initialState = this.state;
	}

	resetState = () => {
		this.setState(this.initialState);
	}

	nextQuestion (event) {
		const { currentQuestion, questions } = this.state;
		const numQuestions = questions.length;
		const userResponse = event.target.value;
		
		if (currentQuestion < numQuestions) {
			var questionsList = questions;
			questionsList[currentQuestion].response = userResponse;
			this.setState( {questions: questionsList} );
			this.setState( { currentQuestion: currentQuestion + 1 } );
		}
	}

	hasCOVID () {
		const { questions } = this.state;
		var yesList = questions.filter(questionObj => questionObj.response === "Yes");
		if (yesList.length > 0) {
			return true;
		}
		return false;
	}

	render () {
		const { currentQuestion, questions } = this.state;
		const numQuestions = questions.length;
		if (currentQuestion < numQuestions) {
			return (
				<div className="body">
					<Question questions={questions[currentQuestion]} />
					<ResponseBtns nextQ={this.nextQuestion.bind(this)} />
				</div>
			);
		}
		else if (this.hasCOVID()) {
			return (
				<div className="body">
					<Question questions={{num: "Result:", question: "You have possibly contracted COVID-19! Please visit a local testing centre!"}} />
					<div className="responseBtns">
						<button value="Restart" onClick={this.resetState}>Restart</button>
					</div>
				</div>
			);
		}
		else if (!this.hasCOVID()) {
			return (
				<div className="body">
					<Question questions={{num: "Result:", question: "Congratulations! You do not appear to have symptoms of COVID!"}} />
					<div className="responseBtns">
						<button value="Restart" onClick={this.resetState}>Restart</button>
					</div>
				</div>
			);
		}
		
	}
}

export default Body;
