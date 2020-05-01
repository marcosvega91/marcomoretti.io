import React, { ReactNode, useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components';
import StepConnector from '../StepConnector';
import Orientation from './Orientation';

export interface StepperProps {
  activeStep: number;
  children: ReactNode;
  orientation?: Orientation;
  onChangeStep?: (currentStep: number) => void;
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
  onChangeStep,
}: StepperProps) => {
  const childrenArray = React.Children.toArray(children);
  useEffect(() => {
    if (activeStep > childrenArray.length - 1) {
      console.error('[Stepper] Active step is not in the range of the array');
    }
  }, [activeStep, childrenArray.length]);
  const onStepSelect = useCallback((index) => {
    if (onChangeStep) {
      onChangeStep(index);
    }
  }, []);
  const steps = childrenArray.map((child, index) => {
    const step: any = child;
    const active = index === activeStep;
    const key = `step-${index}`;
    const connector =
      index !== 0 ? <StepConnector orientation={orientation} /> : null;

    return [
      connector,
      React.cloneElement(step, {
        key,
        onStepSelect,
        active,
        index,
        ...step.props,
      }),
    ];
  });
  return <StepperContainer orientation={orientation}>{steps}</StepperContainer>;
};

export default Stepper;
