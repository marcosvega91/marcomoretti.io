import React from 'react';
import styled from 'styled-components';
import PageController from './components/PageController';
import Stepper from './components/Stepper';
import Step from './components/Step';
import WhoAmI from './components/WhoAmI/WhoAmI';

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
  return (
    <Container>
      <PageController activePage={0}>
        <WhoAmI />
      </PageController>
      <StepperWrapper>
        <Stepper orientation="horizontal" activeStep={0}>
          <Step>Hello</Step>
          <Step>About me</Step>
          <Step>Contact</Step>
        </Stepper>
      </StepperWrapper>
    </Container>
  );
}

export default App;
