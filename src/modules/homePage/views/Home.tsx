import "../../../common/assets/styles/scss/main/App.scss";
import Header from "../../../common/components/Header";
import Searchbar from "../../../common/components/Searchbar";
import Categories from "./../components/Categories";
import Offers from "../../../common/components/Offers";
import Footer from "../../../common/components/Footer";
import AddOffer from "../../../common/components/AddOffer";
import { useEffect, useState } from "react";

type HomeProps = {
  openOfferModal: boolean;
  setOpenOfferModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Home = (props: HomeProps): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>("");
  const [currentInputValue, setCurrentInputValue] = useState<string>("");
  const [categoryFilterValue, setCategoryFilterValue] = useState<string>("");
  const [isNightMode, setIsNightMode] = useState<boolean>(false);
  const [imageData, setImageData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/image");
        const data = await response.json();
        
        const base64String = data[0].image.data.map((byte:any) => String.fromCharCode(byte)).join('');
        const dataUrl = `data:image/jpeg;base64,${base64String}`;
        setImageData(dataUrl);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);
  console.log(imageData);
  return (
    <div className="home">
      <Header
        setOpenOfferModal={props.setOpenOfferModal}
        isNightMode={isNightMode}
        setIsNightMode={setIsNightMode}
      />
      <Searchbar
        inputValue={inputValue}
        setInputValue={setInputValue}
        currentInputValue={currentInputValue}
        setCurrentInputValue={setCurrentInputValue}
      />
      <Categories
        setCategoryFilterValue={setCategoryFilterValue}
        categoryFilterValue={categoryFilterValue}
      />
      {imageData && <img src={imageData} alt="Image" />}

      <Offers
        inputValue={inputValue}
        categoryFilterValue={categoryFilterValue}
        setOpenOfferModal={props.setOpenOfferModal}
        setCategoryFilterValue={setCategoryFilterValue}
        setInputValue={setInputValue}
        setCurrentInputValue={setCurrentInputValue}
      />
      <Footer />
      <AddOffer
        openOfferModal={props.openOfferModal}
        setOpenOfferModal={props.setOpenOfferModal}
      />
    </div>
  );
};

export default Home;
