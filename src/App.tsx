import React, { useState } from 'react';
import styled from 'styled-components';
import Page from './components/Page';
import PageController from './components/PageController';
import Stepper from './components/Stepper';
import Step from './components/Step';
import HelloImage from './assets/images/hello_image.jpg';
import AboutMeImage from './assets/images/about_me.jpg';
import ContactImage from './assets/images/contact.jpg';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 10%;
  right: 10%;
  bottom: 0;
`;

const StepperWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
`;

function App() {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <Container>
      <PageController activePage={activeStep} onPageChange={setActiveStep}>
        <Page imageSrc={HelloImage}>
          <h1>
            Hi, I&apos;m Marco Moretti
            <br />
            Web Developer at
            <a href="www.ictandmore.it">ICTandMore</a>
          </h1>
          <h2>Glad to see you here! :D</h2>
        </Page>
        <Page imageSrc={AboutMeImage}>
          <h1>Skill</h1>
          <ul>
            <li>React</li>
            <li>Typescript</li>
            <li>Javascript</li>
            <li>Docker</li>
            <li>AWS</li>
          </ul>
        </Page>
        <Page imageSrc={ContactImage}>
          <h1>Contact</h1>
          <h2>Keep in touch on my socials</h2>
          <ul>
            <li>GitHub</li>
            <li>Linkedin</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </Page>
      </PageController>
      <StepperWrapper>
        <Stepper orientation="horizontal" activeStep={activeStep} onChangeStep={setActiveStep}>
          <Step>Hello</Step>
          <Step>About me</Step>
          <Step>Contact</Step>
        </Stepper>
      </StepperWrapper>
    </Container>
  );
}

export default App;
