import React from 'react';

import './modal.scss';

const Modal = ({ children, onClick }) => (
  <div className="hp_Modal">
    <div className="hp_Modal-body">
      <button
        className="hp_Modal-close"
        type="button"
        onClick={onClick}
      >
        x
      </button>
      {children}
    </div>
  </div>
);

export default Modal;
