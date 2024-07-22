'use client';

import { useAppSelector } from '@/lib/hooks';
import styled from 'styled-components';
import { BasketCard } from '../BasketCard/BasketCard';

const List = styled.ul`
  width: 100%;
`;

export const BasketList = () => {
  const { products } = useAppSelector((state) => state.order);

  return (
    <List>
      {products.map((product) => (
        <BasketCard product={product} component="li" key={product.id + product.color + product.count + product.size} />
      ))}
    </List>
  );
};
