import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

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
					num: "Welcome to the COVID Screening App!",
					question : "You will be asked a series of questions. Click \"Next\" to continue.",
					response : null
				},
				{
					num: "Question 1 of 3:",
					question : "Do you have any of the following new or worsening symptoms: Fever, Cough, Difficulty breathing, Sore throat, Loss of taste or smell, Nausea, vomiting or diarrhea?",
					response : null
				},
				{
					num: "Question 2 of 3:",
					question : "Have you been in close contact with someone who is confirmed COVID-19 or probable (symptoms + exposure) in the past 14 days without wearing appropriate PPE?",
					response : null
				},
				{
					num: "Question 3 of 3:",
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

	prevQuestion = () => {
		const { currentQuestion, questions } = this.state;
		const numQuestions = questions.length;

		if (currentQuestion < numQuestions) {
			this.setState( { currentQuestion: currentQuestion - 1 } );
		}
	}

	nextQuestion = (event) => {
		const { currentQuestion, questions } = this.state;
		const numQuestions = questions.length;
		const userResponse = event.target.value;
		
		if (currentQuestion < numQuestions) {
			var questionsList = questions;
			questionsList[currentQuestion].response = userResponse;
			this.setState( {questions: questionsList} );
			this.setState( { currentQuestion: currentQuestion + 1 } );
			// console.log(questions);
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
		const { theme } = this.props;

		const numQuestions = questions.length;
		if (currentQuestion === 0) {
			return (
				<div className="body">
					<Question theme={theme} questions={questions[currentQuestion]} />
					<div className="responseBtns">
						<button value="Next" onClick={this.nextQuestion}>Next</button>
					</div>
				</div>
			);
		}
		else if (currentQuestion < numQuestions) {
			return (
				<div className="body">
					<Question theme={theme} questions={questions[currentQuestion]} />
					<ResponseBtns nextQ={this.nextQuestion.bind(this)} prevQ={this.prevQuestion.bind(this)} />
				</div>
			);
		}
		else if (this.hasCOVID()) {
			return (
				<div className="body">
					<FontAwesomeIcon icon={faTimesCircle} size="6x" color="red" />
					<Question theme={theme} questions={{num: "Result:", question: "You may have possibly come in contact with COVID-19. Please visit a local testing centre as soon as possible!"}} />
					
					<div className="responseBtns">
						<button value="Restart" onClick={this.resetState}>Restart</button>
					</div>
				</div>
			);
		}
		else if (!this.hasCOVID()) {
			return (
				<div className="body">
					<FontAwesomeIcon icon={faCheckCircle} size="6x" color="green" />
					<Question theme={theme} questions={{num: "Result:", question: "You don't appear to have symptoms of COVID-19. Please continue to wear a face mask and maintain social distancing!"}} />
					
					<div className="responseBtns">
						<button value="Restart" onClick={this.resetState}>Restart</button>
					</div>
				</div>
			);
		}
		
	}
}

export default Body;
