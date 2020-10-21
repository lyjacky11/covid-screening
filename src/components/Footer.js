import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <p>© Copyright <script>document.write(new Date().getFullYear())</script>2020, <a href="https://github.com/lyjacky11" target="_blank" rel="noopener noreferrer">Jacky Ly</a>.</p>
                <p>Written in React.JS.</p>
            </footer>
        );
    }
}

export default Footer;