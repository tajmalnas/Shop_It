import { configureStore } from '@reduxjs/toolkit'
import productListReducer from './productlist';
import categoryFilterReducer from './categoryFilter';

export const store = configureStore({
  reducer: {
    productlist : productListReducer,
    categoryFilter : categoryFilterReducer,
  },
})