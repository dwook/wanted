import React from 'react';
import './Button.scss';

function Button({ children, onClick }) {
  return (
    <button className="button-filter" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
