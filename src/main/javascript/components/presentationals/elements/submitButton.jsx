import React from 'react';
import PropTypes from 'prop-types';
import {TextField} from "material-ui";
import {blue600} from 'material-ui/styles/colors';

export default function SubmitButton({label, onButtonClick, iconClassName}) {

  const getButtonLabel = (label) => label && label.toUpperCase();

  const getIcon = (className) => className && <i className={className}/>;

  const submit = <button type="submit" onClick={onButtonClick}>{getIcon(iconClassName)}</button>;

  const textField = <TextField floatingLabelText={"@username or #hashtag"}
                               underlineFocusStyle={{borderColor: blue600}}
                               underlineStyle={{borderColor: blue600}}
                               floatingLabelStyle={{color: blue600}}/>;

  return <div className="submit-button"
              onClick={onButtonClick}
              key={`button-submit-${label}`}>
    {getIcon(iconClassName)}
  </div>;
}

SubmitButton.propTypes = {
  label: PropTypes.string,
  iconClassName: PropTypes.string,
  onButtonClick: PropTypes.func.isRequired,
};