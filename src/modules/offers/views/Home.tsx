import "../../../common/assets/styles/scss/App.scss";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import Categories from "../components/Categories";
import Offers from "../components/Offers";
import Footer from "../components/Footer";
import AddOffer from "../components/AddOffer";
import { useState } from "react";
import { Offer } from "../../../common/types/Types";

type HomeProps = {
  openOfferModal: boolean;
  setOpenOfferModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Home = (props: HomeProps): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>("");
  

  return (
    <div className="home">
      <Header setOpenOfferModal={props.setOpenOfferModal} />
      <Searchbar inputValue={inputValue} setInputValue={setInputValue} />
      <Categories />
      <Offers inputValue={inputValue}/>
      <Footer />
      <AddOffer
        openOfferModal={props.openOfferModal}
        setOpenOfferModal={props.setOpenOfferModal}
      />
    </div>
  );
};

export default Home;
