import React from 'react';

const Button = ({ value, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;