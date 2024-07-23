'use client';

import Link from 'next/link';
import Image from 'next/image';
import IconLogo from '@/icons/logo.svg';
import styled from 'styled-components';
import { memo } from 'react';

const StyledLink = styled(Link)`
  width: 182px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

const Logo = () => {
  return (
    <StyledLink href="/">
      <StyledImage src={IconLogo} alt="Логотип T-Shirts" />
    </StyledLink>
  );
};

export default memo(Logo);
