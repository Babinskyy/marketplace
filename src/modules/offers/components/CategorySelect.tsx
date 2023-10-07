import { Category } from "../../../common/types/Types";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { categoryFilterValueSet } from "../../../store/features/FiltersSlice";

type CategorySelectType = {
  darkTheme: boolean;
  categories: Category[] | undefined;
};

const CategorySelect = (props: CategorySelectType) => {
  const categoryFilterValue = useAppSelector(
    (state) => state.filters.categoryFilterValue
  );
  const dispatch = useAppDispatch();
  const handleChange = (event: SelectChangeEvent<number>) => {
    dispatch(categoryFilterValueSet(event.target.value as number));
  };
  return (
    <div className="custom-select-container">
      <Button
        variant="contained"
        className={`clear-category ${categoryFilterValue ? "visible" : ""} ${
          props.darkTheme ? "dark-theme" : ""
        }`}
        onClick={() => dispatch(categoryFilterValueSet(""))}
      >
        Clear category
      </Button>
      <FormControl
        className={`${props.darkTheme ? "dark-theme" : ""} custom-select`}
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
          onChange={handleChange}
        >
          {props.categories?.map((e, i) => {
            return (
              <MenuItem value={e.id} key={i + 1}>
                <img
                  src={e.url}
                  alt="category-image"
                  style={{ width: "25px", marginRight: "10px" }}
                />
                <span className="category-name" style={{}}>
                  {e.name}
                </span>
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};
export default CategorySelect;
