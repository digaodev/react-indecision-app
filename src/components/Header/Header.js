import React from 'react';

// 3rd PARTY PACKAGES
import styled from 'styled-components';

const Container = styled.header`
  background-color: #1c313a;
  padding: 2rem;
`;

const Title = styled.h1`
  letter-spacing: 0.2rem;
  margin-bottom: 0.5rem;
`;

const SubTitle = styled.h2`
  color: #69e2ff;
  font-size: 1.8rem;
  font-weight: normal;
`;

const Header = () => {
  return (
    <Container>
      <Title>Indecision</Title>
      <SubTitle>Take the indecision out of your daily task management</SubTitle>
    </Container>
  );
};

export default Header;
