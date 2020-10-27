import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faRedoAlt, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Question, ResponseBtns } from '../';
import "./Body.css";

class Body extends Component {
	constructor (props) {
		super(props);
		this.state = {
			currentQuestion : 0,
			questions       : [
				{
					num: "Welcome to the COVID Screening App!",
					question : "You will be asked a series of COVID-19 screening questions. Click on the arrow below to get started.",
				},
				{
					num: 1,
					question : "Are you experiencing any of these symptoms: Fever, Cough, Difficulty breathing, Sore throat, Loss of taste/smell, Nausea, or Extreme tiredness?",
				},
				{
					num: 2,
					question : "In the last 14 days, have you been in close physical contact with someone who has recently tested positive for COVID-19?",
				},
				{
					num: 3,
					question: "In the last 14 days, have you been in close physical contact with someone has symptoms related to COVID-19? ",
				},
				{
					num: 4,
					question: "In the last 14 days, have you been in close physical contact with someone who has returned from outside of Canada in the last 2 weeks?",
				},
				{
					num: 5,
					question: "Have you travelled and returned from outside of Canada in the last 14 days?",
				}
			]
		};
		this.initialState = this.state;
	}

	resetState = () => {
		this.setState(this.initialState);
	}

	prevQuestion = () => {
		const { currentQuestion } = this.state;
		if (currentQuestion >= 0) {
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
			
			if ((currentQuestion + 1) < numQuestions) {
				var nextObj = questionsList[currentQuestion + 1];
				nextObj.num = `Question ${currentQuestion + 1} of ${numQuestions - 1}:`;
			}
			
			this.setState({
				questions: questionsList,
				currentQuestion: currentQuestion + 1
			});
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
						<button value="Next" onClick={this.nextQuestion}><FontAwesomeIcon icon={faArrowRight} size="2x" /></button>
					</div>
				</div>
			);
		}

		else if (currentQuestion < numQuestions) {
			return (
				<div className="body">
					<Question theme={theme} questions={questions[currentQuestion]} />
					<ResponseBtns prevQ={this.prevQuestion.bind(this)} nextQ={this.nextQuestion.bind(this)} />
				</div>
			);
		}
		
		else if (this.hasCOVID()) {
			return (
				<div className="body">
					<FontAwesomeIcon icon={faTimesCircle} size="6x" color="red" />
					<Question theme={theme} questions={{num: "Result: FAIL", question: "You may have symptoms or have been in close contact with someone who has COVID-19. Please visit a local assessment centre as soon as possible!", link: "https://covid-19.ontario.ca/assessment-centre-locations"}} />
					
					<div className="responseBtns">
						<button value="Restart" onClick={this.resetState}><FontAwesomeIcon icon={faRedoAlt} size="2x" /></button>
					</div>
				</div>
			);
		}
		
		else if (!this.hasCOVID()) {
			return (
				<div className="body">
					<FontAwesomeIcon icon={faCheckCircle} size="6x" color="green" />
					<Question theme={theme} questions={{num: "Result: PASS", question: "You don't appear to have symptoms and are at low risk of COVID-19. Please continue to wear a face mask, wash your hands and maintain social distancing!", link: "https://covid-19.ontario.ca"}} />
					
					<div className="responseBtns">
						<button value="Restart" onClick={this.resetState}><FontAwesomeIcon icon={faRedoAlt} size="2x" /></button>
					</div>
				</div>
			);
		}
	}
}

export default Body;
