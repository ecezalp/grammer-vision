import React from 'react';
import PropTypes from 'prop-types';

export default function SubmitButton({label, onButtonClick}) {

  return <div className="submit-button"
              key={`button-submit-${label}`}
              onClick={onButtonClick}>
    {label.toUpperCase()}
  </div>;
}

SubmitButton.propTypes = {
  isIncrement: PropTypes.bool,
  onButtonClick: PropTypes.func,
};