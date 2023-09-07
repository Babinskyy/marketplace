import { Route, Routes, useRoutes } from "react-router-dom";
import "./common/assets/styles/scss/main/App.scss";
import Home from "./modules/homePage/views/Home";
import OfferView from "./modules/offers/views/OfferView";
import { useEffect, useState } from "react";
import { Category } from "./common/types/Types";
import Signup from "./modules/users/views/Signup";
import { error } from "console";
import { useNavigate } from "react-router-dom";

function App() {
  const [openOfferModal, setOpenOfferModal] = useState<boolean>(false);
  const [categories, setCategories] = useState<Category[] | undefined>();
  const [trigger, setTrigger] = useState<boolean>(false);
  const [isLogged, setIsLogged] = useState<boolean>(false);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/categories", {
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
              isLogged={isLogged}
              setIsLogged={setIsLogged}
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
              isLogged={isLogged}
              setIsLogged={setIsLogged}
            />
          }
        ></Route>
        <Route
          path="/auth"
          element={<Signup setOpenOfferModal={setOpenOfferModal} setIsLogged={setIsLogged} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
