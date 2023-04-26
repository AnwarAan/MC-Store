import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const shippingSlice = createSlice({
  name: "shipping",
  initialState: {
    shipping: "Same Day",
  },

  reducers: {
    selectShipping: (state, action: PayloadAction<any>) => {
      state.shipping = action.payload;
    },
  },
});

export const { selectShipping } = shippingSlice.actions;
export default shippingSlice.reducer;
