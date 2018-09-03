import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <header className="App-header">
        <div id="navContainer">
            <nav>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#about">Contact</a>
            </nav>
            </div>
            <div id="nameContainer">
                <h1>Alyssa Davis</h1>
                <p>Student. Developer. Artist. Traveler. Gamer.</p>
            </div>
        </header>
    );
  }
}

export default Header;
