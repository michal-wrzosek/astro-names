import React, { Component } from 'react';
import logo from './logo.svg';
import NameChacker from './components/NameChacker';
import WordGenerator from './components/WordGenerator';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NameChacker />
        <WordGenerator />
      </div>
    );
  }
}

export default App;
