import "../../../common/assets/styles/scss/main/App.scss";
import { Category } from "../../../common/types/Types";

type CategoriesProps = {
  setCategoryFilterValue: React.Dispatch<
    React.SetStateAction<number | undefined>
  >;
  categoryFilterValue: number | undefined;
  categories: Category[] | undefined;
  darkTheme: boolean;
};

const Categories = (props: CategoriesProps): JSX.Element => {
  let bgcArray: string[] = [];
  if (props.categories)
    for (let i = 1; i <= props.categories.length; i++) {
      bgcArray.push(`bgc-${i}`);
    }

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
                    category.id === props.categoryFilterValue && "selected"
                  }`}
                  onClick={() => {
                    props.setCategoryFilterValue(category.id);
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
