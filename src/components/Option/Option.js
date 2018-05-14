import React from 'react';

const Option = ({ option, handleDeleteOption }) => {
  return (
    <li className="options-list__item">
      {option.text}
      <button type="button" onClick={() => handleDeleteOption(option.id)}>
        X
      </button>
    </li>
  );
};

export default Option;