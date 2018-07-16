import React from 'react';
import Title from "../elements/title";
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

  if (!isFetching && picture && picture.tags && picture.tags.length === 0) {
    getPictureTags(picture);
  }

  const isIncrementable = () => {
    return (activePictureIndex < pictures.length);
  };

  const isDecrementable = () => {
    return (activePictureIndex > 0);
  };

  const getUpdatedIndex = (isIncrement) => {
    if (isIncrement) {
      if (isIncrementable()) return activePictureIndex++;
    } else {
      if (isDecrementable()) return activePictureIndex--;
    }
    return activePictureIndex;
  };

  const handleArrowButtonClick = (isIncrement) =>
    setActivePictureIndex(getUpdatedIndex(isIncrement));

  const title = <Title isSubtitleIncluded={true}/>;

  const getArrowButton = (isIncrement, isDisabled) =>
    <ArrowButton isIncrement={isIncrement} isDisabled={isDisabled} onButtonClick={handleArrowButtonClick}/>;

  const submitButton = <SubmitButton onButtonClick={handleFormSubmit} iconClassName={"fas fa-search"}/>;

  const buttonGroup = <div className="button-group">
    {submitButton}
    <div className="arrows">
      {getArrowButton(false, !isDecrementable())}
      {getArrowButton(true, !isIncrementable())}
    </div>
  </div>;

  const pictureDisplay = (picture) => <img className="picture-content" key={picture.id} src={picture.url}/>;

  const tagList = <TagList isFetching={isFetching} tags={picture.tags}/>;

  return <div className="pictures-container">
    <div className="main-container">
      <div className="top-container">
        {title}
        {buttonGroup}
      </div>
      {pictureDisplay(picture)}
    </div>
    {tagList}
  </div>;
}