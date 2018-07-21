import React from 'react';
import Spinner from 'react-spinkit';
import Button from '@material-ui/core/Button';

export default function Landing(props) {

  props.setStateFromLocalStorage();

  const {isFetchingToken, getInstaToken, tokenString} = props;

  const spinner = isFetchingToken && <Spinner name="wave"/>;

  const handleSubmitClick = () => {
    if (tokenString === "") getInstaToken(tokenString, isFetchingToken);
  };

  const loginButton = <div className="login-button">
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

  return <div className="landing-container">
    {spinner}
    {loginButton}
    {sourceButton}
  </div>;
}