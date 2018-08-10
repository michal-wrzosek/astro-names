import React, { Component } from 'react';
import checkNumericValueOfWord from '../../helpers/checkNumericValueOfWord';
import './index.css';

class NameChecker extends Component {

  state = {
    name: ''
  };

  

  handleInputChange = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div className="NameChecker">
        <h1 className="NameChecker__headline">
          Numerological word checker
        </h1>
        <form className="container NameChecker__form">
          <input
            className="form-control NameChecker__form__input"
            name="input"
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange}
            placeholder="Name to calculate"
          />
        </form>
        <div className="NameChecker__number">
          {checkNumericValueOfWord(this.state.name)}
        </div>
      </div>
    );
  }
}

export default NameChecker;
