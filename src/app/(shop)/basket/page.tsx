import { BasketSection } from '@/components/sections/BasketSection/BasketSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Корзина',
  description: 'Страница с заказанными футболками',
};

const Basket = () => {
  return <BasketSection />;
};

export default Basket;
