'use client';

import { BLACK_15, LIGHT_GREY } from '@/variables/colors';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { filterChanged, getProductsList } from '@/redux/features/productsSlice';
import breakpoints from '@/variables/breakpoints';

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin: 40px 0 60px;
  padding: 4px;
  border: 1px solid ${BLACK_15};
  border-radius: 6px;
`;

const StyledRadioSpan = styled.span`
  display: block;
  position: relative;
  padding: 8px 30px;
  cursor: pointer;
  background-color: transparent;
  border-radius: 5px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.7;
  transition: border 0.2s ease-in-out, background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${LIGHT_GREY};
  }

  @media (max-width: ${breakpoints.md}px) {
    padding: 8px 20px;
  }
`;

const StyleInput = styled.input`
  &:checked + span {
    background-color: ${LIGHT_GREY};
  }
`;

const filters = [
  { value: 'all', name: 'Все', isChecked: true },
  { value: 'm', name: 'Мужские' },
  { value: 'f', name: 'Женские' },
];

interface Filter {
  value: string;
  name: string;
  isChecked?: boolean;
}

export const Filter = () => {
  const dispatch = useAppDispatch();
  const productsState = useAppSelector((state) => state.products);

  const handleChange = (filter: Filter) => {
    dispatch(filterChanged(filter.value));
    dispatch(getProductsList(filter.value));
  };

  return (
    <List>
      {filters.map((filter, idx) => (
        <label key={idx}>
          <StyleInput
            checked={filter.value === productsState.filter}
            className="visually-hidden"
            type="radio"
            name="type"
            onChange={() => handleChange(filter)}
          />
          <StyledRadioSpan>{filter.name}</StyledRadioSpan>
        </label>
      ))}
    </List>
  );
};
