import React from 'react';
import Title from "../elements/navbar";
import ArrowButton from "../elements/arrowButton";
import SubmitButton from "../elements/submitButton";
import TagList from "../elements/tagList";

export default function Pictures({
                                   // pictures,
                                   activePictureIndex,
                                   isFetchingPictures,
                                   isFetchingTags,
                                   setActivePictureIndex,
                                   getPictureTags,
                                   handleFormSubmit,
                                 }) {
  //
  // const isFetching = (isFetchingPictures || isFetchingTags);
  //
  // const picture = pictures[activePictureIndex];

  const isFetching = false;

  const picture = {
    id: 12,
    url: "https://upload.wikimedia.org/wikipedia/commons/9/98/Dahlia_merckii-IMG_4646.jpg",
    tags: [
      {name: "flower", score: "0.99"},
      {name: "crown flower", score: "0.87"},
      {name: "plant", score: "0.884"},
      {name: "greenery", score: "0.66"}
    ]
  };

  const pictures = [picture];

  // if (!isFetching && picture && picture.tags && picture.tags.length === 0) {
  //   getPictureTags(picture);
  // }

  const isIncrementable = () => {
    return (activePictureIndex < pictures.length);
  };

  const isDecrementable = () => {
    return (activePictureIndex > 0);
  };

  const getUpdatedIndex = (isIncrement) => {
    if (isIncrement && isIncrementable()) return activePictureIndex++;
    if (isDecrementable()) return activePictureIndex--;
    return activePictureIndex;
  };

  const handleArrowButtonClick = (isIncrement) =>
    setActivePictureIndex(getUpdatedIndex(isIncrement));

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

  const pictureDisplay = ({id, url}) =>
    <div className="square-container">
      <div className="square"
           key={id}
           style={{backgroundImage: `url(${url}`}}/>
    </div>;

  const tagList = <TagList isFetching={isFetching} tags={picture.tags}/>;

  return <div className="pictures-container">
    <div className="main-container">
      {/*<div className="top-container">*/}
      {/*{buttonGroup}*/}
      {/*</div>*/}
      {pictureDisplay(picture)}
      {tagList}
    </div>
  </div>;
}