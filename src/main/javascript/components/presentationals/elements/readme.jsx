import React from 'react';
import PropTypes from 'prop-types';

export default function Readme({isReadmeShowing}) {

  const icon = <i className="far fa-gem magenta"/>;

  return <div className="privacy-policy" style={{visibility: isReadmeShowing ? "inherit" : "hidden"}}>
    <div>{icon}This app is in <strong>sandbox</strong> mode.</div>
    <div> You must <a href="/register">register</a> to my sandbox, or use the demo account below!</div>
  </div>
}

Readme.propTypes = {
  isReadmeShowing: PropTypes.bool,
};