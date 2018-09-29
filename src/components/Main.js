import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Header from './Header';
import About from './About';
import Projects from './Projects';
import '../App.css';

class Main extends Component {
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

export default Main;
