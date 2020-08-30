import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';

const Footer = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link
          href="https://github.com/gitpraj"
          rel="noreferrer noopener"
          target="_blank"
        >
          GitHub
        </Styled.Link>
        <Styled.Link
          href="https://www.linkedin.com/in/prajith-maniyan-poosappadi-03291273"
          rel="noreferrer noopener"
          target="_blank"
        >
          Linkedin
        </Styled.Link>
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
