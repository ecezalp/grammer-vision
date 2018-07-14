import React from 'react';
import PropTypes from 'prop-types';

export default function Title ({isSubtitleIncluded}) {

  const title = <div className="title">Google Vision on Instagram</div>;

  const subtitle = isSubtitleIncluded && <div className="sub-title">What do you really see?</div>;

  return <div className="title-container">
    {title}
    {subtitle}
  </div>
}

Title.propTypes = {
  isSubtitleIncluded: PropTypes.bool,
};