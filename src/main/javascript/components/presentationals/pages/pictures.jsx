import React from 'react';
import ArrowButton from "../elements/arrowButton";
import TagList from "../elements/tagList";
import SearchContainer from "../../containers/searchContainer";
import PropTypes from 'prop-types';

export default function Pictures({
                                   pictures,
                                   activePictureIndex,
                                   isFetchingPictures,
                                   isFetchingTags,
                                   setActivePictureIndex,
                                   getPictureTags,
                                 }) {

  const isFetching = (isFetchingPictures || isFetchingTags);

  const picture = pictures[activePictureIndex];

  const isIncrementable = (activePictureIndex < pictures.length);

  const isDecrementable = (activePictureIndex > 0);

  const getUpdatedIndex = (isIncrement) => {
    if (isIncrement && isIncrementable) return activePictureIndex++;
    if (isDecrementable) return activePictureIndex--;
    return activePictureIndex;
  };

  const handleArrowButtonClick = (isIncrement) => setActivePictureIndex(getUpdatedIndex(isIncrement));

  const getArrowButton = (isIncrement, isDisabled) =>
    <ArrowButton
      isIncrement={isIncrement}
      isDisabled={isDisabled}
      onButtonClick={handleArrowButtonClick}
    />;

  const username = (user) => <div className="username">@{user}</div>;

  const topContainer = ({user}) =>
    <div className="button-group">
      {username(user)}
      <div className="arrows">
        {getArrowButton(false, !isDecrementable)}
        {getArrowButton(true, !isIncrementable)}
      </div>
    </div>;

  const pictureDisplay = ({id, url}) =>
    <div className="square-container">
      <div className="square"
           key={id}
           style={{backgroundImage: `url(${url}`}}/>
    </div>;

  const locationDisplay = ({location}) =>
    <div className="location-container">{location}</div>;

  const tagList =
    <TagList
      isFetching={isFetching}
      tags={picture.tags}
    />;

  const search = <SearchContainer/>;

  if (!isFetching && picture && picture.tags && picture.tags.length === 0) {
    getPictureTags(picture);
  }

  return <div className="pictures-container">
    <div className="left">
      {topContainer(picture)}
      {pictureDisplay(picture)}
      {locationDisplay(picture)}
    </div>
    <div className="right">
      {search}
      {tagList}
    </div>
  </div>;
}

Pictures.propTypes = {
  pictures: PropTypes.array.isRequired,
  activePictureIndex: PropTypes.number.isRequired,
  isFetchingPictures: PropTypes.bool.isRequired,
  isFetchingTags: PropTypes.bool.isRequired,
  setActivePictureIndex: PropTypes.func.isRequired,
  getPictureTags: PropTypes.func.isRequired,
};