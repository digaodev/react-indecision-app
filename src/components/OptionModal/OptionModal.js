import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById('root'));

const OptionModal = ({ selectedOption, handleClearSelectedOption }) => (
  <Modal
    isOpen={!!selectedOption}
    contentLabel="Modal Message for Selected Option"
    onRequestClose={handleClearSelectedOption}
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    {selectedOption && (
      <p className="modal__body">You need to {selectedOption.text}!</p>
    )}
    <button className="modal__button" onClick={handleClearSelectedOption}>
      I'm on it
    </button>
  </Modal>
);

export default OptionModal;
