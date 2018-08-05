import React from 'react';
import PropTypes from 'prop-types';

export default function PrivacyPolicy ({isPrivacyShowing}) {

  const icon = <i className="far fa-gem yellow"/>;

  return <div className="privacy-policy" style={{visibility: isPrivacyShowing ? "inherit" : "hidden"}}>
    <div>{icon}This is a third-party application that utilizes the Instagram API and the Google Vision API.</div>
    <div>{icon}This application is meant for users to generate Google Vision tags from their own pictures or from public_content of instagram, which are public images tagged with a certain hashtag.</div>
    <div>{icon}No information is being persisted in this application (there is no database or caching system of any kind).</div>
    <div>{icon}The username and password of the user does not enter this application. The user is authenticated on Instagram's servers according to the OAuth2 protocol. This is the standard Instagram Integration according to Instagram's official documentation.</div>
    <div>{icon}This application does not have the capability to post on your behalf.</div>
  </div>
}

PrivacyPolicy.propTypes = {
  isPrivacyShowing: PropTypes.bool,
};