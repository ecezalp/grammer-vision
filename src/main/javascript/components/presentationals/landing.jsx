import React from 'react';
import Spinner from 'react-spinkit';
import Button from '@material-ui/core/Button';

export default function Landing(props) {

  props.setStateFromLocalStorage();

  const {isFetchingToken, getInstaToken, tokenString} = props;

  const spinner = isFetchingToken && <Spinner name="wave"/>;

  const colorfulGoogle = <div className="google">
    <span className="blue">G</span>
    <span className="red">o</span>
    <span className="yellow">o</span>
    <span className="blue">g</span>
    <span className="green">l</span>
    <span className="red">e</span>
  </div>;

  const landingTitle = <div className="landing-title">
    <div className="title-1">{colorfulGoogle} Vision</div>
    <div className="title-2">&</div>
    <div className="title-3">Instagram</div>
  </div>;

  const handleSubmitClick = () => {
    if (tokenString === "") getInstaToken(tokenString, isFetchingToken);
  };

  const loginButton = <Button variant="contained"
                              color="primary"
                              onClick={handleSubmitClick}
                              className={''}>
    Login via Instagram
  </Button>;

  const source = <a className="source-link" href="https://github.com/ecezalp/grammer-vision">
    <Button color="primary">
      <i class="fab fa-2x fa-github-alt"/>
    </Button>
  </a>;

  return <div className="landing-container">
    {landingTitle}
    {spinner}
    {loginButton}
    {source}
  </div>;
}