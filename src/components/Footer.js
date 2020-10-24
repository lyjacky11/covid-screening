import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
import "./Footer.css";

class Footer extends Component {
    
    render() {
        const { theme, changeTheme } = this.props;
        const footerClass = `footer ${theme}`;
        const themeBtn = `themeBtn ${theme}`;
        const currentYear = new Date().getFullYear();
        
        return (
            <footer className={footerClass}>
                <FontAwesomeIcon className={themeBtn} onClick={changeTheme} icon={faAdjust} size="2x"></FontAwesomeIcon>
                <p className={theme}>© Copyright {currentYear} - <a href="https://github.com/lyjacky11" target="_blank" rel="noopener noreferrer">Jacky Ly</a>. <br /><br /> Developed with the <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React</a> framework.</p>
            </footer>
        );
    }
}

export default Footer;