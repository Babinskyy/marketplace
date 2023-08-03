import "../../../common/assets/styles/scss/App.scss";
import AddOffer from "../../../common/components/AddOffer";
import Footer from "../../../common/components/Footer";
import Header from "../../../common/components/Header";
import OfferDetails from "../components/Offer";
import Searchbar from "../../../common/components/Searchbar";

type OfferViewProps = {
  openOfferModal: boolean;
  setOpenOfferModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const OfferView = (props: OfferViewProps): JSX.Element => {
  return (
    <div className="offer-view-page">
      <Header setOpenOfferModal={props.setOpenOfferModal} />
      <AddOffer
        openOfferModal={props.openOfferModal}
        setOpenOfferModal={props.setOpenOfferModal}
      />
      {/* <Searchbar /> */}
      <OfferDetails />
      <Footer />
    </div>
  );
};

export default OfferView;
