import React, { Component } from 'react';
import checkNumericValueOfWord from '../../helpers/checkNumericValueOfWord';
import './index.css';

class NameChacker extends Component {

  state = {
    name: ''
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
          {checkNumericValueOfWord(this.state.name)}
        </div>
      </div>
    );
  }
}

export default NameChacker;
