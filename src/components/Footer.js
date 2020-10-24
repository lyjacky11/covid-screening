import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
import "./Footer.css";

class Footer extends Component {
    
    render() {
        const { theme, changeTheme } = this.props;
        const footerClass = `footer ${theme}`;
        const themeBtn = `themeBtn ${theme}`;
        
        return (
            <footer className={footerClass}>
                <FontAwesomeIcon className={themeBtn} onClick={changeTheme} icon={faAdjust} size="2x"></FontAwesomeIcon>
                <p className={theme}>© Copyright <script>document.write(new Date().getFullYear())</script>2020, <a href="https://github.com/lyjacky11" target="_blank" rel="noopener noreferrer"><b>Jacky Ly</b></a> <br /><br /> Written in React.JS</p>
            </footer>
        );
    }
}

export default Footer;