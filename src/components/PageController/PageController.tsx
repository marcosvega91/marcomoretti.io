import React, { ReactNode } from 'react';
import { useSwipeable } from 'react-swipeable';

interface PageControllerProps {
  activePage?: number;
  children?: ReactNode;
  onPageChange?: (currentPage: number) => void;
}

const PageController = ({ children, activePage = -1, onPageChange }: PageControllerProps) => {
  const childrenArray = React.Children.toArray(children);
  const currentPage: number = activePage < 0 ? 0 : activePage;
  const handlers = useSwipeable({
    trackMouse: true,
    onSwipedLeft: () => {
      if (onPageChange) {
        const nextIndex = currentPage + 1 < childrenArray.length ? currentPage + 1 : 0;
        onPageChange(nextIndex);
      }
    },
    onSwipedRight: () => {
      if (onPageChange) {
        const prevIndex = currentPage - 1 < 0 ? childrenArray.length - 1 : currentPage - 1;
        onPageChange(prevIndex);
      }
    },
  });

  if (childrenArray.length > 0 && currentPage > childrenArray.length - 1) {
    throw Error('[PageController] Active page is not in the range of the array');
  }
  return childrenArray.length > 0 ? <div {...handlers}>{childrenArray[activePage]}</div> : null;
};

export default PageController;
