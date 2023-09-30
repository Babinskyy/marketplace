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
    LoginView: (state, action: PayloadAction<boolean>) => {
      state.isLoginView = action.payload;
    },
  },
});

export default IsLoginViewSlice.reducer;
export const { LoginView } = IsLoginViewSlice.actions;
