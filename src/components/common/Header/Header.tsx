'use client';

import styled from 'styled-components';
import { Logo } from '@/components/ui/Logo/Logo';
import { BasketIndicator } from '@/components/blocks/BasketBtn/BasketBtn';
import breakpoints from '@/variables/breakpoints';

const StyledHeader = styled.header`
  padding: 60px 160px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${breakpoints.fhd}px) {
    padding: 60px;
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <BasketIndicator />
    </StyledHeader>
  );
};
