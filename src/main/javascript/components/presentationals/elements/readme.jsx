import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CheckboxContainer from '../../containers/checkboxContainer';
import DemoLoginInfo from './demoLoginInfo';

export default function Readme({isLoginEnabled, checkbox, handleDemoClick, getInstaToken, tokenString, isFetchingToken}) {

  const icon = <i key="magenta-icon" className="far fa-gem magenta"/>;

  const handleSubmitClick = () => {
    if (tokenString === "") getInstaToken(tokenString, isFetchingToken);
  };

  const demoButton = <div className="login-button">
    <Button
      variant="contained"
      color="secondary"
      onClick={handleDemoClick}
      disabled={isLoginEnabled}>
      Quick Login
    </Button>
  </div>;

  const loginButton = <div className="login-button">
    <Button
      variant="contained"
      color="primary"
      onClick={handleSubmitClick}
      disabled={!isLoginEnabled}>
      Login via Instagram
    </Button>
  </div>;

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

  const checkboxOrLoginInfo = checkbox.isHidden ? <DemoLoginInfo/> : <CheckboxContainer/>;

  return <div className="readme">
    <div className="welcome-text">
      {getSandboxModeText()}
      {getRegisterOrDemoText()}
    </div>
    {checkboxOrLoginInfo}
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