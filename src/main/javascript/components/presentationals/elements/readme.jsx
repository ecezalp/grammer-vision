import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CheckboxContainer from '../../containers/checkboxContainer';
import DemoLoginInfo from './demoLoginInfo';

export default function Readme({isLoginEnabled, checkbox, handleDemoClick, getInstaToken, tokenString, isFetchingToken}) {

  const icon = <i className="far fa-gem magenta"/>;

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

  const getText = (children) => <div className="text">{children}</div>;

  const getSandboxModeText = () => {
    let text = <span key="sandbox">This app is in <strong>sandbox</strong> mode.</span>;
    return getText([icon, text]);
  };

  const getRegisterOrDemoText = () => {
    let text = <span key="register">You must <a href="/register">register</a> to my sandbox, or click <strong>quick login</strong>!</span>;
    return getText([text]);
  };

  const welcome = <div className="welcome-text">
    {getSandboxModeText()}
    <br/>
    {getRegisterOrDemoText()}
  </div>;

  const miniForm = <div className="mini-form-container">
    {checkbox.isHidden ? <DemoLoginInfo/> : <CheckboxContainer/>}
  </div>;

  return <div className="readme">
    {welcome}
    {miniForm}
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
};