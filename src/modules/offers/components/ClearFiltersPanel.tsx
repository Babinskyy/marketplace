import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import {
  categoryFilterValueSet,
  currentInputValueSet,
  inputValueSet,
} from "../../../store/features/FiltersSlice";

type ClearFiltersPanelType = {
  darkTheme: boolean;
};

const ClearFiltersPanel = (props: ClearFiltersPanelType) => {
  const categoryFilterValue = useAppSelector(
    (state) => state.filters.categoryFilterValue
  );
  const inputState = useAppSelector(
    (state) => state.filters.inputValue
  );
  const dispatch = useAppDispatch();

  return (
    <div className={`clear-filters-container `}>
      <div
        className={`buttons-panel  ${inputState ? "all-filters" : ""} ${props.darkTheme ? "dark-theme" : ""} `}
      >
        {" "}
        <Button
          variant="contained"
          className={`clear-all-filters ${inputState ? categoryFilterValue ? "visible" : "" : ""}`}
          onClick={() => {
            dispatch(inputValueSet(""));
            dispatch(currentInputValueSet(""));
            dispatch(categoryFilterValueSet(""))
          }}
        >
          Clear all filters
        </Button>
        <Button
          variant="contained"
          className={`clear-category ${categoryFilterValue ? "visible" : ""}`}
          onClick={() => dispatch(categoryFilterValueSet(""))}
        >
          Clear category
        </Button>
      </div>
    </div>
  );
};
export default ClearFiltersPanel;
