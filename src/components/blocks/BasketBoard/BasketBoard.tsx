'use client';

import { getDeclineNoun } from '@/helpers/getDeclineNoun';
import { useAppSelector } from '@/lib/hooks';
import { BLACK, DARK, DARK_15, SHADOW, WHITE } from '@/variables/colors';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
  border-radius: 8px;
  box-shadow: ${SHADOW} 2px 2px 12px;
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const Title = styled.h3`
  font-size: 26px;
  line-height: 1;
  color: ${BLACK};
  font-weight: 500;
  padding-bottom: 12px;
  border-bottom: 1px solid ${DARK_15};
  width: 100%;
`;

const Count = styled.p`
  font-size: 18px;
  line-height: 1;
  color: ${BLACK};
  font-weight: 400;
  width: 100%;
  padding: 40px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Price = styled.span`
  font-size: 22px;
  font-weight: 500;
`;

const Button = styled.button`
  color: ${WHITE};
  background-color: ${DARK};
  border-radius: 5px;
  padding: 8px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 1.7;
  font-weight: 500;
  width: 100%;
`;

export const BasketBoard = () => {
  const { price, count } = useAppSelector((state) => state.order);

  const productsCount = getDeclineNoun(count, ['товар', 'товара', 'товаров']);

  return (
    <Wrapper>
      <Title>Сумма заказа</Title>
      <Count>
        {productsCount} на сумму <Price>{price} ₽</Price>
      </Count>
      <Button>Оформить заказ</Button>
    </Wrapper>
  );
};
