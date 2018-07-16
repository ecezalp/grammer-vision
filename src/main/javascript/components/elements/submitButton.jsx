import React from 'react';
import PropTypes from 'prop-types';

export default function SubmitButton({label, onButtonClick, iconClassName}) {

  const getButtonLabel = (label) => label && label.toUpperCase();

  const getIcon = (className) => className && <i className={className}/>;

  const input = <input type="text"
                       className="search-input"
                       placeholder={"@username or #hashtag"}/>;

  const submit = <button type="submit" onClick={onButtonClick}>{getIcon(iconClassName)}</button>;

  return <div className="submit-button"
              key={`button-submit-${label}`}>
    {getButtonLabel(label)}
    {input}
    {submit}
  </div>;
}

SubmitButton.propTypes = {
  label: PropTypes.string,
  iconClassName: PropTypes.string,
  onButtonClick: PropTypes.func.isRequired,
};