import React from 'react';
import PropTypes from 'prop-types';

export default function Switcher({onClick, isShowing, onText, offText, isAccented}) {

  const text = isShowing ? onText : offText;

  const className = isAccented ? "switcher magenta" : "switcher";

  return <div className={className}
              onClick={onClick}>
    {text.toUpperCase()}
  </div>;
}

Switcher.propTypes = {
  onClick: PropTypes.func.isRequired,
  isShowing: PropTypes.bool,
  onText: PropTypes.string.isRequired,
  offText: PropTypes.string.isRequired,
  isAccented: PropTypes.bool,
};

