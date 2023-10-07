import Searchbar from "../../../common/components/Searchbar";
import CategorySelect from "./CategorySelect";
import { Category } from "../../../common/types/Types";
import ClearFiltersPanel from "./ClearFiltersPanel";
import CountrySelect from "./CountrySelect";
import { Button } from "@mui/material";
import {
  categoryFilterValueSet,
  currentInputValueSet,
  inputValueSet,
} from "../../../store/features/FiltersSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";

type FiltersType = {
  darkTheme: boolean;
  categories: Category[] | undefined;
};

const Filters = (props: FiltersType): JSX.Element => {
  return (
    <div className="filters-container">
      {/* <ClearFiltersPanel darkTheme={props.darkTheme} /> */}

      <div className="filters-subcontainer">
        <Searchbar darkTheme={props.darkTheme} />
        <CategorySelect
          categories={props.categories}
          darkTheme={props.darkTheme}
        />
        <CountrySelect darkTheme={props.darkTheme} />
      </div>
    </div>
  );
};

export default Filters;
