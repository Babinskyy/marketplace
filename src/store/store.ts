import { configureStore } from "@reduxjs/toolkit";
import { IsLoginViewSlice } from "./features/IsLoginViewSlice";
import { FiltersSlice } from "./features/FiltersSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    isLoginView: IsLoginViewSlice.reducer,
    filters: FiltersSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
