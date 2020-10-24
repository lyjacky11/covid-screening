import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
    render() {
        const { theme } = this.props;
        const headerClass = `header ${theme}`;

        return (
            <div className={headerClass}>COVID Screening App</div>
        );
    }
}

export default Header;