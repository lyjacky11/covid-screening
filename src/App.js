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

  componentDidMount() {
    const bodyTag = document.querySelector("body");
    const cachedTheme = localStorage.getItem("theme");
    
    if (cachedTheme !== null) {
        bodyTag.classList.add("light");
        this.setState({theme: cachedTheme});
    }
    else {
        bodyTag.classList.remove("light");
        //this.setState({theme: ""});
    }
  }

  changeTheme = () => {
    const { theme } = this.state;
    const bodyTag = document.querySelector("body");
    
    if (theme === "") {
        bodyTag.classList.add("light");
        this.setState({theme: "light"});
        localStorage.setItem("theme", "light");
    }
    else {
        bodyTag.classList.remove("light");
        this.setState({theme: ""});
        localStorage.removeItem("theme");
    }
  }

	render () {
    const { theme } = this.state;
    
		return (
      <div className="appContainer">
        <Header theme={theme}></Header>

        <div className="logoContainer">
          <img className="logo rotate" src={logo} alt="Logo"></img>
        </div>

        <Body theme={theme}></Body>
        <Footer theme={theme} changeTheme={this.changeTheme}></Footer>
      </div>
    );
	}
}

export default App;
