import React from 'react';

// 3rd PARTY PACKAGES
import styled from 'styled-components';

import Option from '../Option/Option';

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.header`
  background-color: #102027;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;

const Title = styled.h3`
  color: #69e2ff;
  font-size: 1.8rem;
  flex: 1;
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

const OptionsList = ({
  options,
  handleDeleteOption,
  handleDeleteAllOptions
}) => (
  <Container className="options-list">
    <HeaderContainer>
      <Title>Your options</Title>
      {options.length > 0 && (
        <Button onClick={handleDeleteAllOptions}>Remove All Options</Button>
      )}
    </HeaderContainer>

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
  </Container>
);

export default OptionsList;
