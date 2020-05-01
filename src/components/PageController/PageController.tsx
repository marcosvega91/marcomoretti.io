import React, { ReactNode, useEffect } from 'react';

interface PageControllerProps {
  activePage: number;
  children?: ReactNode;
  onPageChange?: (currentPage: number) => void;
}

const PageController = ({ children, activePage }: PageControllerProps) => {
  const childrenArray = React.Children.toArray(children);

  useEffect(() => {
    if (activePage > childrenArray.length) {
      console.error(
        '[PageController] Active page is not in the range of the array',
      );
    }
  }, [activePage, childrenArray.length]);

  return <>{childrenArray}</>;
};

export default PageController;
