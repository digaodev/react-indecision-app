import React from 'react';

// 3rd PARTY PACKAGES
import styled from 'styled-components';

const Container = styled.section`
  text-align: center;
  margin-bottom: 2rem;
`;

const Paragraph = styled.p`
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background-color: #0081cb;
  border: none;
  border-radius: 0.3rem;
  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
    0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.4);
  color: #fff;
  cursor: pointer;
  outline: none;
  padding: 1.8rem;
  text-transform: uppercase;
  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    background-color: #00b0ff;
  }

  :disabled {
    background-color: #718792;
    color: #ccc;
    cursor: not-allowed;
  }

  &:active {
    background-color: #69e2ff;
    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -2px rgba(0, 0, 0, 0.2);
  }
`;

const Decision = ({ handleDecision, hasOptions }) => (
  <Container>
    <Paragraph>
      So you've read 'Essentialism' and decided you are focusing on too many
      things to be efficient.
    </Paragraph>
    <Paragraph>
      Don't worry, delegate your tasks to a random picker and start focusing
      again!
    </Paragraph>
    <Button type="button" onClick={handleDecision} disabled={!hasOptions}>
      What should I do next?
    </Button>
  </Container>
);

export default Decision;
