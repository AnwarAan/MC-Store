import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 1,
  },

  reducers: {
    increase: (state, action: PayloadAction<number>) => {
      state.count += 1;
    },
    decrease: (state, action: PayloadAction<number>) => {
      state.count -= 1;
    },
    increaseByAmount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
});

export const { increase, decrease, increaseByAmount } = counterSlice.actions;
export default counterSlice.reducer;
