import React from 'react';
import Spinner from 'react-spinkit';
import PropTypes from 'prop-types';

export default function TagList({isFetching, tags}) {
  const spinner = <div className="spinner-container">
    <Spinner name="wave"/>
  </div>;

  const getTagColor = (percentage) => {
    return {};
  };

  const getTag = (tag, i) => {
    return <div key={i} className="tag-container">
      <div className="tag-name-container">{tag.name}</div>
      <div className="tag-score-container">{parseFloat(tag.score * 100).toFixed(2).toString()} %</div>
      <div className="tag-bar" style={getTagColor()}></div>
    </div>
  };

  const allTags = <div className="tags">
    {tags.map(getTag)}
  </div>;

  return <div className="tags-container">
    {isFetching ? spinner : allTags}
  </div>;
}

TagList.propTypes = {
  isFetching: PropTypes.bool,
  tags: PropTypes.arrayOf(PropTypes.object),
};