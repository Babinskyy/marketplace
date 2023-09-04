import { Route, Routes, useRoutes } from "react-router-dom";
import "./common/assets/styles/scss/main/App.scss";
import Home from "./modules/homePage/views/Home";
import OfferView from "./modules/offers/views/OfferView";
import { useEffect, useState } from "react";
import { Category } from "./common/types/Types";
import Signup from "./modules/users/views/Signup";

function App() {
  const [openOfferModal, setOpenOfferModal] = useState<boolean>(false);
  const [categories, setCategories] = useState<Category[] | undefined>();
  const [trigger, setTrigger] = useState<boolean>(false);

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
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              openOfferModal={openOfferModal}
              setOpenOfferModal={setOpenOfferModal}
              categories={categories}
              trigger={trigger}
              setTrigger={setTrigger}
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
              setTrigger={setTrigger}
            />
          }
        ></Route>
        <Route path="/auth" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
