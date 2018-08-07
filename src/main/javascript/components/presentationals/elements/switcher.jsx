import React from 'react';
import PropTypes from 'prop-types';

export default function Switcher({handleClick, isShowing, onText, offText, isAccented, isDisabled, disabledTitle}) {

  const text =
    isShowing ?
      isDisabled ?
        disabledTitle : onText : offText;

  const disabledClickHandler = () => {
    handleClick();
    setTimeout(() => {
      handleClick();
    }, 2000);
  };

  const className =
    isAccented ? "switcher magenta" :
      isDisabled ? "switcher gray" :
        "switcher";

  return <div className={className}
              title={isDisabled ? disabledTitle : text}
              onClick={!isDisabled? handleClick : disabledClickHandler}>
    {text.toUpperCase()}
  </div>;
}

Switcher.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isShowing: PropTypes.bool.isRequired,
  onText: PropTypes.string.isRequired,
  offText: PropTypes.string.isRequired,
  isAccented: PropTypes.bool,
  isDisabled: PropTypes.bool,
  disabledTitle: PropTypes.string,
};

