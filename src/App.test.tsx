import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('should render hello text in the header', () => {
    const { getByText, container } = render(<App />);
    const helloElement = getByText(/Marco Moretti/i);
    expect(helloElement).toBeInTheDocument();
    expect(container.querySelector('.App-header')?.firstChild).toContainElement(
      helloElement,
    );
  });
});
