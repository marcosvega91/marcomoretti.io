import React, { useState } from 'react';
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
  const [activeStep, setActiveStep] = useState(0);
  return (
    <Container>
      <PageController activePage={activeStep} onPageChange={setActiveStep}>
        <WhoAmI />
        <WhoAmI />
        <WhoAmI />
      </PageController>
      <StepperWrapper>
        <Stepper
          orientation="horizontal"
          activeStep={activeStep}
          onChangeStep={setActiveStep}
        >
          <Step>Hello</Step>
          <Step>About me</Step>
          <Step>Contact</Step>
        </Stepper>
      </StepperWrapper>
    </Container>
  );
}

export default App;
