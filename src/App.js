import React, {Component} from "react";
import logo from "./covid-19.png";
import "./App.css";

import Header from './components/Header.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';

class App extends Component {
  constructor (props) {
      super(props);
      this.state = {
          theme: "",
      }
  }

  changeTheme = () => {
    const { theme } = this.state;
  
    document.querySelector(".header").classList.toggle("light");
    document.querySelector("body").classList.toggle("light");
    document.querySelector(".questionContainer").classList.toggle("light");
    document.querySelector(".themeBtn").classList.toggle("light");
    document.querySelector(".footer p").classList.toggle("light");
    
    if (theme === "") {
        this.setState({theme: "light"});
    }
    else {
        this.setState({theme: ""});
    }
  }

	render () {
    const { theme } = this.state;
    
		return (
      <div className="appContainer">
        <Header></Header>
        <div className="logoContainer">
          <img className="logo" src={logo} alt="Logo"></img>
        </div>
        <Body theme={theme}></Body>
        <Footer changeTheme={this.changeTheme}></Footer>
      </div>
    );
	}
}

export default App;
