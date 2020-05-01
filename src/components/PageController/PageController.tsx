import React, { ReactNode } from 'react';

interface PageControllerProps {
  activePage: number;
  children?: ReactNode;
  onPageChange?: (currentPage: number) => void;
}

const PageController = ({ children, activePage }: PageControllerProps) => {
  const childrenArray = React.Children.toArray(children);
  if (activePage > childrenArray.length - 1) {
    throw Error(
      '[PageController] Active page is not in the range of the array',
    );
  }
  return <div>{childrenArray[activePage]}</div>;
};

export default PageController;
