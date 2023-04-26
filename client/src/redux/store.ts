import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import shippingSlice from "./shippingSlice";
import counterSlice from "./counterSlice";

export const store = configureStore({
  reducer: {
    productReducer: productSlice,
    shippingReducer: shippingSlice,
    counterReducer: counterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
