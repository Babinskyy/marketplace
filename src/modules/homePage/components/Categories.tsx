import { useEffect, useState } from "react";
import "../../../common/assets/styles/scss/main/App.scss";
import { Category } from "../../../common/types/Types";

type CategoriesProps = {
  setCategoryFilterValue: React.Dispatch<React.SetStateAction<string>>;
  categoryFilterValue: string;
};

const Categories = (props: CategoriesProps): JSX.Element => {
  const [categories, setCategories] = useState<Category[] | undefined>();
  let bgcArray: string[] = [];
  if (categories)
    for (let i = 1; i <= categories.length; i++) {
      bgcArray.push(`bgc-${i}`);
    }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/categories");
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={`main-categories-container`}>
      <h1>Categories</h1>
      <div className="sub-categories-container">
        {bgcArray.map((e, i) => {
          return (
            <div className="category-wrapper" key={i}>
              {categories && (
                <div
                  className={`category ${e} ${
                    categories[i].name === props.categoryFilterValue &&
                    "selected"
                  }`}
                  onClick={() => {
                    props.setCategoryFilterValue(categories[i].name);
                  }}
                >
                  {categories && (
                    <img src={categories[i].url} alt="category-image" />
                  )}
                </div>
              )}
              {categories && <span>{categories[i].name}</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
