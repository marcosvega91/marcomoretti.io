import React from 'react';
import styled from 'styled-components';
import Stepper from './components/Stepper';
import Step from './components/Step';

const StepperWrapper = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
`;

function App() {
  return (
    <div className="App">
      <StepperWrapper>
        <Stepper orientation="horizontal" activeStep={1}>
          <Step>Hello</Step>
          <Step>Skill</Step>
          <Step>Contact</Step>
        </Stepper>
      </StepperWrapper>
    </div>
  );
}

export default App;
