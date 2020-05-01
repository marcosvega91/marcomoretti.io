import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import StepConnector from '../StepConnector';
import Orientation from './Orientation';

export interface StepperProps {
  activeStep: number;
  children: ReactNode;
  orientation?: Orientation;
}

const horizontal = css`
  flexdirection: 'row';
  alignitems: 'center';
`;

const vertical = css`
  flexdirection: 'column';
`;

const StepperContainer = styled.div<{ orientation: Orientation }>`
  display: flex;
  ${({ orientation }) => (orientation === 'vertical' ? vertical : horizontal)});
`;

const Stepper = ({
  children,
  activeStep,
  orientation = 'vertical',
}: StepperProps) => {
  const steps = React.Children.map(children, (child, index) => {
    const step: any = child;
    const active = index === activeStep;
    const key = `step-${index}`;
    const stepIndex = index + 1;
    const connector =
      index !== 0 ? <StepConnector orientation={orientation} /> : null;
    return [
      connector,
      React.cloneElement(step, {
        key,
        active,
        index: stepIndex,
        ...step.props,
      }),
    ];
  });
  return <StepperContainer orientation={orientation}>{steps}</StepperContainer>;
};

export default Stepper;