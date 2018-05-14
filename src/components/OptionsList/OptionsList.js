import React from 'react';

import Option from '../Option/Option';

const OptionsList = ({
  options,
  handleDeleteOption,
  handleDeleteAllOptions
}) => {
  return (
    <section className="options-list">
    {options.length > 0 && <button onClick={handleDeleteAllOptions}>Remove All Options</button>}
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
