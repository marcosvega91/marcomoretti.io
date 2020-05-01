import styled, { css } from 'styled-components';
import Orientation from '../Stepper/Orientation';

export interface StepperProps {
  orientation?: Orientation;
}

const horizontal = css`
  border-top-width: 1px;
  border-top-style: solid;
`;

const vertical = css`
  border-left-width: 1px;
  border-left-style: solid;
  min-height: 24px;
`;

const StepConnector = styled.div<StepperProps>`
  ${({ orientation }) => (orientation === 'vertical' ? vertical : horizontal)};
  border-color: aqua;
  flex: 1 1 auto;
  // To center with the circle of the step
  margin-top: 12px;
`;

StepConnector.defaultProps = {
  orientation: 'vertical',
};

export default StepConnector;
