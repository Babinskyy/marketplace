import "../../../common/assets/styles/scss/App.scss";
import { categoriesList } from "../../../common/mockData/categoryList";
import { Category } from "../../../common/types/Types";


const Categories = (): JSX.Element => {
  

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
              <div className={`category ${e}`} >
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
