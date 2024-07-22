'use client';

import { DARK, DARK_70 } from '@/variables/colors';
import Image from 'next/image';
import Link from 'next/link';
import BasketIcon from '@/icons/basket.svg';
import styled from 'styled-components';
import { useAppSelector } from '@/lib/hooks';

const StyledLink = styled(Link)`
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  border: 1px solid ${DARK_70};
  color: ${DARK};
  font-size: 16px;
  line-height: 1.7;
  font-weight: 500;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  position: relative;

  &:not(:last-child) {
    padding-right: 16px;
    margin-right: 16px;
  }

  &:not(:last-child)::before {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 16px;
    background-color: ${DARK};
  }
`;

export const BasketIndicator = () => {
  const { price, count } = useAppSelector((state) => state.order);

  return (
    <StyledLink href="/basket">
      <List>
        <Item>
          <span>{price}</span>
          <span>₽</span>
        </Item>
        <Item>
          <span>{count}</span>
          <Image src={BasketIcon} alt="Иконка корзины" />
        </Item>
      </List>
    </StyledLink>
  );
};
