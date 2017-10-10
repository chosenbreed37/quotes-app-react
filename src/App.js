import React, { Component } from 'react';
import logo from './assets/images/mustache.png';
import './App.css';
import quotes from './quotes.json';
// import QuotesList from './components/standard/quotes-list';
import QuotesList from './components/material-ui/quotes-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Le Moustache</h1>
          <hr />
        </header>
        <p className="App-intro">
        </p>
        <QuotesList quotes={quotes} />
      </div>
    );
  }
}

export default App;
