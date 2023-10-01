import { useEffect } from "react";
import "../../../common/assets/styles/scss/main/App.scss";
import AddOfferModal from "../../../common/components/AddOfferModal";
import Footer from "../../../common/components/Footer";
import Header from "../../../common/components/Header";
import { Category } from "../../../common/types/Types";
import { useAppDispatch } from "../../../store/store";
import Offer from "../components/Offer";
import { View } from "../../../store/features/ViewSlice";

type OfferViewProps = {
  openOfferModal: boolean;
  setOpenOfferModal: React.Dispatch<React.SetStateAction<boolean>>;
  categories: Category[] | undefined;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  darkTheme: boolean;
  trigger: boolean;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
};

const OfferView = (props: OfferViewProps): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(View("userOffers"));
  }, []);
  return (
    <div className="offer-view-page">
      <Header
        setOpenOfferModal={props.setOpenOfferModal}
        setDarkTheme={props.setDarkTheme}
        darkTheme={props.darkTheme}
      />
      <AddOfferModal
        openOfferModal={props.openOfferModal}
        setOpenOfferModal={props.setOpenOfferModal}
        categories={props.categories}
        darkTheme={props.darkTheme}
        trigger={props.trigger}
        setTrigger={props.setTrigger}
      />

      <Offer
        darkTheme={props.darkTheme}
        trigger={props.trigger}
        setTrigger={props.setTrigger}
      />
      <Footer darkTheme={props.darkTheme} />
    </div>
  );
};

export default OfferView;
