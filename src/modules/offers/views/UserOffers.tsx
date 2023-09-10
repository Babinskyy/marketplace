import "../../../common/assets/styles/scss/main/App.scss";
import Footer from "../../../common/components/Footer";
import Header from "../../../common/components/Header";
import Offers from "../../../common/components/Offers";
import { Category } from "../../../common/types/Types";

type allOffersType = {
  setOpenOfferModal: React.Dispatch<React.SetStateAction<boolean>>;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  darkTheme: boolean;
  categories: Category[] | undefined;
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  currentInputValue: string;
  setCurrentInputValue: React.Dispatch<React.SetStateAction<string>>;
  setCategoryFilterValue: React.Dispatch<
    React.SetStateAction<number | undefined>
  >;
  categoryFilterValue: number | undefined;
};

const UserOffers = (props: allOffersType): JSX.Element => {
  return (
    <div className="all-offers-container">
      <Header
        setOpenOfferModal={props.setOpenOfferModal}
        setDarkTheme={props.setDarkTheme}
        darkTheme={props.darkTheme}
        isLogged={props.isLogged}
      />
      <Offers
        inputValue={props.inputValue}
        categoryFilterValue={props.categoryFilterValue}
        setOpenOfferModal={props.setOpenOfferModal}
        setCategoryFilterValue={props.setCategoryFilterValue}
        setInputValue={props.setInputValue}
        setCurrentInputValue={props.setCurrentInputValue}
        categories={props.categories}
        setIsLogged={props.setIsLogged}
        darkTheme={props.darkTheme}
      />
      <Footer darkTheme={props.darkTheme} />
    </div>
  );
};

export default UserOffers;
