import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
import "./Footer.css";

class Footer extends Component {
    
    render() {
        const { changeTheme } = this.props;
        
        return (
            <footer className="footer">
                <FontAwesomeIcon className="themeBtn" onClick={changeTheme} icon={faAdjust} size="2x"></FontAwesomeIcon>
                <p>© Copyright <script>document.write(new Date().getFullYear())</script>2020, <a href="https://github.com/lyjacky11" target="_blank" rel="noopener noreferrer"><b>Jacky Ly</b></a> <br /><br /> Written in React.JS</p>
            </footer>
        );
    }
}

export default Footer;