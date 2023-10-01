import { useEffect } from "react";
import "../../../common/assets/styles/scss/main/App.scss";
import AddOfferModal from "../../../common/components/AddOfferModal";
import Footer from "../../../common/components/Footer";
import Header from "../../../common/components/Header";
import Offers from "../../../common/components/Offers";
import { Category } from "../../../common/types/Types";
import { useAppDispatch } from "../../../store/store";
import { View } from "../../../store/features/ViewSlice";

type UserOffersType = {
  setOpenOfferModal: React.Dispatch<React.SetStateAction<boolean>>;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  darkTheme: boolean;
  categories: Category[] | undefined;
  openOfferModal: boolean;
};

const UserOffers = (props: UserOffersType): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(View("userOffers"));
  }, []);
  return (
    <div className="user-offers-container">
      <Header
        setOpenOfferModal={props.setOpenOfferModal}
        setDarkTheme={props.setDarkTheme}
        darkTheme={props.darkTheme}
      />
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

export default UserOffers;
