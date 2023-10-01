import { useEffect } from "react";
import Footer from "../../../common/components/Footer";
import Header from "../../../common/components/Header";
import Offers from "../../../common/components/Offers";
import { Category } from "../../../common/types/Types";
import { useAppDispatch } from "../../../store/store";
import Filters from "../components/Filters";
import { View } from "../../../store/features/ViewSlice";
import AddOfferModal from "../../../common/components/AddOfferModal";

type AllOffersType = {
  setOpenOfferModal: React.Dispatch<React.SetStateAction<boolean>>;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  darkTheme: boolean;
  categories: Category[] | undefined;
  openOfferModal: boolean;
};

const AllOffers = (props: AllOffersType): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(View("allOffers"));
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="all-offers-container">
      <Header
        setOpenOfferModal={props.setOpenOfferModal}
        setDarkTheme={props.setDarkTheme}
        darkTheme={props.darkTheme}
      />
      <Filters darkTheme={props.darkTheme} categories={props.categories} />
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

export default AllOffers;
