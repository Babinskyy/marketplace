import { useEffect, useState } from "react";
import "../../../common/assets/styles/scss/main/App.scss";
import { Category } from "../../../common/types/Types";
import { categoriesList } from "../../../common/mockData/categoriesList";

type CategoriesProps = {
  setCategoryFilterValue: React.Dispatch<
    React.SetStateAction<number | undefined>
  >;
  categoryFilterValue: number | undefined;
  categories: Category[] | undefined;
};

const Categories = (props: CategoriesProps): JSX.Element => {
  let bgcArray: string[] = [];
  if (props.categories)
    for (let i = 1; i <= props.categories.length; i++) {
      bgcArray.push(`bgc-${i}`);
    }

  return (
    <div className={`main-categories-container`}>
      <h1>Categories</h1>
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
