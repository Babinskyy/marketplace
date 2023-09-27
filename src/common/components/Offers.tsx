import "../../common/assets/styles/scss/main/App.scss";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Category, Offer } from "../types/Types";
import Loader from "./Loader";
import { BASE_URL } from "../config/env-variable";
import { useAuth } from "../functions/useAuth";

type OffersProps = {
  inputValue?: string;
  categoryFilterValue?: number | undefined;
  setOpenOfferModal: React.Dispatch<React.SetStateAction<boolean>>;
  setCategoryFilterValue: React.Dispatch<
    React.SetStateAction<number | undefined>
  >;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setCurrentInputValue?: React.Dispatch<React.SetStateAction<string>>;
  categories: Category[] | undefined;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  darkTheme: boolean;
};

const Offers = (props: OffersProps): JSX.Element => {
  const [offers, setOffers] = useState<Offer[]>();
  const [loading, setLoading] = useState<boolean>(true);

  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `${BASE_URL}offers`
        if(window.location.pathname === "/offers/user"){
          url = `${BASE_URL}offers/user`
        }
        const response = await fetch(url, {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();

        if (data.error) {
          props.setIsLogged(false);
          navigate("/auth");
        }
        const currentPathname = window.location.pathname;
        console.log(currentPathname);
        setOffers(data.offers);
        props.setIsLogged(true);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [location.pathname]);

  const categorySwitch = (id: number | undefined) => {
    switch (id) {
      case 1:
        return "Cars";
      case 2:
        return "Houses";
      case 3:
        return "Work";
      case 4:
        return "Electronics";
      case 5:
        return "Clothes";
      case 6:
        return "Sport";
      case 7:
        return "Hotels";
      case 8:
        return "Hobby";
      case 9:
        return "Furnitures";
      case 10:
        return "Books";
      case undefined:
        return "";
    }
  };

  const filteredItems = offers?.filter((offer) => {
    const inputValue = props.inputValue || "";
    const categoryValue = props.categoryFilterValue || "";

    return (
      offer.title.toLowerCase().includes(inputValue.toLowerCase()) &&
      (categoryValue === "" || offer.category?.id === categoryValue)
    );
  });

  if (loading)
    return (
      <div className="loader-container">
        <Loader darkTheme={props.darkTheme} />
      </div>
    );
  return (
    <div className={`offers-wrapper ${props.darkTheme && "dark-theme"}`}>
      <div className="offers-wrapper-2">
        <div className="h1-button-wrapper">
          {(props.categoryFilterValue || props.inputValue) && (
            <Button
              className={`all-offers-button ${props.darkTheme && "dark-theme"}`}
              onClick={() => {
                props.setCategoryFilterValue(undefined);
                props.setInputValue("");
                if (props.setCurrentInputValue) {
                  props.setCurrentInputValue("");
                }
              }}
            >
              clear filters
            </Button>
          )}

          <h1 className={`${props.darkTheme && "dark-theme"}`}>
            <span>
              {filteredItems?.length ? "" : "We are sorry, there are no "}
            </span>
            <span
              style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)" }}
              className={`category-name ${
                !filteredItems?.length && "font-weight"
              }`}
            >
              {filteredItems?.length
                ? `${categorySwitch(props.categoryFilterValue)} ${
                    props.inputValue
                  }`
                : props.categoryFilterValue &&
                  `${categorySwitch(props.categoryFilterValue)} ${
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
                ? "offers"
                : location.pathname === "/offers/user"
                ? "My offers"
                : "Suggested offers"}{" "}
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

        <div className={`offers-container`}>
          {filteredItems?.map((e, i) => {
            return (
              <div
                className={`offer-item ${props.darkTheme && "dark-theme"}`}
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
                  <span className="offer-category">{e.category?.name}</span>
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
