import React from 'react';

function Header() {
    return (
        <header className="App-header">
        <div id="navContainer">
            <nav>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
            </nav>
            </div>
            <div id="nameContainer">
                <h1>I'm Alyssa</h1>
                <p>Student. Developer. Artist. Traveler. Gamer.</p>
            </div>
        </header>
    );
  }

export default Header;
