import React from 'react';
import Spinner from '../elements/spinner';
import Switcher from '../elements/switcher';
import PrivacyPolicyContainer from '../../containers/privacyPolicyContainer';
import ReadmeContainer from '../../containers/readmeContainer';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

export default function Landing(props) {

  props.setStateFromLocalStorage();

  const {isFetchingToken, getInstaToken, tokenString, togglePrivacySwitch, toggleReadmeSwitch, isPrivacyShowing, isReadmeShowing} = props;

  const spinner = isFetchingToken && <Spinner/>;

  const handleSubmitClick = () => {
    if (tokenString === "") getInstaToken(tokenString, isFetchingToken);
  };

  const loginButton = <div className="login-button" style={{visibility: isReadmeShowing ? "inherit" : "hidden"}}>
    <Button variant="contained"
            color="primary"
            onClick={handleSubmitClick}
            className={''}>
      Login via Instagram
    </Button></div>;

  const sourceButton = <a className="source-link" href="https://github.com/ecezalp/grammer-vision">
    <Button color="primary">
      <i className="fab fa-2x fa-github-alt"/>
    </Button>
  </a>;

  const privacySwitch =
    <Switcher
      onClick={togglePrivacySwitch}
      isShowing={isPrivacyShowing}
      onText="hide"
      offText="privacy policy"
    />;

  const readmeSwitch =
    <Switcher
      onClick={toggleReadmeSwitch}
      isShowing={isReadmeShowing}
      onText="hide"
      offText="read me first"
      isAccented={true}
    />;

  const privacyPolicy = <PrivacyPolicyContainer/>;

  const readme = <ReadmeContainer/>;

  return <div className="landing-container">
    {spinner}
    {readmeSwitch}
    {readme}
    {loginButton}
    {privacyPolicy}
    {privacySwitch}
    {sourceButton}
  </div>;
}

Landing.propTypes = {
  getInstaToken: PropTypes.func.isRequired,
  setStateFromLocalStorage: PropTypes.func.isRequired,
  isFetchingToken: PropTypes.bool.isRequired,
  tokenString: PropTypes.string,
  togglePrivacySwitch: PropTypes.func.isRequired,
  isPrivacyShowing: PropTypes.bool,
  isReadmeShowing: PropTypes.bool,
};