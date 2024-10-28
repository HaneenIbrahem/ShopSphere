import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ onClose, children }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className={styles.closeButton}>&times;</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
