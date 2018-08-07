import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DemoLoginInfo from "./demoLoginInfo";
import CheckboxContainer from "../../containers/checkboxContainer";

export default function Readme({
                                 isLoginEnabled, handleDemoClick, getInstaToken,
                                 tokenString, isFetchingToken, checkbox, defaultPanel
                               }) {

  const handleInstagramLoginClick = () => {
    if (tokenString === "") getInstaToken(tokenString, isFetchingToken);
  };

  const getButton = (color, onClick, disabled, text) =>
    <div key={`button-${color}`}>
      <Button
        variant="contained"
        color={color}
        onClick={onClick}
        disabled={disabled}>
        {text}
      </Button>
    </div>;

  const demoButton = getButton("secondary", handleDemoClick, isLoginEnabled, "Quick Login");

  const loginButton = getButton("primary", handleInstagramLoginClick, !isLoginEnabled, "Login via Instagram");

  const buttons = <div className="buttons-container">
    {demoButton}
    {loginButton}
  </div>;

  const miniform = <div className="mini-form-container">
    {checkbox.isHidden ? <DemoLoginInfo/> : <CheckboxContainer/>}
  </div>;

  return <div className="readme">
    {defaultPanel}
    {miniform}
    {buttons}
  </div>
}

Readme.propTypes = {
  isLoginEnabled: PropTypes.bool,
  isFetchingToken: PropTypes.bool,
  getInstaToken: PropTypes.func.isRequired,
  handleDemoClick: PropTypes.func,
  tokenString: PropTypes.string,
  checkbox: PropTypes.object,
  children: PropTypes.arrayOf(PropTypes.object),
};