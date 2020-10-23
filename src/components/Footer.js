import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
import "./Footer.css";

class Footer extends Component {
    
    /*
    checkTheme() {
        if (localStorage.getItem("theme") === "light") {
            this.changeTheme();
        }
        console.log("Check theme");
    }
    */

    changeTheme() {
        document.querySelector(".header").classList.toggle("light");
        document.querySelector("body").classList.toggle("light");
        document.querySelector(".questionContainer").classList.toggle("light");
        document.querySelector(".themeBtn").classList.toggle("light");
        document.querySelector(".footer p").classList.toggle("light");

        /*
        if (document.querySelector("body").classList.contains("light")) {
            localStorage.setItem("theme", "light");
        }
        else {
            localStorage.removeItem("theme");
        }
        */
    }

    render() {
        return (
            <footer className="footer">
                <FontAwesomeIcon className="themeBtn" onClick={this.changeTheme} icon={faAdjust} size="2x"></FontAwesomeIcon>
                <p>© Copyright <script>document.write(new Date().getFullYear())</script>2020, <a href="https://github.com/lyjacky11" target="_blank" rel="noopener noreferrer"><b>Jacky Ly</b></a> <br /><br /> Written in React.JS</p>
            </footer>
        );
    }
}

export default Footer;