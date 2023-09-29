import "../../../common/assets/styles/scss/main/App.scss";
import Header from "../../../common/components/Header";
import Searchbar from "../../../common/components/Searchbar";
import Categories from "./../components/Categories";
import Offers from "../../../common/components/Offers";
import Footer from "../../../common/components/Footer";
import AddOfferModal from "../../../common/components/AddOfferModal";
import { Category } from "../../../common/types/Types";
import Greetings from "../../../common/components/Greetings";

type HomeProps = {
  openOfferModal: boolean;
  setOpenOfferModal: React.Dispatch<React.SetStateAction<boolean>>;
  categories: Category[] | undefined;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  darkTheme: boolean;
};

const Home = (props: HomeProps): JSX.Element => {
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
