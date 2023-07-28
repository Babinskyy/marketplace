import "../App.scss";
import AddOffer from "../components/AddOffer";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OfferDetails from "../components/OfferDetails";
import Searchbar from "../components/Searchbar";

type OfferViewProps = {
    openOfferModal: boolean;
    setOpenOfferModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const OfferView = (props:OfferViewProps): JSX.Element => {
  return (
    <div className="offer-view-page">
      <Header setOpenOfferModal={props.setOpenOfferModal}/>
      <AddOffer openOfferModal={props.openOfferModal} setOpenOfferModal={props.setOpenOfferModal}/>
      <Searchbar />
      <OfferDetails/>
    
      <Footer />
    </div>
  );
};

export default OfferView;
