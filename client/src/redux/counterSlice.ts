import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 1,
    bill: 0,
  },

  reducers: {
    increase: (state) => {
      state.count += 1;
    },
    decrease: (state) => {
      state.count -= 1;
    },
    increaseByAmount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    getBill: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
});

export const { increase, decrease, increaseByAmount, getBill } = counterSlice.actions;
export default counterSlice.reducer;
