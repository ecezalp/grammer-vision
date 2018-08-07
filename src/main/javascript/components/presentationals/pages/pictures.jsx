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

  const placeholder = {
    id: 'placeholder',
    location: '',
    url: '',
    user: '',
    tags: [],
  };

  const picture = pictures[activePictureIndex] || placeholder;

  const isIncrementable = (activePictureIndex < pictures.length - 1);

  const isDecrementable = (activePictureIndex > 0);

  const getUpdatedIndex = (isIncrement) => {
    if (isIncrement && isIncrementable) return activePictureIndex + 1;
    if (!isIncrement && isDecrementable) return activePictureIndex - 1;
    return activePictureIndex;
  };

  const handleArrowButtonClick = (isIncrement) => setActivePictureIndex(getUpdatedIndex(isIncrement));

  const getArrowButton = (isIncrement, isDisabled) =>
    <ArrowButton
      isIncrement={isIncrement}
      isDisabled={isDisabled}
      onButtonClick={handleArrowButtonClick}
    />;

  const getUserName = ({user}) => <div className="username">@{user}</div>;

  const getPictureContainer = ({id, url}) =>
    <div className="square-container">
      <div className="square"
           key={id}
           style={{backgroundImage: `url(${url}`}}/>
    </div>;

  const getLocation = ({location}) =>
    <div className="location-container">{location}</div>;

  const tagList =
    <TagList
      isFetching={isFetching}
      tags={picture.tags}
    />;

  const search = <SearchContainer/>;

  const arrowButtons =
    <div className="arrows">
      {getArrowButton(false, !isDecrementable)}
      {getArrowButton(true, !isIncrementable)}
    </div>;

  if (!isFetching && picture && picture.tags && picture.tags.length === 0) {
    getPictureTags(picture);
  }

  return <div className="pictures-container">
    <div className="left">
      {getUserName(picture)}
      {getPictureContainer(picture)}
      {getLocation(picture)}
      {arrowButtons}
    </div>
    <div className="right">
      {tagList}
      {search}
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