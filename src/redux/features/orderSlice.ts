import { getProduct } from '@/helpers/findProduct';
import { OrderedProduct, OrderStore } from '@/interfaces/common';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: OrderStore = {
  products: [],
  count: 0,
  price: 0,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    orderAdded(state: OrderStore, action: PayloadAction<OrderedProduct>) {
      state.products.push(action.payload);
      state.count++;
      state.price += action.payload.price;
    },

    incrementCount(state: OrderStore, action: PayloadAction<OrderedProduct>) {
      const product = getProduct(state.products, action.payload);

      if (product) {
        product.count++;
      } else {
        state.products.push({ ...action.payload, count: 1 });
      }

      state.count++;
      state.price += action.payload.price;
    },

    decrementCount(state: OrderStore, action: PayloadAction<OrderedProduct>) {
      const product = getProduct(state.products, action.payload);

      if (product) {
        product.count--;
        state.count--;
        state.price -= action.payload.price;
      }
    },

    removeOrderProduct(state: OrderStore, action: PayloadAction<OrderedProduct>) {
      const { id, color, size, price, count } = action.payload;

      const products = state.products.filter(
        (product) => !(product.id == id && product.color.color == color.color && product.size == size)
      );

      state.products = products;
      state.count -= count;
      state.price -= price * count;
    },

    resetState() {
      return initialState;
    },
  },
});

export const { orderAdded, incrementCount, decrementCount, removeOrderProduct, resetState } = orderSlice.actions;
export default orderSlice.reducer;
