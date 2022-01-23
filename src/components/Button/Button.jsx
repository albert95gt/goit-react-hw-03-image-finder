import React from 'react';
import { ButtonCss } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ onLoadMore }) => {
  return (
    <ButtonCss type="button" onClick={onLoadMore}>
      Load more
    </ButtonCss>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default Button;
