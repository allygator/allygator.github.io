import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Main from './Main';
import '../App.css';

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path='/' component={Main}/>
    </Switch>
  </div>
)

export default App;
