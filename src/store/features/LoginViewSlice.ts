import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type LoginViewState = {
  isLoginView: boolean;
};

const initialState: LoginViewState = {
  isLoginView: false,
};

export const IsLoginViewSlice = createSlice({
  name: "isLoginView",
  initialState,
  reducers: {
    LoginViewTrue: (state, action: PayloadAction) => {
      state.isLoginView = true;
    },
    LoginViewFalse: (state, action: PayloadAction) => {
      state.isLoginView = false;
    },
  },
});

export default IsLoginViewSlice.reducer;
export const { LoginViewTrue, LoginViewFalse } = IsLoginViewSlice.actions;
