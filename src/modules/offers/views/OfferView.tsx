import "../../../common/assets/styles/scss/main/App.scss";
import AddOffer from "../../../common/components/AddOffer";
import Footer from "../../../common/components/Footer";
import Header from "../../../common/components/Header";
import { Category } from "../../../common/types/Types";
import Offer from "../components/Offer";

type OfferViewProps = {
  openOfferModal: boolean;
  setOpenOfferModal: React.Dispatch<React.SetStateAction<boolean>>;
  categories: Category[] | undefined;
};

const OfferView = (props: OfferViewProps): JSX.Element => {
  return (
    <div className="offer-view-page">
      <Header setOpenOfferModal={props.setOpenOfferModal} />
      <AddOffer
        openOfferModal={props.openOfferModal}
        setOpenOfferModal={props.setOpenOfferModal}
        categories={props.categories}
      />
      
      <Offer />
      <Footer />
    </div>
  );
};

export default OfferView;
