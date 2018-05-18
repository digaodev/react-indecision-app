import React from 'react';

// 3rd PARTY PACKAGES
import styled from 'styled-components';

const ListItem = styled.li`
  background-color: #1c313a;
  border-bottom: 1px solid #444;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;

const Button = styled.button`
  border: none;
  background-color: inherit;
  color: #69e2ff;
  cursor: pointer;
  outline: none;
  transition: color 0.2s ease-in-out;

  &:hover,
  :focus {
    color: #ddd;
  }

  &:active {
    color: #fff;
  }
`;

const Option = ({ option, handleDeleteOption }) => (
  <ListItem className="options-list__item">
    {option.text}
    <Button type="button" onClick={() => handleDeleteOption(option.id)}>
      Remove
    </Button>
  </ListItem>
);

export default Option;
