import "../../../common/assets/styles/scss/main/App.scss";
import Header from "../../../common/components/Header";
import Searchbar from "../../../common/components/Searchbar";
import Categories from "./../components/Categories";
import Offers from "../../../common/components/Offers";
import Footer from "../../../common/components/Footer";
import AddOffer from "../../../common/components/AddOffer";
import { useEffect, useState } from "react";
import { Category } from "../../../common/types/Types";
import { BooleanLiteral } from "typescript";

type HomeProps = {
  openOfferModal: boolean;
  setOpenOfferModal: React.Dispatch<React.SetStateAction<boolean>>;
  categories: Category[] | undefined;
  trigger: boolean;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
};

const Home = (props: HomeProps): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>("");
  const [currentInputValue, setCurrentInputValue] = useState<string>("");
  const [categoryFilterValue, setCategoryFilterValue] = useState<
    number | undefined
  >();
  const [isNightMode, setIsNightMode] = useState<boolean>(false);

  return (
    <div className="home">
      <Header
        setOpenOfferModal={props.setOpenOfferModal}
        isNightMode={isNightMode}
        setIsNightMode={setIsNightMode}
      />
      <Searchbar
        inputValue={inputValue}
        setInputValue={setInputValue}
        currentInputValue={currentInputValue}
        setCurrentInputValue={setCurrentInputValue}
      />
      <Categories
        setCategoryFilterValue={setCategoryFilterValue}
        categoryFilterValue={categoryFilterValue}
        categories={props.categories}
      />
      <Offers
        inputValue={inputValue}
        categoryFilterValue={categoryFilterValue}
        setOpenOfferModal={props.setOpenOfferModal}
        setCategoryFilterValue={setCategoryFilterValue}
        setInputValue={setInputValue}
        setCurrentInputValue={setCurrentInputValue}
        categories={props.categories}
        trigger={props.trigger}
      />
      <Footer />
      <AddOffer
        openOfferModal={props.openOfferModal}
        setOpenOfferModal={props.setOpenOfferModal}
        categories={props.categories}
        setTrigger={props.setTrigger}
      />
    </div>
  );
};

export default Home;
