import React from 'react';

// 3rd PARTY PACKAGES
import styled from 'styled-components';

const Container = styled.footer`
  background-color: #1c313a;
  padding: 1rem;
  font-size: 0.8rem;
  text-align: center;
`;

const Paragraph = styled.h1`
  letter-spacing: 0.2rem;
`;

const Link = styled.a`
  color: #69e2ff;
  text-decoration: none;
`;


const Footer = () => {
  return (
    <Container>
      <Paragraph>
        Made by{' '}
        <Link
          href="https://github.com/digaodev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @digaodev
        </Link>
      </Paragraph>
    </Container>
  );
};

export default Footer;
