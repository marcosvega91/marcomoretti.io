import React, { ReactNode, useCallback } from 'react';
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
  if (activeStep > childrenArray.length - 1) {
    throw Error('[Stepper] Active step is not in the range of the array');
  }
  const onStepSelect = useCallback(
    (index) => {
      if (onChangeStep) {
        onChangeStep(index);
      }
    },
    [onChangeStep],
  );
  const steps = childrenArray.map((child, index) => {
    const step: any = child;
    const active = index === activeStep;
    const stepperKey = `step-${index}`;
    const connectorKey = `connector-${index}`;

    const connector =
      index !== 0 ? <StepConnector key={connectorKey} orientation={orientation} /> : null;

    return [
      connector,
      React.cloneElement(step, {
        stepperKey,
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
