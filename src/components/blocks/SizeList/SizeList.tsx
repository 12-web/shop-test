'use client';

import styled from 'styled-components';
import { OrderedProduct, Product, Size } from '@/interfaces/common';
import { BLACK, DARK, DARK_10, WHITE, WHITE_40 } from '@/variables/colors';
import { Dispatch, SetStateAction } from 'react';

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;

const StyledRadioSpan = styled.span`
  display: block;
  position: relative;
  padding: 6px;
  cursor: pointer;
  background-color: ${WHITE};
  border: 1px solid ${WHITE};
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  transition: border 0.2s ease-in-out, background-color 0.2s ease-in-out;

  &:hover {
    border: 1px solid ${DARK_10};
    background-color: ${DARK_10};
  }
`;

const StyleInput = styled.input`
  &:checked + span {
    background-color: transparent;
    border: 1px solid ${BLACK};
  }
`;

const Title = styled.h4`
  color: ${DARK};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.4;
  padding-bottom: 6px;
`;

const Wrapper = styled.div`
  padding: 12px;
  background-color: ${WHITE_40};
  z-index: 1;
`;

interface SizeListProps {
  id: Product['id'];
  sizes: Size[];
  setSelectedCard: Dispatch<SetStateAction<OrderedProduct>>;
  selectedCard: OrderedProduct;
}

export const SizeList = ({ sizes, id, setSelectedCard, selectedCard }: SizeListProps) => {
  const handleChange = ({ name }: Size) => {
    setSelectedCard((card) => ({ ...card, size: name }));
  };

  return (
    <Wrapper>
      <Title>Размеры</Title>
      <List>
        {sizes.map((size, idx) => (
          <label key={idx}>
            <StyleInput
              onChange={() => handleChange(size)}
              className="visually-hidden"
              type="radio"
              name={`${id + 1}-size`}
              checked={selectedCard.size === size.name}
            />
            <StyledRadioSpan>{size.name}</StyledRadioSpan>
          </label>
        ))}
      </List>
    </Wrapper>
  );
};
