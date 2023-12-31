import "../../../common/assets/styles/scss/main/App.scss";
import Header from "../../../common/components/Header";
import Searchbar from "../../../common/components/Searchbar";
import Categories from "./../components/Categories";
import Offers from "../../../common/components/Offers";
import Footer from "../../../common/components/Footer";
import AddOfferModal from "../../../common/components/AddOfferModal";
import { Category } from "../../../common/types/Types";
import Greetings from "../../../common/components/Greetings";
import { useEffect } from "react";
import { View } from "../../../store/features/ViewSlice";
import { useAppDispatch } from "../../../store/store";
import {
  categoryFilterValueSet,
  countryFilterValueSet,
  currentInputValueSet,
  inputValueSet,
} from "../../../store/features/FiltersSlice";

type HomeProps = {
  openOfferModal: boolean;
  setOpenOfferModal: React.Dispatch<React.SetStateAction<boolean>>;
  categories: Category[] | undefined;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  darkTheme: boolean;
};

const Home = (props: HomeProps): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(currentInputValueSet(""));
    dispatch(categoryFilterValueSet(""));
    dispatch(countryFilterValueSet(""));
    dispatch(inputValueSet(""));
    dispatch(View("home"));
  }, []);
  return (
    <div className="home">
      <Header
        setOpenOfferModal={props.setOpenOfferModal}
        setDarkTheme={props.setDarkTheme}
        darkTheme={props.darkTheme}
      />
      <Greetings darkTheme={props.darkTheme} />
      <Searchbar darkTheme={props.darkTheme} />

      <Categories categories={props.categories} darkTheme={props.darkTheme} />
      <Offers
        setOpenOfferModal={props.setOpenOfferModal}
        categories={props.categories}
        darkTheme={props.darkTheme}
      />

      <Footer darkTheme={props.darkTheme} />

      <AddOfferModal
        openOfferModal={props.openOfferModal}
        setOpenOfferModal={props.setOpenOfferModal}
        categories={props.categories}
        darkTheme={props.darkTheme}
      />
    </div>
  );
};

export default Home;
