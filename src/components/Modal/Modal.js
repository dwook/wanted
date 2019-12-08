import React from 'react';
import '../Modal/Modal.scss';

function Modal({ children, handleModal }) {
  return (
    <div className="modal">
      <div className="content">
        {children}
        <button className="button-close" onClick={handleModal}>
          X
        </button>
      </div>
      <div className="background" onClick={handleModal}></div>
    </div>
  );
}

export default Modal;
