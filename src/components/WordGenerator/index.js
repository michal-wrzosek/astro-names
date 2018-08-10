import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import generate from '../../helpers/wordGenerator';
import checkNumericValueOfWord from '../../helpers/checkNumericValueOfWord';
import './index.css';

class WordGenerator extends Component {

  constructor() {
    super();

    this.state = {
      number: 1,
      word: this.generateWordForNumber(1)
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

  handleNrButtonClick = (nr) => {
    this.setState({
      number: nr,
      word: this.generateWordForNumber(nr)
    });
  };

  handleRegenerateButtonClick = (event) => {
    event.preventDefault();
    this.setState({ word: this.generateWordForNumber(this.state.number) });
  }

  render() {
    return (
      <div className="WordGenerator">
        <h1
          className="WordGenerator__headline"
        >
          Numerological word generator
        </h1>
        <div
          className="btn-group WordGenerator__btns"
          role="group"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(nr =>
            <button
              key={nr}
              type="button"
              className={classNames({
                'btn': true,
                'btn-secondary': true,
                'active': nr === this.state.number,
                'WordGenerator__btns__btn': true
              })}
              onClick={() => this.handleNrButtonClick(nr)}
            >
              {nr}
            </button>
          )}
        </div>
        <div className="WordGenerator__word">
          {this.state.word}
        </div>
        <div className="WordGenerator__generate">
          <button
            type="button"
            className="btn btn-primary WordGenerator__generate__btn"
            onClick={this.handleRegenerateButtonClick}
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
