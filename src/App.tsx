import React from 'react';
import Stepper from './components/stepper/Stepper';

function App() {
  return (
    <div className="App">
      <Stepper orientation="horizontal" activeStep={1}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Stepper>
    </div>
  );
}

export default App;
