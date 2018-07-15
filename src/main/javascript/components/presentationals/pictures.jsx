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
                                   getPictureTags
                                 }) {

  const isFetching = (isFetchingPictures || isFetchingTags);

  const picture = pictures[activePictureIndex];

  if (!isFetching && picture && picture.tags && picture.tags.length === 0) {
    getPictureTags(picture);
  }

  const isIncrementable = (isIncrement, activePictureIndex, maxLength) => {
    return (isIncrement && activePictureIndex < maxLength);
  };

  const isDecrementable = (isIncrement, activePictureIndex, minLength) => {
    return (!isIncrement && activePictureIndex > minLength);
  };

  const getUpdatedIndex = (isIncrement) => {
    if (isIncrementable(isIncrement, activePictureIndex, pictures.length)) return activePictureIndex++;
    if (isDecrementable(isIncrement, activePictureIndex, 0)) return activePictureIndex--;
    return activePictureIndex;
  };

  const handleArrowButtonClick = (isIncrement) => setActivePictureIndex(getUpdatedIndex(isIncrement));

  const title = <Title isSubtitleIncluded={true}/>;

  const buttonGroup = <div className="button-group">
    <ArrowButton isIncrement={false}
                 onButtonClick={handleArrowButtonClick}/>
    <ArrowButton isIncrement={true}
                 onButtonClick={handleArrowButtonClick}/>
    <SubmitButton label={"try again"}
                  onButtonClick={() => {
                  }}/>
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