import React from 'react';

const ImageGalleryItem = ({ webformatURL, openModal }) => {
  return (
    <>
      <img src={webformatURL} alt="" onClick={openModal} />
    </>
  );
};

export default ImageGalleryItem;
