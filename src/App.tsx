import { Route, Routes, useRoutes } from "react-router-dom";
import './common/assets/styles/scss/App.scss';
import Home from './modules/offers/views/Home';
import OfferView from "./modules/offers/views/OfferView";
import { useState } from "react";


function App() {

  const [openOfferModal, setOpenOfferModal] = useState<boolean>(false);

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home openOfferModal={openOfferModal} setOpenOfferModal={setOpenOfferModal}/>}></Route>
      <Route
        path="/offer/:id"
        element={<OfferView openOfferModal={openOfferModal} setOpenOfferModal={setOpenOfferModal}/>}
      ></Route>
      
    </Routes>
      
    </div>
  );
}

export default App;
