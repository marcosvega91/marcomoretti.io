import React, { ReactText, useCallback } from 'react';
import styled, { css } from 'styled-components';

export interface StepProps {
  index?: number;
  active?: boolean;
  children?: ReactText;
  className?: string;
  onStepSelect?: (index: number) => void;
}

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const stepActive = css`
  background-color: black;
  color: white;
`;

const stepInactive = css`
  background-color: white;
  border: 1px solid black;
  color: black;
`;

const StepIndexContainer = styled.div<{ active: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  ${(props) => (props.active ? stepActive : stepInactive)};
  line-height: 24px;
  text-align: center;
`;

const StepLabel = styled.span`
  color: black;
`;

const Step = ({ index = 0, children, active = false, onStepSelect, className }: StepProps) => {
  const onClick = useCallback(() => {
    if (onStepSelect && index >= 0) {
      onStepSelect(index);
    }
  }, [onStepSelect, index]);
  const stepIndex = index + 1;
  return (
    <StepContainer onClick={onClick} className={className}>
      <StepIndexContainer active={active}>{stepIndex}</StepIndexContainer>
      {children && <StepLabel>{children}</StepLabel>}
    </StepContainer>
  );
};

export default Step;
