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
    inputValueClear: (state) => {
      state.inputValue = "";
    },

    currentInputValueSet: (state, action: PayloadAction<string>) => {
      state.currentInputValue = action.payload;
    },
    currentInputValueClear: (state) => {
      state.currentInputValue = "";
    },

    categoryFilterValueSet: (
      state,
      action: PayloadAction<number | undefined>
    ) => {
      state.categoryFilterValue = action.payload;
    },
    categoryFilterValueClear: (state) => {
      console.log("hello?");
      state.categoryFilterValue = undefined;
    },
  },
});

export default FiltersSlice.reducer;
export const {
  inputValueSet,
  inputValueClear,
  currentInputValueSet,
  currentInputValueClear,
  categoryFilterValueSet,
  categoryFilterValueClear,
} = FiltersSlice.actions;
