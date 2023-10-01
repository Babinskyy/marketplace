import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Searchbar from "../../../common/components/Searchbar";
import CustomSelect from "../../../common/components/CustomSelect";
import { Category } from "../../../common/types/Types";

type FiltersType = {
  darkTheme: boolean;
  categories: Category[] | undefined;
};

const Filters = (props: FiltersType): JSX.Element => {
  return (
    <div className="filters-container">
      <div className="filters-subcontainer">
        <CustomSelect
          categories={props.categories}
          darkTheme={props.darkTheme}
        />
        <Searchbar darkTheme={props.darkTheme} />
      </div>
    </div>
  );
};

export default Filters;
