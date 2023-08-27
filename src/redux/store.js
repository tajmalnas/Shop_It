import { configureStore } from '@reduxjs/toolkit'
import productListReducer from './productlist';
import categoryFilterReducer from './categoryFilter';
import priceFilterReducer from './priceFilter';
import ratingFilterReducer from './ratingFilter';
import productDetailReducer from './productDetail';
import isAuthReducer from './isAuth';
import cartReducer from './cart';

export const store = configureStore({
  reducer: {
    productlist : productListReducer,
    categoryFilter : categoryFilterReducer,
    priceFilter : priceFilterReducer,
    ratingFilter:ratingFilterReducer,
    productDetail:productDetailReducer,
    isAuth:isAuthReducer,
    cart:cartReducer,
  },
})