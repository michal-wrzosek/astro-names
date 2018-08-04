import React from 'react';
import PropTypes from 'prop-types';
import generate from '../../helpers/wordGenerator';

const WordGenerator = () => {

  return (
    <div>
      {['', '', '', '', ''].map((_, index) =>
        <div key={index}>
          {generate()}
        </div>
      )}
    </div>
  )
}

WordGenerator.propTypes = {};

export default WordGenerator;
