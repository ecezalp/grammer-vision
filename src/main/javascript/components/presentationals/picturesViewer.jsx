import React from 'react';

export default function PicturesViewer({pictures}) {

  const getPicture = (picture) => {
    return <div className="picture-container" key={picture.id}>
      <img src={picture.url}/>
    </div>;
  };

  return <div className="pictures-viewer-container">
    {pictures.map(getPicture)}
  </div>;
}