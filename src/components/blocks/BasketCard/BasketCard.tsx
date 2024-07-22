'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { DARK, DARK_15, DARK_50 } from '@/variables/colors';
import { OrderedProduct } from '@/interfaces/common';
import { OrderBtn } from '../OrderBtn/OrderBtn';
import DeleteIcon from '@/icons/delete.svg';
import { useAppDispatch } from '@/lib/hooks';
import { removeOrderProduct } from '@/redux/features/orderSlice';
import breakpoints from '@/variables/breakpoints';

const StyledImage = styled(Image)`
  width: 205px;
  height: 240px;
  object-fit: cover;
  object-position: center;
`;

const StyledComponent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: start;
  justify-items: center;
  padding-top: 40px;
  margin: 20px 0 40px;
  border-top: 1px solid ${DARK_15};
  gap: 30px;

  @media (max-width: ${breakpoints.md}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const CardTitle = styled.h3`
  font-size: 20px;
  line-height: 1.4;
  font-weight: 500;
  color: ${DARK};
`;

const CardPrice = styled.span`
  font-size: 22px;
  line-height: 1;
  font-weight: 500;
  color: ${DARK};
  justify-self: end;
`;

const OptionValue = styled.span`
  font-size: 18px;
  line-height: 1;
  font-weight: 400;
  color: ${DARK_50};
`;

const OuterWrapper = styled.div`
  display: flex;
  gap: 28px;

  @media (max-width: ${breakpoints.md}px) {
    flex-direction: column;
    align-items: center;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const StyledButton = styled.button`
  display: flex;
  gap: 10px;
  align-items: center;
  color: ${DARK_50};
  font-size: 16px;
  line-height: 1.4;
  font-weight: 500;
  transition: opacity 0.2s ease-in-out;
  margin-top: auto;

  &:hover {
    opacity: 0.8;
  }
`;

const StyledIcon = styled(Image)`
  width: 24px;
  height: 24px;
`;

interface BasketCardProps {
  component?: keyof JSX.IntrinsicElements;
  product: OrderedProduct;
}

export const BasketCard = ({ component: Component = 'div', product }: BasketCardProps) => {
  const { name, price, imageUrl, color, size, count } = product;

  const [selectedCard, setSelectedCard] = useState<OrderedProduct>(product);

  const dispatch = useAppDispatch();

  const handleDeleteClick = () => dispatch(removeOrderProduct(product));

  return (
    <StyledComponent as={Component}>
      <OuterWrapper>
        <StyledImage sizes="100vw" src={imageUrl} width={1} height={1} quality={100} priority={false} alt={name} />
        <InnerWrapper>
          <CardTitle>{name}</CardTitle>
          <OptionValue>Цвет: {color.name}</OptionValue>
          <OptionValue>Размер: {size.toUpperCase()}</OptionValue>
          <StyledButton onClick={handleDeleteClick}>
            <StyledIcon src={DeleteIcon} alt="Иконка удаления товара" />
            Удалить
          </StyledButton>
        </InnerWrapper>
      </OuterWrapper>
      <OrderBtn count={selectedCard.count} min={1} selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
      <CardPrice>{price * count} ₽</CardPrice>
    </StyledComponent>
  );
};
