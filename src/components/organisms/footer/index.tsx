import React from "react";
import './style.scss';

// components
import Logo from "../../atoms/logo";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <Logo isWhite />
            </div>
        </footer>
    )
}

export default Footer;