import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const categoryState = useAppSelector((state) => state.filters.categoryFilterValue);
  return (
    <div className="main-categories-container">
      <h1>Categories</h1>
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
                    navigate("/offers/all");
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
