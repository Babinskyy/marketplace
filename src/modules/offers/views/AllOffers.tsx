import Footer from "../../../common/components/Footer";
import Header from "../../../common/components/Header";
import Offers from "../../../common/components/Offers";
import { Category } from "../../../common/types/Types";
import Filters from "../components/Filters";

type AllOffersType = {
  setOpenOfferModal: React.Dispatch<React.SetStateAction<boolean>>;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  darkTheme: boolean;
  categories: Category[] | undefined;
  openOfferModal: boolean;
};

const AllOffers = (props: AllOffersType): JSX.Element => {
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
    </div>
  );
};

export default AllOffers;
