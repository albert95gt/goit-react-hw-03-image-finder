import React from 'react';

const Button = ({ onLoadMore }) => {
  return (
    <button type="button" onClick={onLoadMore}>
      Load more
    </button>
  );
};

export default Button;
