import React, { Component } from 'react';
import PropTypes from 'prop-types';
import generate from '../../helpers/wordGenerator';
import checkNumericValueOfWord from '../../helpers/checkNumericValueOfWord';

class WordGenerator extends Component {

  constructor() {
    super();

    this.state = {
      number: 0,
      word: generate()
    };
  }

  generateWordForNumber = (number) => {
    let word = '';
    let found = false;
    let tries = 0;

    while (!found && tries < 1000) {
      tries++;
      const generatedWord = generate();

      if (checkNumericValueOfWord(generatedWord) == number) {
        found = true;
        word = generatedWord;
      }
    }

    return word;
  }

  handleInputChange = (event) => {
    this.setState({
      number: event.target.value,
      word: this.generateWordForNumber(event.target.value)
    });
  };

  handleButtonClick = (event) => {
    event.preventDefault();
    this.setState({ word: this.generateWordForNumber(this.state.number) });
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="number"
            onChange={this.handleInputChange}
            value={this.state.number}
          />
        </div>
        <div>
          {this.state.word}
        </div>
        <div>
          <button
            type="button"
            onClick={this.handleButtonClick}
          >
            Regenerate word
          </button>
        </div>
      </div>
    )
  }
}

WordGenerator.propTypes = {};

export default WordGenerator;
