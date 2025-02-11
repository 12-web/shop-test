'use client';

import styled from 'styled-components';
import ArrowIcon from '@/icons/arrow-left.svg';
import DeleteIcon from '@/icons/delete.svg';
import { BLACK } from '@/variables/colors';
import { BasketList } from '@/components/blocks/BasketList/BasketList';
import { BasketBoard } from '@/components/blocks/BasketBoard/BasketBoard';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { resetState } from '@/redux/features/orderSlice';
import breakpoints from '@/variables/breakpoints';
import TextButton from '@/components/ui/TextButton/TextButton';
import { FC } from 'react';

const Content = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

const CenteredWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 20vh;
`;

const OuterWrapper = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr 370px;
  align-items: start;
  gap: 100px;
  width: 100%;

  @media (max-width: ${breakpoints.xl}px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Title = styled.h1`
  color: ${BLACK};
  font-size: 36px;
  line-height: 1;
  font-weight: 500;
  text-align: center;
`;

const Text = styled.p`
  color: ${BLACK};
  font-size: 18px;
  line-height: 1;
  font-weight: 400;
  text-align: center;
  margin-top: 40px;
`;

export const BasketSection: FC = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => dispatch(resetState());

  const { products } = useAppSelector((state) => state.order);

  const isEmpty = products.length === 0;

  return (
    <Content>
      <TextButton href="/" src={ArrowIcon} alt="Иконка стрелки">
        Вернуться в каталог
      </TextButton>
      {isEmpty ? (
        <CenteredWrapper>
          <Title>Корзина пуста</Title>
          <Text>Для того, чтобы заказать футболку, перейдите в каталог.</Text>
        </CenteredWrapper>
      ) : (
        <OuterWrapper>
          <InnerWrapper>
            <Title>Корзина</Title>
            <TextButton onClick={handleClick} src={DeleteIcon} alt="Иконка очищения корзины">
              Очистить корзину
            </TextButton>
            <BasketList />
          </InnerWrapper>
          <BasketBoard />
        </OuterWrapper>
      )}
    </Content>
  );
};
