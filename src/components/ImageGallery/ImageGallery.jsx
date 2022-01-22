import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul>
      {images.map(({ webformatURL }, index) => {
        return (
          <li key={index}>
            <ImageGalleryItem
              webformatURL={webformatURL}
              openModal={openModal}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
