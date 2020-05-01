import React from 'react';
import styled from 'styled-components';
import Page from '../Page';
import HelloImage from '../../assets/images/hello_image.jpg';

const StyledPage = styled(Page)`
  display: flex;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-self: center;
`;

const Image = styled.div`
  flex: 1;
  width: 50%;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${HelloImage});
`;

const WhoAmI = () => (
  <StyledPage>
    <TextContainer>
      <h1>
        Hi, I&apos;m Marco Moretti
        <br />
        Web Developer at <a href="www.ictandmore.it">ICTandMore</a>
      </h1>
      <h2>Glad to see you here! :D</h2>
    </TextContainer>
    <Image />
  </StyledPage>
);

export default WhoAmI;
