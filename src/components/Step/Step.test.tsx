import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Step from './index';

describe('<Step />', () => {
  it('should show index 1 if no index is passed', () => {
    const { container } = render(<Step />);
    const step = container.firstChild;
    const indexContainer = step?.firstChild;
    expect(indexContainer).toHaveTextContent('1');
  });

  it('should show have different backgroundColor depending on active prop', () => {
    const { container, rerender } = render(<Step />);
    const step = container.firstChild;
    const indexContainer = step?.firstChild;
    expect(indexContainer).toHaveStyle(`
      backgroundColor: 'white',
    `);
    rerender(<Step active />);
    expect(indexContainer).toHaveStyle(`
      backgroundColor: 'black',
    `);
  });

  it('should call onStepSelect clicking on the step passing index as param', () => {
    const onStepSelect = jest.fn();
    const { container } = render(<Step onStepSelect={onStepSelect} />);
    const step = container.firstChild;
    expect(step).not.toBeNull();
    if (step) {
      fireEvent.click(step);
    }
    expect(onStepSelect.mock.calls.length).toEqual(1);
    expect(onStepSelect.mock.calls[0][0]).toEqual(0);
  });

  it('should render children in a span', () => {
    const { container } = render(<Step>Test</Step>);
    const label = container.querySelector('span');
    expect(label).toHaveTextContent('Test');
  });

  it('should not render span if not children is passed', () => {
    const { container } = render(<Step />);
    const label = container.querySelectorAll('span');
    expect(label.length).toEqual(0);
  });
});
