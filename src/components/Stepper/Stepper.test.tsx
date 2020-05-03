import React from 'react';
import { render } from '@testing-library/react';
import Step from '../Step';
import Stepper from './Stepper';

describe('<Stepper />', () => {
  it('should not render stepper without steps', () => {
    const { container } = render(<Stepper />);
    const stepper = container.firstChild;
    expect(stepper).toBeNull();
  });

  it('should have 1 step', () => {
    const { container } = render(
      <Stepper>
        <Step>test</Step>
      </Stepper>,
    );
    const stepper = container.firstChild;
    expect(stepper).not.toBeNull();
    expect(stepper?.childNodes.length).toEqual(1);
  });

  it('should have 2 step and 1 connector', () => {
    const { container } = render(
      <Stepper>
        <Step>step1</Step>
        <Step>step2</Step>
      </Stepper>,
    );
    const stepper = container.firstChild;
    expect(stepper).not.toBeNull();
    expect(stepper?.childNodes.length).toEqual(3);
    expect(stepper?.childNodes[0]).toHaveClass('step');
    expect(stepper?.childNodes[1]).toHaveClass('connector');
    expect(stepper?.childNodes[2]).toHaveClass('step');
  });
});
