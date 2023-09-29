import "../../../common/assets/styles/scss/main/App.scss";
import AddOfferModal from "../../../common/components/AddOfferModal";
import Footer from "../../../common/components/Footer";
import Header from "../../../common/components/Header";
import { Category } from "../../../common/types/Types";
import Offer from "../components/Offer";

type OfferViewProps = {
  openOfferModal: boolean;
  setOpenOfferModal: React.Dispatch<React.SetStateAction<boolean>>;
  categories: Category[] | undefined;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  darkTheme: boolean;
};

const OfferView = (props: OfferViewProps): JSX.Element => {
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
      />

      <Offer darkTheme={props.darkTheme} />
      <Footer darkTheme={props.darkTheme} />
    </div>
  );
};

export default OfferView;
