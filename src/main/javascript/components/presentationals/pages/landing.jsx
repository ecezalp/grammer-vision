import React from 'react';
import Spinner from '../elements/spinner';
import Switcher from '../elements/switcher';
import PrivacyPolicyContainer from '../../containers/privacyPolicyContainer';
import ReadmeContainer from '../../containers/readmeContainer';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

export default class Landing extends React.Component {

  componentDidMount() {
    this.props.setStateFromLocalStorage();
  }

  getSpinner = isFetchingToken => isFetchingToken && <Spinner/>;

  getReadmeContainer = (props) => <ReadmeContainer {...props}/>;

  getPrivacyPolicyContainer = () => <PrivacyPolicyContainer/>;

  getSourceButton = () => <a className="source-link" href="https://github.com/ecezalp/grammer-vision">
    <Button color="primary">
      <i className="fab fa-2x fa-github-alt"/>
    </Button>
  </a>;

  getPrivacySwitch = (togglePrivacySwitch, isPrivacyShowing) => <Switcher
    handleClick={togglePrivacySwitch}
    isShowing={isPrivacyShowing}
    onText="hide"
    offText="privacy policy"
  />;

  render() {
    const {isFetchingToken, togglePrivacySwitch, isPrivacyShowing, readmeProps} = this.props;

    return <div className="landing-container">
      {this.getSpinner(isFetchingToken)}
      {this.getReadmeContainer(readmeProps)}
      {this.getPrivacyPolicyContainer()}
      {this.getPrivacySwitch(togglePrivacySwitch, isPrivacyShowing)}
      {this.getSourceButton()}
    </div>;
  }
}

Landing.propTypes = {
  setStateFromLocalStorage: PropTypes.func.isRequired,
  isFetchingToken: PropTypes.bool.isRequired,
  togglePrivacySwitch: PropTypes.func.isRequired,
  isPrivacyShowing: PropTypes.bool,
  isReadmeShowing: PropTypes.bool,
  getReadmeChildren: PropTypes.func,
};