import React from 'react';
import Spinner from 'react-spinkit';
import PropTypes from 'prop-types';
import {getTagStyle} from '../helpers/colorHelper';

export default function TagList({isFetching, tags}) {
  const spinner = <div className="spinner-container">
    <Spinner name="wave"/>
  </div>;


  const getTag = (tag, index) => {
    return <div key={index} className="tag-container">
      <div className="tag-name-container">{tag.name}</div>
      <div className="tag-score-container">
        {parseFloat(tag.score * 100).toFixed(2).toString() + " %"}
        <div className="tag-bar" style={getTagStyle(parseFloat(tag.score * 100).toFixed(0), index)}/>
      </div>
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