import "../../common/assets/styles/scss/main/App.scss";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Category, Offer } from "../types/Types";
import Loader from "./Loader";
import { BASE_URL } from "../config/env-variable";
import { useAuth } from "../functions/useAuth";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  categoryFilterValueSet,
  countryFilterValueSet,
  currentInputValueSet,
  inputValueSet,
} from "../../store/features/FiltersSlice";

type OffersProps = {
  setOpenOfferModal: React.Dispatch<React.SetStateAction<boolean>>;
  categories: Category[] | undefined;
  darkTheme: boolean;
};

const Offers = (props: OffersProps): JSX.Element => {
  const [offers, setOffers] = useState<Offer[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [randomizedOffers, setRandomizedOffers] = useState<Offer[]>();
  const dispatch = useAppDispatch();
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const randomizeArray = (array: []) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `${BASE_URL}offers`;
        if (window.location.pathname === "/offers/user") {
          url = `${BASE_URL}offers/user`;
        }
        const response = await fetch(url, {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();

        if (data.error) {
          localStorage.removeItem("user");
          navigate("/auth");
        } else {
          setOffers(data.offers);
          setRandomizedOffers(randomizeArray(data.offers));
          setLoading(false);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [location.pathname]);

  const categorySwitch = (id: number | "") => {
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
      case "":
        return "";
    }
  };
  const ViewState = useAppSelector((state) => state.View.view);
  const inputValueState = useAppSelector((state) => state.filters.inputValue);
  const categoryState = useAppSelector(
    (state) => state.filters.categoryFilterValue
  );

  const countryState = useAppSelector(
    (state) => state.filters.countryFilterValue
  );

  //conditionally randomize offers based on location
  let offersToFilter = offers;
  if (ViewState === "home") {
    offersToFilter = randomizedOffers?.slice(0, 8);
  }

  const filteredItems = offersToFilter?.filter((offer) => {
    const inputValue = inputValueState || "";
    const categoryValue = categoryState || "";
    const countryValue = countryState || "";

    return (
      offer.title.toLowerCase().includes(inputValue.toLowerCase()) &&
      (categoryValue === "" || offer.category?.id === categoryValue) &&
      (countryValue === "" || offer.country === countryValue)
    );
  });

  const handleModalOpen = async () => {
    const result = await auth.isLogged();
    if (result) {
      props.setOpenOfferModal(true);
    } else {
      localStorage.removeItem("user");
      dispatch(categoryFilterValueSet(""));
      dispatch(countryFilterValueSet(""));
      dispatch(inputValueSet(""));
      dispatch(currentInputValueSet(""));
      navigate("/auth");
    }
  };

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
                ? `${inputValueState} ${categorySwitch(categoryState)}`
                : categoryState
                ? `${inputValueState} ${categorySwitch(categoryState)} `
                : inputValueState}
            </span>
            {ViewState === "home" ? (
              <span>Suggested offers</span>
            ) : (
              <span>
                {" "}
                {categoryState
                  ? filteredItems?.length
                    ? "offers"
                    : `offers ${
                        countryState === "Great"
                          ? " in Great Britain"
                          : countryState
                          ? `in ${countryState}`
                          : ""
                      }`
                  : inputValueState
                  ? `offers ${
                      countryState === "Great"
                        ? " in Great Britain"
                        : countryState
                        ? `in ${countryState}`
                        : ""
                    }`
                  : ViewState === "userOffers"
                  ? "My offers"
                  : `${countryState ? "" : "All"} offers ${
                      countryState === "Great"
                        ? "in Great Britain"
                        : countryState
                        ? `in ${countryState}`
                        : ""
                    }`}{" "}
              </span>
              // <span>All offers</span>
            )}

            <span>{!filteredItems?.length && " yet."}</span>
          </h1>
          {!filteredItems?.length && (
            <div>
              <Button
                variant="contained"
                className="add-offer-button"
                onClick={handleModalOpen}
              >
                Add an offer
              </Button>
            </div>
          )}
        </div>

        <div
          className={`offers-container`}
          style={
            filteredItems?.length && filteredItems?.length < 3
              ? { justifyContent: "space-around" }
              : {}
          }
        >
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
