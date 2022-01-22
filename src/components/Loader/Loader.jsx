import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Rings } from 'react-loader-spinner';

const Loader = () => {
  return <Rings heigth="100" width="100" color="blue" ariaLabel="loading" />;
};

export default Loader;
