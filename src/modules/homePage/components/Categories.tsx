import "../../../common/assets/styles/scss/main/App.scss";
import { Category } from "../../../common/types/Types";
import { categoryFilterValueSet } from "../../../store/features/FiltersSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";

type CategoriesProps = {
  categories: Category[] | undefined;
  darkTheme: boolean;
};

const Categories = (props: CategoriesProps): JSX.Element => {
  let bgcArray: string[] = [];
  if (props.categories)
    for (let i = 1; i <= props.categories.length; i++) {
      bgcArray.push(`bgc-${i}`);
    }
  const dispatch = useAppDispatch();
  const categoryState = useAppSelector(
    (state) => state.filters.categoryFilterValue
  );
  return (
    <div
      className={`main-categories-container ${props.darkTheme && "dark-theme"}`}
    >
      <h1 className={` ${props.darkTheme && "dark-theme"}`}>Categories</h1>
      <div className="sub-categories-container">
        {bgcArray.map((e, i) => {
          const category = props.categories?.[i];
          return (
            <div className="category-wrapper" key={i}>
              {category && (
                <div
                  className={`category ${e} ${
                    category.id === categoryState && "selected"
                  }`}
                  onClick={() => {
                    dispatch(categoryFilterValueSet(category.id));
                  }}
                >
                  {category && <img src={category.url} alt="category-image" />}
                </div>
              )}
              {category && <span>{category.name}</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
