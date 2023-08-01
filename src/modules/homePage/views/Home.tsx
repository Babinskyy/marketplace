import "../../../common/assets/styles/scss/App.scss";
import Header from "../../../common/components/Header";
import Searchbar from "../../../common/components/Searchbar";
import Categories from "./../components/Categories";
import Offers from "../../../common/components/Offers";
import Footer from "../../../common/components/Footer";
import AddOffer from "../../../common/components/AddOffer";
import { useState } from "react";

type HomeProps = {
  openOfferModal: boolean;
  setOpenOfferModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Home = (props: HomeProps): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>("");
  const [currentInputValue, setCurrentInputValue] = useState<string>("");
  const [categoryFilterValue, setCategoryFilterValue] = useState<string>("");

  return (
    <div className="home">
      <Header setOpenOfferModal={props.setOpenOfferModal} />
      <Searchbar
        inputValue={inputValue}
        setInputValue={setInputValue}
        currentInputValue={currentInputValue}
        setCurrentInputValue={setCurrentInputValue}
      />
      <Categories setCategoryFilterValue={setCategoryFilterValue} />
      <Offers
        inputValue={inputValue}
        categoryFilterValue={categoryFilterValue}
        setOpenOfferModal={props.setOpenOfferModal}
        setCategoryFilterValue={setCategoryFilterValue}
        setInputValue={setInputValue}
        setCurrentInputValue={setCurrentInputValue}
      />
      <Footer />
      <AddOffer
        openOfferModal={props.openOfferModal}
        setOpenOfferModal={props.setOpenOfferModal}
      />
    </div>
  );
};

export default Home;
