import { Category } from "../types/Types";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { categoryFilterValueSet } from "../../store/features/FiltersSlice";
import { ChangeEvent } from "react";

type CustomSelectType = {
  darkTheme: boolean;
  categories: Category[] | undefined;
};

const CustomSelect = (props: CustomSelectType) => {
  const categoryFilterValue = useAppSelector(
    (state) => state.filters.categoryFilterValue
  );
  const dispatch = useAppDispatch();
  const handleCategoryChange = (event: SelectChangeEvent<number>) => {
    dispatch(categoryFilterValueSet(event.target.value as number));
  };
  return (
    <FormControl
      id="custom-select"
      className={`${props.darkTheme ? "dark-theme" : ""}`}
    >
      <InputLabel id="category-label">Category</InputLabel>
      <Select
        name="category"
        sx={{
          borderRadius: "10px",
          backgroundColor: props.darkTheme ? "rgb(68, 68, 68)" : "",
        }}
        labelId="category-label"
        id="category-select"
        value={categoryFilterValue}
        label="Category"
        onChange={handleCategoryChange}
      >
        {props.categories?.map((e, i) => {
          return (
            <MenuItem value={e.id} key={i + 1}>
              <span className="category-name">{e.name}</span>
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
export default CustomSelect;
