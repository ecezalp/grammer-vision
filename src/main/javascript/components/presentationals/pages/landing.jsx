import React from 'react';
import Spinner from '../elements/spinner';
import Switcher from '../elements/switcher';
import PrivacyPolicyContainer from '../../containers/privacyPolicyContainer';
import ReadmeContainer from '../../containers/readmeContainer';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

export default function Landing(props) {

  props.setStateFromLocalStorage();

  console.log(props);

  const {isFetchingToken, togglePrivacySwitch, isPrivacyShowing, readmeProps} = props;

  const spinner = isFetchingToken && <Spinner/>;

  const privacyPolicy = <PrivacyPolicyContainer/>;

  const readme = <ReadmeContainer {...readmeProps}/>;

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

  return <div className="landing-container">
    {spinner}
    {readme}
    {privacyPolicy}
    {privacySwitch}
    {sourceButton}
  </div>;
}

Landing.propTypes = {
  setStateFromLocalStorage: PropTypes.func.isRequired,
  isFetchingToken: PropTypes.bool.isRequired,
  togglePrivacySwitch: PropTypes.func.isRequired,
  isPrivacyShowing: PropTypes.bool,
  isReadmeShowing: PropTypes.bool,
  getReadmeChildren: PropTypes.func,
};