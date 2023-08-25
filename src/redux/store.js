import { configureStore } from '@reduxjs/toolkit'
import productListReducer from './productlist';
import categoryFilterReducer from './categoryFilter';
import priceFilterReducer from './priceFilter';
import ratingFilterReducer from './ratingFilter';

export const store = configureStore({
  reducer: {
    productlist : productListReducer,
    categoryFilter : categoryFilterReducer,
    priceFilter : priceFilterReducer,
    ratingFilter:ratingFilterReducer,
  },
})