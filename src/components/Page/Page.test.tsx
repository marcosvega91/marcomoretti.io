import React from 'react';
import { render } from '@testing-library/react';
import Page from './Page';

describe('<Page />', () => {
  it('should not render without children and image', () => {
    const { container } = render(<Page />);
    expect(container.firstChild).toBeNull();
  });

  it('should render only image', () => {
    const { container } = render(<Page imageSrc="localhost://image.jpg" />);
    expect(container.firstChild).not.toBeNull();
    expect(container.querySelector('.page-image')).not.toBeNull();
    expect(container.querySelector('.page-text')).toBeNull();
  });

  it('should render only text', () => {
    const { container } = render(
      <Page>
        <h1>Test</h1>
      </Page>,
    );
    expect(container.firstChild).not.toBeNull();
    expect(container.querySelector('.page-text')).not.toBeNull();
    expect(container.querySelector('.page-image')).toBeNull();
  });

  it('should render text as first child and image as second one', () => {
    const { container } = render(
      <Page imageSrc="localhost://image.jpg">
        <h1>Test</h1>
      </Page>,
    );
    const page = container.firstChild;
    expect(page).not.toBeNull();
    expect(container.querySelector('.page-text')).not.toBeNull();
    expect(container.querySelector('.page-image')).not.toBeNull();
    expect(page?.childNodes[0]).toHaveClass('page-text');
    expect(page?.childNodes[1]).toHaveClass('page-image');
  });
});
