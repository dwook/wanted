import React from 'react';
import './Button.scss';

function Button({ children }) {
  return <button className="button-filter">{children}</button>;
}

export default Button;
