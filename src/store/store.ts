import { configureStore } from "@reduxjs/toolkit";
import { ViewSlice } from "./features/ViewSlice";
import { FiltersSlice } from "./features/FiltersSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    View: ViewSlice.reducer,
    filters: FiltersSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
