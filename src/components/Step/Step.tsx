import React, { ReactText } from 'react';
import styled, { css } from 'styled-components';

export interface StepProps {
  index?: number;
  active?: boolean;
  children?: ReactText;
}

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  ${({ active }) => (active ? stepActive : stepInactive)});
  line-height: 24px;
  text-align: center;
  color: white;
`;

const StepLabel = styled.span`
  color: black;
`;

const Step = ({ index, children, active = false }: StepProps) => (
  <StepContainer>
    <StepIndexContainer active={active}>{index}</StepIndexContainer>
    <StepLabel>{children}</StepLabel>
  </StepContainer>
);

export default Step;
