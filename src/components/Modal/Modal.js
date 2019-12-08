import React from 'react';
import '../Modal/Modal.scss';

function Modal({ children }) {
  return (
    <div className="modal">
      <div className="content">
        {children}
        <button className="button-close">X</button>
      </div>
      <div className="background"></div>
    </div>
  );
}

export default Modal;
