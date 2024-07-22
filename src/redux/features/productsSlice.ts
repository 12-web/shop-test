import { Product, ProductsStore } from '@/interfaces/common';
import { getProducts } from '@/lib/api';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export const getProductsList = createAsyncThunk('products', async (query: Product['category'] = 'all') => {
  const products = await getProducts();

  return query === 'all' ? products : products.filter((product) => product.category === query);
});

const initialState: ProductsStore = {
  products: [],
  pending: false,
  error: false,
  filter: 'all',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filterChanged(state: ProductsStore, action: PayloadAction<Product['category']>) {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsList.pending, (state, action) => {
      state.pending = true;
    });
    builder.addCase(getProductsList.fulfilled, (state, action) => {
      state.pending = false;
      state.products = action.payload;
    });
    builder.addCase(getProductsList.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export const { filterChanged } = productsSlice.actions;
export default productsSlice.reducer;
