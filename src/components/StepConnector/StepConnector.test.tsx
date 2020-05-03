import React from 'react';
import { render } from '@testing-library/react';
import StepConnector from './index';

describe('<StepConnector />', () => {
  it('should be vertical by default', () => {
    const { container } = render(<StepConnector />);
    const stepConnector = container.firstChild;
    expect(stepConnector).toMatchSnapshot();
  });

  it('should be horizontal when orientation="horizontal"', () => {
    const { container } = render(<StepConnector orientation="horizontal" />);
    const stepConnector = container.firstChild;
    expect(stepConnector).toMatchSnapshot();
  });

  it('should be horizontal when orientation="vertical"', () => {
    const { container } = render(<StepConnector orientation="vertical" />);
    const stepConnector = container.firstChild;
    expect(stepConnector).toMatchSnapshot();
  });
});
