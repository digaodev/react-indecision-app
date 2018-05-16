import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById('root'));

const OptionModal = ({ selectedOption, handleClearSelectedOption }) => (
  <Modal
    isOpen={!!selectedOption}
    contentLabel="Modal Message for Selected Option"
    onRequestClose={handleClearSelectedOption}
  >
    <h3>Selected Option</h3>
    {selectedOption && <p>You need to do {selectedOption.text}!</p>}
    <button onClick={handleClearSelectedOption}>I'm on it</button>
  </Modal>
);

export default OptionModal;
