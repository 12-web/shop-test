'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { DARK, DARK_15 } from '@/variables/colors';
import { ColorsList } from '../ColorsList/ColorsList';
import { OrderedProduct, Product } from '@/interfaces/common';
import { SizeList } from '../SizeList/SizeList';
import { OrderBtn } from '../OrderBtn/OrderBtn';
import { useAppSelector } from '@/lib/hooks';
import { getProduct } from '@/helpers/findProduct';

const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1;
  padding: 16px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
`;

const StyledComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CardTitle = styled.h3`
  font-size: 16px;
  line-height: 1.6;
  font-weight: 600;
  color: ${DARK};
  padding: 13px 0 20px;
  border-top: 1px solid ${DARK_15};
  width: 100%;
`;

const CardPrice = styled.span`
  font-size: 22px;
  line-height: 1;
  font-weight: 600;
  color: ${DARK};
  align-self: center;
`;

interface ProductCardProps {
  component?: keyof JSX.IntrinsicElements;
  product: Product;
}

export const ProductCard = ({ component: Component = 'div', product }: ProductCardProps) => {
  const { id, name, price, imageUrl, colors, sizes } = product;

  const { products } = useAppSelector((state) => state.order);

  const [count, setCount] = useState(0);
  const [selectedCard, setSelectedCard] = useState<OrderedProduct>({
    id,
    name,
    imageUrl,
    price,
    size: sizes[0].name,
    color: colors[0],
    count: 0,
  });

  useEffect(() => {
    const product = getProduct(products, selectedCard);
    setCount(product?.count || 0);
  }, [selectedCard]);

  return (
    <StyledComponent as={Component}>
      <ImageWrapper>
        <StyledImage sizes="100vw" src={imageUrl} width={1} height={1} quality={100} priority={false} alt={name} />
        <SizeList selectedCard={selectedCard} setSelectedCard={setSelectedCard} sizes={sizes} id={id} />
      </ImageWrapper>
      <ColorsList selectedCard={selectedCard} setSelectedCard={setSelectedCard} colors={colors} id={id} />
      <CardTitle>{name}</CardTitle>
      <CardPrice>{price} ₽</CardPrice>
      <OrderBtn count={count} selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
    </StyledComponent>
  );
};
