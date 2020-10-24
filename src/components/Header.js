import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
    render() {
        const { theme } = this.props;

        return (
            <div className={`header ${theme}`}>COVID Screening App</div>
        );
    }
}

export default Header;