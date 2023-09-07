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
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
};

const OfferView = (props: OfferViewProps): JSX.Element => {
  return (
    <div className="offer-view-page">
      <Header setOpenOfferModal={props.setOpenOfferModal} isLogged={props.isLogged}/>
      <AddOffer
        openOfferModal={props.openOfferModal}
        setOpenOfferModal={props.setOpenOfferModal}
        categories={props.categories}
        setTrigger={props.setTrigger}
      />
      
      <Offer setIsLogged={props.setIsLogged}/>
      <Footer />
    </div>
  );
};

export default OfferView;
