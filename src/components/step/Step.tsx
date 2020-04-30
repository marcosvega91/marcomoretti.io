import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface StepProps {
  index: number;
  active: boolean;
  children: ReactNode;
}

const StepContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

const Step = ({ children }: StepProps) => (
  <StepContainer>{children}</StepContainer>
);

export default Step;
