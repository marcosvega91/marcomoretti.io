import React from 'react';
import styled from 'styled-components';
import Page from './components/Page';
import PageController from './components/PageController';
import Stepper from './components/Stepper';
import Step from './components/Step';

const StepperWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
`;

function App() {
  return (
    <div>
      <PageController activePage={0}>
        <Page>ciao</Page>
      </PageController>
      <StepperWrapper>
        <Stepper orientation="horizontal" activeStep={1}>
          <Step>Hello</Step>
          <Step>About me</Step>
          <Step>Contact</Step>
        </Stepper>
      </StepperWrapper>
    </div>
  );
}

export default App;
