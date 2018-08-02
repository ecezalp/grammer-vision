import React from 'react';
import Title from "../elements/navbar";
import ArrowButton from "../elements/arrowButton";
import SubmitButton from "../elements/submitButton";
import TagList from "../elements/tagList";

export default function Pictures({
                                   pictures,
                                   activePictureIndex,
                                   isFetchingPictures,
                                   isFetchingTags,
                                   setActivePictureIndex,
                                   getPictureTags,
                                   handleFormSubmit,
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

  const submitButton =
    <SubmitButton
      onButtonClick={handleFormSubmit}
      iconClassName={"fas fa-search"}
    />;

  const buttonGroup =
    <div className="button-group">
      {submitButton}
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

  const locationDisplay = ({location, user}) =>
    <div className="location-container">
      <div className="username">@{user}</div>
      <div className="location">{location}</div>
    </div>;

  const tagList =
    <TagList
      isFetching={isFetching}
      tags={picture.tags}
    />;

  if (!isFetching && picture && picture.tags && picture.tags.length === 0) {
    getPictureTags(picture);
  }

  return <div className="pictures-container">
    <div className="main-container">
      <div className="mid-container">
        <div className="left">
          {buttonGroup}
          {pictureDisplay(picture)}
          {locationDisplay(picture)}
        </div>
        {tagList}
      </div>
    </div>
  </div>;
}