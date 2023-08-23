import { configureStore } from '@reduxjs/toolkit'
import productListReducer from './productlist';
export const store = configureStore({
  reducer: {
    productlist : productListReducer,
  },
})