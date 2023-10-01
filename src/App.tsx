import { Route, Routes, useRoutes } from "react-router-dom";
import "./common/assets/styles/scss/main/App.scss";
import Home from "./modules/homePage/views/Home";
import OfferView from "./modules/offers/views/OfferView";
import { useEffect, useState } from "react";
import { Category } from "./common/types/Types";
import Signup from "./modules/users/views/Signup";
import UserOffers from "./modules/offers/views/UserOffers";
import { BASE_URL } from "./common/config/env-variable";
import AllOffers from "./modules/offers/views/AllOffers";

function App() {
  const [openOfferModal, setOpenOfferModal] = useState<boolean>(false);
  const [categories, setCategories] = useState<Category[] | undefined>();
  const [darkTheme, setDarkTheme] = useState<boolean>(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("themePreference");
    if (storedTheme === "light") {
      setDarkTheme(false);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}categories`, {
          credentials: "include",
        });
        const data = await response.json();

        setCategories(data.categories);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);
  return (
    <div className={`App ${darkTheme && "dark-theme"}`}>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              openOfferModal={openOfferModal}
              setOpenOfferModal={setOpenOfferModal}
              categories={categories}
              setDarkTheme={setDarkTheme}
              darkTheme={darkTheme}
            />
          }
        ></Route>
        <Route
          path="/offer/:id"
          element={
            <OfferView
              openOfferModal={openOfferModal}
              setOpenOfferModal={setOpenOfferModal}
              categories={categories}
              setDarkTheme={setDarkTheme}
              darkTheme={darkTheme}
            />
          }
        ></Route>
        <Route
          path="/auth"
          element={
            <Signup
              setOpenOfferModal={setOpenOfferModal}
              setDarkTheme={setDarkTheme}
              darkTheme={darkTheme}
            />
          }
        ></Route>
        <Route
          path="/offers/user"
          element={
            <UserOffers
              setOpenOfferModal={setOpenOfferModal}
              categories={categories}
              setDarkTheme={setDarkTheme}
              darkTheme={darkTheme}
              openOfferModal={openOfferModal}
            />
          }
        ></Route>
        <Route
          path="/offers/all"
          element={
            <AllOffers
              setOpenOfferModal={setOpenOfferModal}
              categories={categories}
              setDarkTheme={setDarkTheme}
              darkTheme={darkTheme}
              openOfferModal={openOfferModal}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
