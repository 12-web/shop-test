'use client';

import { Header } from '@/components/common/Header/Header';
import { LayoutType } from '@/interfaces/common';
import breakpoints from '@/variables/breakpoints';
import styled from 'styled-components';

const Main = styled.main`
  margin: 0 160px 100px;
  display: flex;
  flex-grow: 1;

  @media (max-width: ${breakpoints.fhd}px) {
    margin: 0 60px 100px;
  }

  @media (max-width: ${breakpoints.md}px) {
    margin: 0 30px 40px;
  }
`;

export default function RootLayout({ children }: LayoutType) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
}
