import Searchbar from "../../../common/components/Searchbar";
import CategorySelect from "./CategorySelect";
import { Category } from "../../../common/types/Types";
import CountrySelect from "./CountrySelect";

type FiltersType = {
  darkTheme: boolean;
  categories: Category[] | undefined;
};

const Filters = (props: FiltersType): JSX.Element => {
  return (
    <div className="filters-container">
      <div className="filters-subcontainer">
        <Searchbar darkTheme={props.darkTheme} />
        <CategorySelect categories={props.categories} darkTheme={props.darkTheme} />
        <CountrySelect darkTheme={props.darkTheme} />
      </div>
    </div>
  );
};

export default Filters;
