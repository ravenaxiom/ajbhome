import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CONSTANTS from './constants/constants';
import About from './components/About/About';
import Store from './components/Store/Store';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
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

          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/store" component={Store} />
        </div>
      </Router>
    );
  }
}

export default App;
