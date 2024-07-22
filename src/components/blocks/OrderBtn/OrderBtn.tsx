'use client';

import styled from 'styled-components';
import { BLACK_20, DARK, DARK_70, WHITE } from '@/variables/colors';
import { Dispatch, SetStateAction } from 'react';
import MinusIcon from '@/icons/minus.svg';
import PlusIcon from '@/icons/plus.svg';
import Image from 'next/image';
import { OrderedProduct } from '@/interfaces/common';
import { useAppDispatch } from '@/lib/hooks';
import { decrementCount, incrementCount, orderAdded, removeOrderProduct } from '@/redux/features/orderSlice';

const StyledImage = styled(Image)`
  width: 15px;
  height: 15px;
`;

const Wrapper = styled.div`
  border-radius: 5px;
  padding: 8px 15px;
  font-size: 16px;
  line-height: 1.7;
  font-weight: 500;
  color: ${DARK};
  border: 1px solid ${DARK_70};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  min-width: 140px;
`;

const ParentBtn = styled(Wrapper)`
  padding: 8px 30px;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

  &:hover {
    color: ${WHITE};
    background-color: ${DARK};
  }
`;

const RoundBtn = styled.button`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid transparent;
  transition: border 0.2s ease-in-out;

  &:hover {
    border: 1px solid ${BLACK_20};
  }

  &[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }
`;

interface OrderBtnProps {
  setSelectedCard: Dispatch<SetStateAction<OrderedProduct>>;
  selectedCard: OrderedProduct;
  min?: number;
  count: number;
}

export const OrderBtn = ({ count, setSelectedCard, selectedCard, min = 0 }: OrderBtnProps) => {
  const dispatch = useAppDispatch();

  const increment = () => {
    setSelectedCard((card) => ({ ...card, count: card.count + 1 }));
    dispatch(incrementCount(selectedCard));
  };

  const decrement = () => {
    if (count - 1 === 0) {
      dispatch(removeOrderProduct({ ...selectedCard, count }));
    } else {
      dispatch(decrementCount(selectedCard));
    }

    setSelectedCard((card) => ({ ...card, count: card.count - 1 }));
  };

  const selectProduct = () => {
    setSelectedCard((card) => ({ ...card, count: 1 }));
    dispatch(orderAdded({ ...selectedCard, count: 1 }));
  };

  return count === 0 ? (
    <ParentBtn as="button" onClick={selectProduct}>
      В корзину
    </ParentBtn>
  ) : (
    <Wrapper>
      <RoundBtn aria-label="Уменьшить количество товара" onClick={decrement} disabled={count === min}>
        <StyledImage src={MinusIcon} aria-hidden={true} alt="" />
      </RoundBtn>
      <span>{count}</span>
      <RoundBtn aria-label="Увеличить количество товара" onClick={increment}>
        <StyledImage src={PlusIcon} aria-hidden={true} alt="" />
      </RoundBtn>
    </Wrapper>
  );
};
