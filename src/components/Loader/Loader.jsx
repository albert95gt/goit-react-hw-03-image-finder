import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Rings } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <Rings
        heigth="80"
        radius="20"
        width="80"
        color="#3f51b5"
        ariaLabel="loading"
      />
    </LoaderWrapper>
  );
};

export default Loader;
