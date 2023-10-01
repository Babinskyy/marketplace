import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ViewState = {
  view: "login" | "home" | "allOffers" | "userOffers" | "offer";
};

const initialState: ViewState = {
  view: "home",
};

export const ViewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    View: (
      state,
      action: PayloadAction<
        "login" | "home" | "allOffers" | "userOffers" | "offer"
      >
    ) => {
      state.view = action.payload;
    },
  },
});

export default ViewSlice.reducer;
export const { View } = ViewSlice.actions;
