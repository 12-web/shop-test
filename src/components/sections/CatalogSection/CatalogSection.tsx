'use client';

import { Filter } from '@/components/blocks/Filter/Filter';
import { ProductCard } from '@/components/blocks/ProductCard/ProductCard';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { getProductsList } from '@/redux/features/productsSlice';
import breakpoints from '@/variables/breakpoints';
import { DARK_15 } from '@/variables/colors';
import { useEffect } from 'react';
import styled from 'styled-components';

const Content = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-top: 1px solid ${DARK_15};
  width: 100%;

  @media (max-width: ${breakpoints.md}px) {
    align-items: center;
  }
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 80px 40px;
  width: 100%;

  @media (max-width: ${breakpoints.xl}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.md}px) {
    grid-template-columns: 1fr;
  }
`;

export const CatalogSection = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsList(products.filter));
  }, [dispatch]);

  return (
    <Content>
      <Filter />
      <List>
        {products.products.map((product, idx) => (
          <ProductCard product={product} component="li" key={`${idx}-${product.id}`} />
        ))}
      </List>
    </Content>
  );
};
