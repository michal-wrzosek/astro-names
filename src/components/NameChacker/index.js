import React, { Component } from 'react';
import './index.css';

class NameChacker extends Component {

  state = {
    name: ''
  };

  letterNumbers = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6,
    "g": 7,
    "h": 8,
    "i": 9,
    "j": 1,
    "k": 2,
    "l": 3,
    "m": 4,
    "n": 5,
    "o": 6,
    "p": 7,
    "q": 8,
    "r": 9,
    "s": 1,
    "t": 2,
    "u": 3,
    "v": 4,
    "w": 5,
    "x": 6,
    "y": 7,
    "z": 8
  }

  convertNameToNumber = (name) => {
    let number = name
      .split('')
      .filter(letter => typeof this.letterNumbers[letter] !== 'undefined')
      .reduce((sum, letter) => sum + this.letterNumbers[letter], 0);

    while(number > 9) {
      number = number.toString().split('').reduce((sum, stringNumber) => {
        return sum + parseInt(stringNumber, 10);
      }, 0);
    }

    return number;
  };

  handleInputChange = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div className="NameChacker">
        <form className="container NameChacker__form">
          <input
            className="form-control NameChacker__form__input"
            name="input"
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange}
            placeholder="Name to calculate"
          />
        </form>
        <div className="NameChacker__number">
          {this.convertNameToNumber(this.state.name)}
        </div>
      </div>
    );
  }
}

export default NameChacker;
