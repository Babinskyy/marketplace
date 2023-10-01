import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type FiltersSliceState = {
  inputValue: string;
  currentInputValue: string;
  categoryFilterValue: number | "";
};

const initialState: FiltersSliceState = {
  inputValue: "",
  currentInputValue: "",
  categoryFilterValue: "",
};

export const FiltersSlice = createSlice({
  name: "FiltersSlice",
  initialState,
  reducers: {
    inputValueSet: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
    currentInputValueSet: (state, action: PayloadAction<string>) => {
      state.currentInputValue = action.payload;
    },
    categoryFilterValueSet: (state, action: PayloadAction<number | "">) => {
      state.categoryFilterValue = action.payload;
    },
  },
});

export default FiltersSlice.reducer;
export const { inputValueSet, currentInputValueSet, categoryFilterValueSet } =
  FiltersSlice.actions;
