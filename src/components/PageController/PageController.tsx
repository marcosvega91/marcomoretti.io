import React, { ReactNode } from 'react';
import { useSwipeable } from 'react-swipeable';

interface PageControllerProps {
  activePage: number;
  children?: ReactNode;
  onPageChange?: (currentPage: number) => void;
}

const PageController = ({ children, activePage, onPageChange }: PageControllerProps) => {
  const childrenArray = React.Children.toArray(children);
  const handlers = useSwipeable({
    trackMouse: true,
    onSwipedLeft: () => {
      if (onPageChange) {
        const nextIndex = activePage + 1 < childrenArray.length ? activePage + 1 : 0;
        onPageChange(nextIndex);
      }
    },
    onSwipedRight: () => {
      if (onPageChange) {
        const prevIndex = activePage - 1 < 0 ? childrenArray.length - 1 : activePage - 1;
        onPageChange(prevIndex);
      }
    },
  });

  if (activePage > childrenArray.length - 1) {
    throw Error('[PageController] Active page is not in the range of the array');
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <div {...handlers}>{childrenArray[activePage]}</div>;
};

export default PageController;
