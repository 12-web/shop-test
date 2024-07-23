'use client';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { DARK_50 } from '@/variables/colors';
import { memo } from 'react';

export const StyledTextButton = styled.button`
  display: flex;
  gap: 10px;
  align-items: center;
  color: ${DARK_50};
  font-size: 16px;
  line-height: 1.4;
  font-weight: 500;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

interface TextButtonProps {
  src: string;
  alt: string;
  href?: string;
  children: React.ReactNode;
  onClick?: VoidFunction;
}

const TextButton = ({ src, alt, href, children, onClick }: TextButtonProps) => {
  const content = (
    <>
      <Image src={src} alt={alt} />
      {children}
    </>
  );

  return href ? (
    <StyledTextButton as={Link} href={href}>
      {content}
    </StyledTextButton>
  ) : (
    <StyledTextButton onClick={onClick}>{content}</StyledTextButton>
  );
};

export default memo(TextButton);
