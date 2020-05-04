import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface PageProps {
  children?: ReactNode;
  imageSrc?: string;
}

const StyledPage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  @media all and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-self: center;
  @media all and (max-width: 1000px) {
    flex: none;
  }
`;

const Image = styled.div<{ src: string }>`
  flex: 1;
  width: 50%;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: ${({ src }) => `url(${src})`};
`;

type ComponentProps = PageProps & React.HTMLAttributes<HTMLDivElement>;

const Page = ({ children, imageSrc, ...other }: PageProps) => {
  const renderPage = children || imageSrc;
  return renderPage ? (
    <StyledPage {...other}>
      {children && <TextContainer>{children}</TextContainer>}
      {imageSrc && <Image src={imageSrc} />}
    </StyledPage>
  ) : null;
};
export default Page;
