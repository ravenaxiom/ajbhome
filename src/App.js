import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CONSTANTS from './constants/constants';
import Header from './components/Header/Header';
import Index from './components/Index/Index';
import Navigation from './components/Navigation/Navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation 
            navigationItems={CONSTANTS.NAVIGATION_ITEMS}
          />
          <Header
            title={CONSTANTS.HEADER_TITLE}
          />

          <Route path="/" component={Index} />
          {/* <Route path="/about/" exact component={<div>about</div>} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
