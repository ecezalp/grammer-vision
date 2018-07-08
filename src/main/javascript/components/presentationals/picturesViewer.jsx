import React from 'react';
import Spinner from 'react-spinkit';

export default function PicturesViewer({
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

  const getUpdatedIndex = (action) => {
    if (action === "increment" && activePictureIndex < pictures.length) return activePictureIndex++;
    if (action === "decrement" && activePictureIndex > 0) return activePictureIndex--;
    return activePictureIndex;
  };

  const handleButtonClick = (action) => {
    setActivePictureIndex(getUpdatedIndex(action));
  };

  const button = (action) => <div className={`button-${action}`} onClick={() => handleButtonClick(action)}>
    {action === "increment" ? <i className="fas fa-arrow-right"/> : <i className="fas fa-arrow-left"/>}
  </div>;

  const pictureDisplay = <div className="picture-container" key={picture.id}>
    <img src={picture.url}/>
  </div>;

  const spinner = <div className="spinner-container"><Spinner name="wave"/></div>;

  const getTag = (tag, i) => {
    console.log(tag, i);
    return <div key={i} className="tag-container">
      <div className="tag-name-container">{tag.name}</div>
      <div className="tag-score-container">{tag.score} %</div>
    </div>
  };

  const tags = <div className="tags">{picture.tags.map(getTag)}</div>;

  const tagsOrSpinner = isFetching ? spinner : tags;

  return <div className="pictures-viewer-container">
    {button("decrement")}
    {pictureDisplay}
    {tagsOrSpinner}
    {button("increment")}
  </div>;
}