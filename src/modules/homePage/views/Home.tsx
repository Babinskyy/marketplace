import "../../../common/assets/styles/scss/main/App.scss";
import Header from "../../../common/components/Header";
import Searchbar from "../../../common/components/Searchbar";
import Categories from "./../components/Categories";
import Offers from "../../../common/components/Offers";
import Footer from "../../../common/components/Footer";
import AddOfferModal from "../../../common/components/AddOfferModal";
import { Category } from "../../../common/types/Types";

type HomeProps = {
  openOfferModal: boolean;
  setOpenOfferModal: React.Dispatch<React.SetStateAction<boolean>>;
  categories: Category[] | undefined;
  trigger: boolean;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  darkTheme: boolean;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  currentInputValue: string;
  setCurrentInputValue: React.Dispatch<React.SetStateAction<string>>;
  setCategoryFilterValue: React.Dispatch<
    React.SetStateAction<number | undefined>
  >;
  categoryFilterValue: number | undefined;
};

const Home = (props: HomeProps): JSX.Element => {
  return (
    <div className="home">
      <Header
        setOpenOfferModal={props.setOpenOfferModal}
        isLogged={props.isLogged}
        setDarkTheme={props.setDarkTheme}
        darkTheme={props.darkTheme}
      />

      <Searchbar
        inputValue={props.inputValue}
        setInputValue={props.setInputValue}
        currentInputValue={props.currentInputValue}
        setCurrentInputValue={props.setCurrentInputValue}
        darkTheme={props.darkTheme}
      />

      <Categories
        setCategoryFilterValue={props.setCategoryFilterValue}
        categoryFilterValue={props.categoryFilterValue}
        categories={props.categories}
        darkTheme={props.darkTheme}
      />
      {/* <h1
        style={{
          backgroundColor: "rgb(44, 44, 44)",
          margin: "0",
          paddingTop: "10px",
          color: "#fff",
        }}
      >
        Suggested offers
      </h1> */}
      <Offers
        inputValue={props.inputValue}
        categoryFilterValue={props.categoryFilterValue}
        setOpenOfferModal={props.setOpenOfferModal}
        setCategoryFilterValue={props.setCategoryFilterValue}
        setInputValue={props.setInputValue}
        setCurrentInputValue={props.setCurrentInputValue}
        categories={props.categories}
        trigger={props.trigger}
        setIsLogged={props.setIsLogged}
        darkTheme={props.darkTheme}
      />

      <Footer darkTheme={props.darkTheme} />

      <AddOfferModal
        openOfferModal={props.openOfferModal}
        setOpenOfferModal={props.setOpenOfferModal}
        categories={props.categories}
        setTrigger={props.setTrigger}
        darkTheme={props.darkTheme}
      />
    </div>
  );
};

export default Home;
