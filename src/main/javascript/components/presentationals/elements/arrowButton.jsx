import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

export default function ArrowButton({isIncrement, isDisabled, onButtonClick}) {

  const icon = isIncrement ?
    <i className="fas fa-arrow-right"/> :
    <i className="fas fa-arrow-left"/>;

  const className = `button-${isIncrement ? 'increment' : 'decrement'}`;

  return <Button className={className}
                 variant="outlined"
                 disabled={isDisabled}
                 onClick={() => onButtonClick(isIncrement)}>
    {icon}
  </Button>;
}

ArrowButton.propTypes = {
  isIncrement: PropTypes.bool,
  onButtonClick: PropTypes.func,
  isDisabled: PropTypes.bool,
};