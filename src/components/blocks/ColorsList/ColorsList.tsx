'use client';

import styled from 'styled-components';
import { Color, OrderedProduct, Product } from '@/interfaces/common';
import { BLACK_20, DARK_15 } from '@/variables/colors';
import { SetStateAction, Dispatch } from 'react';

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 12px 0 18px;
`;

const StyledRadioSpan = styled.span<{ $color: string }>`
  display: block;
  position: relative;
  width: 29px;
  height: 29px;
  cursor: pointer;
  background-color: ${(props) => props.$color};
  border: 1px solid ${(props) => (props.$color === '#fff' ? DARK_15 : props.$color)};
`;

const StyleInput = styled.input`
  &:checked + span {
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      padding: 3px;
      border: 1px solid ${BLACK_20};
    }
  }
`;

interface ColorsListProps {
  id: Product['id'];
  colors: Color[];
  setSelectedCard: Dispatch<SetStateAction<OrderedProduct>>;
  selectedCard: OrderedProduct;
}

export const ColorsList = ({ colors, id, setSelectedCard, selectedCard }: ColorsListProps) => {
  const handleChange = (color: Color) => {
    setSelectedCard((card) => ({ ...card, color: color }));
  };

  return (
    <List>
      {colors.map((color, idx) => (
        <label key={idx}>
          <StyleInput
            onChange={() => handleChange(color)}
            className="visually-hidden"
            type="radio"
            name={`${id + 1}-color`}
            checked={selectedCard.color.color === color.color}
          />
          <StyledRadioSpan $color={color.color} />
        </label>
      ))}
    </List>
  );
};
