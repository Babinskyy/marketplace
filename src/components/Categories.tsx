import "../App.scss";

const Categories = (): JSX.Element => {
  const categoriesArr = [
    {
      url: "https://categories.olxcdn.com/assets/categories/olxpl/motoryzacja-5-2x.png",
      name: "Cars",
    },
    // {
    //   url: "	https://categories.olxcdn.com/assets/categories/olxpl/zdrowie-i-uroda-3647-2x.png",
    //   name: "Cosmetics",
    // },
    {
      url: "https://categories.olxcdn.com/assets/categories/olxpl/nieruchomosci-3-2x.png",
      name: "Houses",
    },
    {
      url: "https://categories.olxcdn.com/assets/categories/olxpl/praca-4-2x.png",
      name: "Work",
    },
    {
      url: "https://categories.olxcdn.com/assets/categories/olxpl/dom-ogrod-628-2x.png",
      name: "Furnitures",
    },
    {
      url: "https://categories.olxcdn.com/assets/categories/olxpl/elektronika-99-2x.png",
      name: "Electronics",
    },
    {
      url: "https://categories.olxcdn.com/assets/categories/olxpl/moda-87-2x.png",
      name: "Clothes",
    },
    {
      url: "https://categories.olxcdn.com/assets/categories/olxpl/sport-hobby-767-2x.png",
      name: "Sport",
    },
    {
      url: "https://categories.olxcdn.com/assets/categories/olxpl/noclegi-1816-2x.png",
      name: "Hotels",
    },
    {
      url: "https://categories.olxcdn.com/assets/categories/olxpl/muzyka-edukacja-751-2x.png",
      name: "Hobby",
    },
    
  ];

  let bgcArray: string[] = [];
  for (let i = 1; i <= categoriesArr.length; i++) {
    bgcArray.push(`bgc-${i}`);
  }

  return (
    <div className="main-categories-container">
      <h1>Categories</h1>
      <div className="sub-categories-container">
        {bgcArray.map((e, i) => {
          return (
            <div className="category-wrapper">
              <div className={`category ${e}`} key={i}>
                <img src={categoriesArr[i].url} alt="category-image" />
              </div>
              <span>{categoriesArr[i].name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
