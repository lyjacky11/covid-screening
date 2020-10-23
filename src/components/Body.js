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
					num: "Question 1 of 5:",
					question : "Are you experiencing any of these symptoms? Fever, Cough, Difficulty breathing, Sore throat, Loss of taste or smell, Nausea, Extreme tiredness",
					response : null
				},
				{
					num: "Question 2 of 5:",
					question : "In the last 14 days, have you been in close physical contact with someone who has recently tested positive for COVID-19?",
					response : null
				},
				{
					num: "Question 3 of 5:",
					question: "In the last 14 days, have you been in close physical contact with someone has symptoms related to COVID-19? ",
					response: null
				},
				{
					num: "Question 4 of 5:",
					question: "In the last 14 days, have you been in close physical contact with someone who has returned from outside of Canada in the last 2 weeks?",
					response: null
				},
				{
					num: "Question 5 of 5:",
					question: "Have you travelled outside of Canada in the last 14 days?",
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
					<Question theme={theme} questions={{num: "Result:", question: "You may have possibly come in contact with COVID-19. Please visit a local testing centre as soon as possible!", link: "https://covid-19.ontario.ca/assessment-centre-locations"}} />
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
					<Question theme={theme} questions={{num: "Result:", question: "You don't appear to have symptoms of COVID-19. Please continue to wear a face mask and maintain social distancing!", link: "https://covid-19.ontario.ca"}} />
					
					<div className="responseBtns">
						<button value="Restart" onClick={this.resetState}>Restart</button>
					</div>
				</div>
			);
		}
		
	}
}

export default Body;
