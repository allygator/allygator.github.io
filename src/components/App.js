import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <div id="millican"></div>
        <Projects />
      </div>
    );
  }
}

export default App;
