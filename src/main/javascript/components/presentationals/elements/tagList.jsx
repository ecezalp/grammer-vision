import React from 'react';
import Spinner from 'react-spinkit';
import PropTypes from 'prop-types';

export default function TagList({isFetching, tags}) {

  const getRoundedScore = (score, extraDigits) => parseFloat(score * 100).toFixed(extraDigits);

  const getTagName = (name) => <div className="tag-name-container">{name}</div>;

  const getTagScore = (score) =>
    <div className="tag-score-container">
      {getRoundedScore(score, 2).toString() + " %"}
    </div>;

  const getBarStyle = (roundScore) => ({
    background: `linear-gradient(to right, #4caf50 ${roundScore}%, #ccc ${100 - roundScore}%)`
  });

  const getTagBar = (score, index) =>
    <div className="tag-bar" style={getBarStyle(getRoundedScore(score, 0), index)}/>;

  const getTagLink = (name) =>
    <a href={`https://www.google.com/search?q=${name.replace(" ", "+")}`}
      className="tag-link"
      target="_blank">
      {getTagName(name)}
    </a>;

  const getTag = (tag, index) =>
    <div className="tag-container" key={index}>
      <div className="tag-top-container">
        {getTagLink(tag.name)}
        {getTagScore(tag.score)}
      </div>
      {getTagBar(tag.score, index)}
    </div>;


  const allTags = <div className="tags">
    {tags.map(getTag)}
  </div>;

  const spinner = <div className="spinner-container">
    <Spinner name="wave"/>
  </div>;

  return <div className="taglist-container">
    {isFetching ? spinner : allTags}
  </div>;
}

TagList.propTypes = {
  isFetching: PropTypes.bool,
  tags: PropTypes.arrayOf(PropTypes.object),
};