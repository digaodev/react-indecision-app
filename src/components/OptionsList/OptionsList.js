import React from 'react';

import Option from '../Option/Option';

const OptionsList = ({ options, handleDeleteOption }) => {
  return (
    <section className="options-list">
      <ul>
        {options.map(option => {
          return (
            <Option
              key={option.id}
              option={option}
              handleDeleteOption={handleDeleteOption}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default OptionsList;
