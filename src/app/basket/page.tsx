'use client';

import { BasketSection } from '@/components/sections/BasketSection/BasketSection';
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

const Basket = () => {
  return (
    <Main>
      <BasketSection />;
    </Main>
  );
};

export default Basket;
