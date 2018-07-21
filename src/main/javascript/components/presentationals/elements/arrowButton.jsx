import React from 'react';
import PropTypes from 'prop-types';

export default function ArrowButton({isIncrement, onButtonClick}) {

  const icon = isIncrement ?
    <i className="fas fa-arrow-right"/> :
    <i className="fas fa-arrow-left"/>;

  const className = `button-${isIncrement ? 'increment' : 'decrement'}`;

  return <div className={className}
              onClick={() => onButtonClick(isIncrement)}>
    {icon}
  </div>;
}

ArrowButton.propTypes = {
  isIncrement: PropTypes.bool,
  onButtonClick: PropTypes.func,
};