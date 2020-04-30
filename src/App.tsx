import React from 'react';
import Stepper from './components/stepper';
import Step from './components/step';

function App() {
  return (
    <div className="App">
      <Stepper orientation="horizontal" activeStep={1}>
        <Step>Hello</Step>
        <Step>Skill</Step>
        <Step>Contact</Step>
      </Stepper>
    </div>
  );
}

export default App;
