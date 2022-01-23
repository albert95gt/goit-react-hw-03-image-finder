import React from 'react';
import { ImageGalleryImg } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, largeImgURL, setLargeImgUrl }) => {
  return (
    <>
      <ImageGalleryImg
        src={webformatURL}
        alt=""
        onClick={() => setLargeImgUrl(largeImgURL)}
      />
    </>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImgURL: PropTypes.string.isRequired,
  setLargeImgUrl: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
