import React, {Component} from "react";
import logo from "./covid-19.png";
import "./App.css";

import Header from './components/Header.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';

class App extends Component {
	render () {
		return (
      <div className="appContainer">
        <Header></Header>
        <div className="logoContainer">
          <img className="logo" src={logo} alt="Logo"></img>
        </div>
        <Body></Body>
        <Footer></Footer>
      </div>
    );
	}
}

export default App;
