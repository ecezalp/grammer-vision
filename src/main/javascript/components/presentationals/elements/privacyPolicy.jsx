import React from 'react';
import PropTypes from 'prop-types';

export default function PrivacyPolicy({isPrivacyShowing}) {

  const getIcon = (index) =>
    <i key={`privacy-icon-${index}`}
       className="far fa-gem yellow"/>;

  const getItem = (item, index) =>
    <div key={`privacy-item-${index}`}>
      {getIcon(index)}{item}
    </div>;

  const privacyHelper = [
    "This is a third-party application that utilizes the Instagram API and the Google Vision API.",
    "This application is meant for users to generate Google Vision tags from their own pictures or from public_content of Instagram, which are public images tagged with a certain hashtag.",
    "No information is being persisted in this application (there is no database or caching system of any kind).",
    "The user is authenticated on Instagram's servers according to the OAuth2 protocol. This is the standard Instagram Integration according to Instagram's official documentation.",
    "This application does not have the capability to post on your behalf.",
  ];

  const style = ({
    visibility: isPrivacyShowing ? "inherit" : "hidden"
  });

  return <div className="privacy-policy" style={style}>
    {privacyHelper.map(getItem)}
  </div>
}

PrivacyPolicy.propTypes = {
  isPrivacyShowing: PropTypes.bool,
};