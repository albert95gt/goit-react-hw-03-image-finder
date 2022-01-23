import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import { ImageGalleryCss } from './ImageGallery.styled';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, setLargeImgUrl }) => {
  return (
    <ImageGalleryCss>
      {images.map(({ webformatURL, largeImageURL }, index) => {
        return (
          <li key={index}>
            <ImageGalleryItem
              webformatURL={webformatURL}
              largeImgURL={largeImageURL}
              setLargeImgUrl={setLargeImgUrl}
            />
          </li>
        );
      })}
    </ImageGalleryCss>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  setLargeImgUrl: PropTypes.func.isRequired,
};

export default ImageGallery;
