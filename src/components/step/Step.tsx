import React, { ReactText } from 'react';
import styled from 'styled-components';

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

const StepIndexContainer = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: aqua;
  line-height: 24px;
  text-align: center;
`;

const StepLabel = styled.span`
  color: black;
`;

const Step = ({ index, children }: StepProps) => (
  <StepContainer>
    <StepIndexContainer>{index}</StepIndexContainer>
    <StepLabel>{children}</StepLabel>
  </StepContainer>
);

export default Step;
