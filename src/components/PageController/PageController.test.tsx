import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Page from '../Page';
import PageController from './PageController';

describe('<PageController />', () => {
  it('should not render with no children', () => {
    const { container } = render(<PageController />);
    const pageController = container.firstChild;
    expect(pageController).toBeNull();
  });

  it('should throw error when active page is out of range of children', () => {
    const renderComponent = () =>
      render(
        <PageController activePage={5}>
          <Page />
        </PageController>,
      );
    expect(renderComponent).toThrow();
  });

  it('should render only active child', () => {
    const { container, rerender, queryByTestId } = render(
      <PageController activePage={0}>
        <Page data-testid="page1">page1</Page>
        <Page data-testid="page2">page2</Page>
      </PageController>,
    );
    const pageController = container.firstChild;
    expect(pageController?.childNodes).toHaveLength(1);
    expect(queryByTestId('page1')).not.toBeNull();
    expect(queryByTestId('page2')).toBeNull();
    rerender(
      <PageController activePage={1}>
        <Page data-testid="page1">page1</Page>
        <Page data-testid="page2">page2</Page>
      </PageController>,
    );
    expect(pageController?.childNodes).toHaveLength(1);
    expect(queryByTestId('page2')).not.toBeNull();
    expect(queryByTestId('page1')).toBeNull();
  });

  describe('swipe', () => {
    const simulateSwipe = (
      currentX: number,
      direction: 'left' | 'right',
      kind: 'mouse' | 'touch',
      element: ChildNode,
    ) => {
      let startX;
      let moveX;
      if (direction === 'left') {
        startX = currentX;
        moveX = currentX - 25;
      } else {
        startX = currentX;
        moveX = currentX + 25;
      }
      if (kind === 'mouse') {
        fireEvent.mouseDown(element, {
          clientX: startX,
          clientY: 100,
        });
        fireEvent.mouseMove(element, {
          clientX: moveX,
          clientY: 100,
        });
        fireEvent.mouseUp(element);
      } else {
        fireEvent.touchStart(element, {
          touches: [
            {
              clientX: startX,
              clientY: 100,
            },
          ],
        });
        fireEvent.touchMove(element, {
          touches: [
            {
              clientX: moveX,
              clientY: 100,
            },
          ],
        });
        fireEvent.touchEnd(element);
      }
      return moveX;
    };

    it('it should call onPageChange with nextPage/prevPage on mouse swipe', () => {
      const onPageChange = jest.fn();
      const { container, rerender } = render(
        <PageController onPageChange={onPageChange} activePage={0}>
          <Page>page1</Page>
          <Page>page2</Page>
        </PageController>,
      );
      const pageController = container.firstChild;
      let mousePosition = 100;
      if (pageController) {
        mousePosition = simulateSwipe(mousePosition, 'right', 'mouse', pageController);
      }
      expect(onPageChange.mock.calls.length).toEqual(1);
      expect(onPageChange.mock.calls[0][0]).toEqual(1);
      rerender(
        <PageController onPageChange={onPageChange} activePage={1}>
          <Page>page1</Page>
          <Page>page2</Page>
        </PageController>,
      );
      if (pageController) {
        simulateSwipe(mousePosition, 'right', 'mouse', pageController);
      }
      expect(onPageChange.mock.calls.length).toEqual(2);
      expect(onPageChange.mock.calls[1][0]).toEqual(0);

      rerender(
        <PageController onPageChange={onPageChange} activePage={0}>
          <Page>page1</Page>
          <Page>page2</Page>
        </PageController>,
      );
      if (pageController) {
        simulateSwipe(mousePosition, 'left', 'mouse', pageController);
      }
      expect(onPageChange.mock.calls.length).toEqual(3);
      expect(onPageChange.mock.calls[2][0]).toEqual(1);
    });

    it('it should call onPageChange with nextPage/prevPage on touch swipe', () => {
      const onPageChange = jest.fn();
      const { container, rerender } = render(
        <PageController onPageChange={onPageChange} activePage={0}>
          <Page>page1</Page>
          <Page>page2</Page>
        </PageController>,
      );
      const pageController = container.firstChild;
      let touchPosition = 100;
      if (pageController) {
        touchPosition = simulateSwipe(touchPosition, 'right', 'touch', pageController);
      }
      expect(onPageChange.mock.calls.length).toEqual(1);
      expect(onPageChange.mock.calls[0][0]).toEqual(1);
      rerender(
        <PageController onPageChange={onPageChange} activePage={1}>
          <Page>page1</Page>
          <Page>page2</Page>
        </PageController>,
      );
      if (pageController) {
        simulateSwipe(touchPosition, 'right', 'touch', pageController);
      }
      expect(onPageChange.mock.calls.length).toEqual(2);
      expect(onPageChange.mock.calls[1][0]).toEqual(0);

      rerender(
        <PageController onPageChange={onPageChange} activePage={0}>
          <Page>page1</Page>
          <Page>page2</Page>
        </PageController>,
      );
      if (pageController) {
        simulateSwipe(touchPosition, 'left', 'touch', pageController);
      }
      expect(onPageChange.mock.calls.length).toEqual(3);
      expect(onPageChange.mock.calls[2][0]).toEqual(1);
    });
  });
});
