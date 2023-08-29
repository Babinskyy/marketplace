import "../../common/assets/styles/scss/main/App.scss";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Offer } from "../types/Types"

type OffersProps = {
  inputValue?: string;
  categoryFilterValue?: string;
  setOpenOfferModal: React.Dispatch<React.SetStateAction<boolean>>;
  setCategoryFilterValue: React.Dispatch<React.SetStateAction<string>>;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setCurrentInputValue?: React.Dispatch<React.SetStateAction<string>>;
};

const Offers = (props: OffersProps): JSX.Element => {
  const [offers, setOffers] = useState<Offer[]>();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/offers");
        const data = await response.json();
        setOffers(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const navigate = useNavigate();

  const LowerCaseFirstLetter = (string: string) => {
    return string.charAt(0).toLowerCase() + string.slice(1);
  };

  

    const filteredItems = offers?.filter((offer) => {
      const inputValue = props.inputValue || "";
      const categoryValue = props.categoryFilterValue || "";
  
      return (
        offer.title.toLowerCase().includes(inputValue.toLowerCase()) &&
        (categoryValue === "" || offer.category === categoryValue)
      );
    });
  

  return (
    <div className="offers-wrapper">
      <div className="offers-wrapper-2">
        <div className="h1-button-wrapper">
          {(props.categoryFilterValue || props.inputValue) && (
            <Button
              className="all-offers-button"
              onClick={() => {
                props.setCategoryFilterValue("");
                props.setInputValue("");
                if (props.setCurrentInputValue) {
                  props.setCurrentInputValue("");
                }
              }}
            >
              all offers
            </Button>
          )}

          <h1>
            <span>
              {filteredItems?.length ? "" : "We are sorry, there are no "}
              {}
            </span>
            <span
              style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)" }}
              className={`category-name ${
                !filteredItems?.length && "font-weight"
              }`}
            >
              {filteredItems?.length
                ? `${props.categoryFilterValue} ${props.inputValue}`
                : props.categoryFilterValue &&
                  `${LowerCaseFirstLetter(props.categoryFilterValue)} ${
                    props.inputValue
                  }`}
            </span>
            <span>
              {" "}
              {props.categoryFilterValue
                ? filteredItems?.length
                  ? "offers"
                  : "offers"
                : props.inputValue
                ? `${props.inputValue} offers`
                : "All offers"}{" "}
            </span>
            <span>{!filteredItems?.length && " yet."}</span>
          </h1>
          {!filteredItems?.length && (
            <div>
              <Button
                variant="contained"
                className="add-offer-button"
                onClick={() => props.setOpenOfferModal(true)}
              >
                Add an offer
              </Button>
            </div>
          )}
        </div>

        <div className="offers-container">
          {filteredItems?.map((e, i) => {
            return (
              <div
                className="offer-item"
                key={i}
                onClick={() => {
                  navigate(`/offer/${e.id}`);
                  window.scrollTo(0, 0);
                }}
              >
                {e.images?.length > 0 && <img src={e.images[0]} alt="" />}

                <h2 className="offer-title">{e.title}</h2>
                <h3 className="offer-price">{e.price} $</h3>
                <p className="offer-phone">
                  <span>+ 00 XXX XX XX</span>
                  <LocalPhoneOutlinedIcon />
                </p>
                <div className="category-date-container">
                  <span className="offer-category">{e.category}</span>
                  <span className="offer-date">{e.date}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Offers;
