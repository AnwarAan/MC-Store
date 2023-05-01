import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResponseFail } from "../interface";

export const responseSlice = createSlice({
  name: "response",
  initialState: {
    responseFail: {
      message: "",
      status: true,
      statusCode: 0,
    },
  } as ResponseFail,

  reducers: {
    getResponseFail: (state, action: PayloadAction<any>) => {
      state.responseFail = action.payload;
    },
  },
});

export const { getResponseFail } = responseSlice.actions;
export default responseSlice.reducer;
