import "../../../common/assets/styles/scss/main/App.scss";
import Header from "../../../common/components/Header";
import Offers from "../../../common/components/Offers";
import { Category } from "../../../common/types/Types";

type allOffersType = {
  setOpenOfferModal: React.Dispatch<React.SetStateAction<boolean>>;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  darkTheme: boolean;
  categories: Category[] | undefined;
  trigger: boolean;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
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

const AllOffers = (props: allOffersType): JSX.Element => {
  return (
    <div className="all-offers-container">
      <Header
        setOpenOfferModal={props.setOpenOfferModal}
        setDarkTheme={props.setDarkTheme}
        darkTheme={props.darkTheme}
      />
      <Offers
        inputValue={props.inputValue}
        categoryFilterValue={props.categoryFilterValue}
        setOpenOfferModal={props.setOpenOfferModal}
        setCategoryFilterValue={props.setCategoryFilterValue}
        setInputValue={props.setInputValue}
        setCurrentInputValue={props.setCurrentInputValue}
        categories={props.categories}
        trigger={props.trigger}
        setIsLogged={props.setIsLogged}
        darkTheme={props.darkTheme}
      />
    </div>
  );
};

export default AllOffers;
