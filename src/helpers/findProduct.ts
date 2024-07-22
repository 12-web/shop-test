import { OrderedProduct, OrderStore } from '@/interfaces/common';

export const getProduct = (products: OrderStore['products'], findProduct: OrderedProduct) => {
  return products.find((product) => {
    const { id, color, size } = findProduct;

    return product.id === id && product.color.color === color.color && product.size === size;
  });
};
