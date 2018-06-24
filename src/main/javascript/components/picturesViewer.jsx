import React from 'react';

export default function PicturesViewer({pictures}) {

  const getPicture = (picture, index) => {
    return <div className="picture-container" key={index}>
      <img src={`data:image/png;base64,${picture}`}/>
    </div>;
  };

  return <div className="pictures-viewer-container">
    {pictures.map(getPicture)}
  </div>;
}