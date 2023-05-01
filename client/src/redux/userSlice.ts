import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      name: "",
      email: "",
      password: "",
      balance: 0,
    },
    token: "",
    userId: "",
  },
  reducers: {
    getUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
    getToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    getOneUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
  },
});

export const { getUserId, getOneUser, getToken } = userSlice.actions;
export default userSlice.reducer;
