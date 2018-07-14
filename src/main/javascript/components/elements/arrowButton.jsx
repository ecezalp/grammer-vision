import React from 'react';
import PropTypes from 'prop-types';

export default function ArrowButton({isIncrement, onButtonClick}) {

  const icon = isIncrement ?
    <i className="fas fa-arrow-right"/> :
    <i className="fas fa-arrow-left"/>;

  return <div className={`button-${isIncrement ? 'increment' : 'decrement'}`}
              onClick={onButtonClick}>
    {icon}
  </div>;
}

ArrowButton.propTypes = {
  isIncrement: PropTypes.bool,
  onButtonClick: PropTypes.func,
};