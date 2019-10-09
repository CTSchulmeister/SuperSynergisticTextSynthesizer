import React from 'react';

const Header = (props) => {
    return (
        <header className="ssts-header">
            <h1 className="ssts-header__app-name">Super Synergistic Text Synthesizer</h1>
            <span className="ssts-header__author-name">By Christian Schulmeister</span>
        </header>
    );
}

export default Header;