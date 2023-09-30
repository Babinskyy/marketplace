import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type FiltersSliceState = {
  inputValue: string;
  currentInputValue: string;
  categoryFilterValue: number | undefined;
};

const initialState: FiltersSliceState = {
  inputValue: "",
  currentInputValue: "",
  categoryFilterValue: undefined,
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

    categoryFilterValueSet: (
      state,
      action: PayloadAction<number | undefined>
    ) => {
      state.categoryFilterValue = action.payload;
    },
  },
});

export default FiltersSlice.reducer;
export const { inputValueSet, currentInputValueSet, categoryFilterValueSet } =
  FiltersSlice.actions;
