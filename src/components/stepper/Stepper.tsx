import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import Step from '../step';

type Orientation = 'horizontal' | 'vertical';

export interface StepperProps {
  activeStep: number;
  children: ReactNode[];
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
  const steps = children.map((node, index) => {
    const active = index === activeStep;
    const key = `step-${index}`;
    return (
      <Step key={key} active={active} index={index}>
        {node}
      </Step>
    );
  });
  return <StepperContainer orientation={orientation}>{steps}</StepperContainer>;
};

export default Stepper;
