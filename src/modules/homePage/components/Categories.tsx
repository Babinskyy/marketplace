import "../../../common/assets/styles/scss/App.scss";
import { categoriesList } from "../../../common/mockData/categoriesList";

type CategoriesProps = {
  setCategoryFilterValue: React.Dispatch<React.SetStateAction<string>>;
};

const Categories = (props: CategoriesProps): JSX.Element => {
  let bgcArray: string[] = [];
  for (let i = 1; i <= categoriesList.length; i++) {
    bgcArray.push(`bgc-${i}`);
  }

  return (
    <div className="main-categories-container">
      <h1>Categories</h1>
      <div className="sub-categories-container">
        {bgcArray.map((e, i) => {
          return (
            <div className="category-wrapper" key={i}>
              <div
                className={`category ${e}`}
                onClick={(e) => {
                  // console.log(
                  //   parseInt(e.currentTarget.classList.value.slice(13))
                  // );
                  props.setCategoryFilterValue(categoriesList[i].name);
                }}
              >
                <img src={categoriesList[i].url} alt="category-image" />
              </div>
              <span>{categoriesList[i].name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
