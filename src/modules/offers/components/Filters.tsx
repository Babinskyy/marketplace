import Searchbar from "../../../common/components/Searchbar";
import CustomSelect from "../../../common/components/CustomSelect";
import { Category } from "../../../common/types/Types";
import ClearFiltersPanel from "./ClearFiltersPanel";

type FiltersType = {
  darkTheme: boolean;
  categories: Category[] | undefined;
};

const Filters = (props: FiltersType): JSX.Element => {
  return (
    <div className="filters-container">
           <ClearFiltersPanel />
      <div className="filters-subcontainer">
        <Searchbar darkTheme={props.darkTheme} />
        <CustomSelect
          categories={props.categories}
          darkTheme={props.darkTheme}
        />
      </div>
 
    </div>
  );
};

export default Filters;
