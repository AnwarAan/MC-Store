import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productSlice';
import shippingSlice from './shippingSlice';
import counterSlice from './counterSlice';
import responseSlice from './responseSlice';
import userSlice from './userSlice';
import cartSlice from './cartSlice';

export const store = configureStore({
  reducer: {
    productReducer: productSlice,
    cartReducer: cartSlice,
    userReducer: userSlice,
    shippingReducer: shippingSlice,
    counterReducer: counterSlice,
    responseReducer: responseSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
