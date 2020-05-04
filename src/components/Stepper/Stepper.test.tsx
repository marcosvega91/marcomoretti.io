import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Step from '../Step';
import { StepperProps } from './index';
import Stepper from './Stepper';

describe('<Stepper />', () => {
  it('should not render stepper without steps', () => {
    const { container } = render(<Stepper />);
    const stepper = container.firstChild;
    expect(stepper).toBeNull();
  });

  it('should have 1 step', () => {
    const { container } = render(
      <Stepper>
        <Step>test</Step>
      </Stepper>,
    );
    const stepper = container.firstChild;
    expect(stepper).not.toBeNull();
    expect(stepper?.childNodes.length).toEqual(1);
  });

  it('should have 2 step and 1 connector', () => {
    const { container } = render(
      <Stepper>
        <Step>step1</Step>
        <Step>step2</Step>
      </Stepper>,
    );
    const stepper = container.firstChild;
    expect(stepper).not.toBeNull();
    expect(stepper?.childNodes.length).toEqual(3);
    expect(stepper?.childNodes[0]).toHaveClass('step');
    expect(stepper?.childNodes[1]).toHaveClass('connector');
    expect(stepper?.childNodes[2]).toHaveClass('step');
  });

  it('should call onChangeStep when one step is selected', () => {
    const onChangeStep = jest.fn();
    const { getByTestId } = render(
      <Stepper onChangeStep={onChangeStep}>
        <Step data-testid="step1">step1</Step>
        <Step data-testid="step2">step2</Step>
      </Stepper>,
    );

    fireEvent.click(getByTestId('step1'));
    expect(onChangeStep.mock.calls.length).toEqual(1);
    expect(onChangeStep.mock.calls[0][0]).toEqual(0);
    fireEvent.click(getByTestId('step2'));
    expect(onChangeStep.mock.calls.length).toEqual(2);
    expect(onChangeStep.mock.calls[1][0]).toEqual(1);
  });

  it("should throw an error if the active step dons't exist", () => {
    const renderComponent = () => {
      render(
        <Stepper activeStep={3}>
          <Step data-testid="step1">step1</Step>
          <Step data-testid="step2">step2</Step>
        </Stepper>,
      );
    };

    expect(renderComponent).toThrow();
  });

  describe('props: orientation', () => {
    let container: HTMLElement;
    let stepper: ChildNode | null;

    const renderComponent = (props?: StepperProps) => {
      container = render(
        <Stepper {...props}>
          <Step data-testid="step1">step1</Step>
          <Step data-testid="step2">step2</Step>
        </Stepper>,
      ).container;

      stepper = container.firstChild;
    };

    it('should render based with flex row when orientation is horizontal', () => {
      renderComponent({ orientation: 'horizontal' });
      expect(stepper).toHaveStyleRule('flex-direction', 'row');
    });

    it('should render based with flex row when orientation is vertical', () => {
      renderComponent({ orientation: 'vertical' });
      expect(stepper).toHaveStyleRule('flex-direction', 'column');
    });

    it('should render vertical by default', () => {
      renderComponent();
      expect(stepper).toHaveStyleRule('flex-direction', 'column');
    });
  });
});
