import { Route, Routes, useRoutes } from "react-router-dom";
import './App.scss';
import Home from './pages/Home';
import OfferView from "./pages/OfferView";
import { useState } from "react";


function App() {

  const [openOfferModal, setOpenOfferModal] = useState<boolean>(false);

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home openOfferModal={openOfferModal} setOpenOfferModal={setOpenOfferModal}/>}></Route>
      <Route
        path="/offerview"
        element={<OfferView openOfferModal={openOfferModal} setOpenOfferModal={setOpenOfferModal}/>}
      ></Route>
      
    </Routes>
      
    </div>
  );
}

export default App;
