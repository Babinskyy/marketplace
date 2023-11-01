import { Button } from "@mui/material";
import "../../common/assets/styles/scss/main/App.scss";
import mpBigLogo from "../../common/assets/images/logo/marketplace-logo-nobg-white.png";
import mpDarkBigLogo from "../../common/assets/images/logo/marketplace-logo-nobg.png";
import mpSmallLogo from "../../common/assets//images/logo/small-logo-nobg-white.png";
import mpDarkSmallLogo from "../../common/assets//images/logo/small-logo-nobg.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useAuth } from "../functions/useAuth";
import { BASE_URL } from "../config/env-variable";
import DropDownMenu from "./DropDownMenu";
import { useAppDispatch, useAppSelector } from "../../store/store";
import DarkMode from "../../context/ThemeContext";

import {
  categoryFilterValueSet,
  countryFilterValueSet,
  currentInputValueSet,
  inputValueSet,
} from "../../store/features/FiltersSlice";

type HeaderProps = {
  setOpenOfferModal: React.Dispatch<React.SetStateAction<boolean>>;
  isNightMode?: boolean;
  setIsNightMode?: React.Dispatch<React.SetStateAction<boolean>>;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  darkTheme: boolean;
  setCategoryFilterValue?: React.Dispatch<React.SetStateAction<number | undefined>>;
};

const Header = (props: HeaderProps): JSX.Element => {
  const { currentTheme, changeCurrentTheme } = useContext(DarkMode);

  const dispatch = useAppDispatch();
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    localStorage.removeItem("user");
    const logout = async () => {
      try {
        await fetch(`${BASE_URL}users/logout`, {
          method: "POST",
          credentials: "include",
        });
      } catch (err) {
        console.error(err);
      }
    };
    logout();
    navigate("/auth");
  };

  const handleModeChange = async () => {
    const newTheme = !props.darkTheme;
    props.setDarkTheme(newTheme);
    // localStorage.setItem("themePreference", newTheme ? "dark" : "light");
    changeCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  const handleModalOpen = async () => {
    if (auth.isLogged()) {
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
  const ViewState = useAppSelector((state) => state.View.view);
  useEffect(() => {
    console.log(currentTheme);
  }, []);
  return (
    <nav className="main-header">
      <ul className="main-navigation">
        <div
          className={`logo-holder ${ViewState === "login" ? "login" : ""} ${
            !auth.isLogged() && "logged-out"
          }`}
        >
          <Link to="/">
            <img
              src={props.darkTheme ? mpDarkBigLogo : mpBigLogo}
              alt="logo"
              className="big-logo"
            />
            <img
              src={props.darkTheme ? mpDarkSmallLogo : mpSmallLogo}
              alt="logo"
              className="small-logo"
            />
          </Link>
        </div>

        <div className="buttons-holder">
          {auth.isLogged() ? (
            <>
              <div className="login-buttons-panel">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: props.darkTheme ? "#444444" : "",
                    color: props.darkTheme ? "#d8dbe0" : "",
                  }}
                  onClick={() => {
                    navigate("/offers/all");
                  }}
                >
                  All offers
                </Button>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: props.darkTheme ? "#444444" : "",
                    color: props.darkTheme ? "#d8dbe0" : "",
                  }}
                  onClick={() => {
                    navigate(`/offers/user`);
                    dispatch(currentInputValueSet(""));
                    dispatch(categoryFilterValueSet(""));
                    dispatch(countryFilterValueSet(""));
                    dispatch(inputValueSet(""));
                  }}
                >
                  My offers
                </Button>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: props.darkTheme ? "#444444" : "",
                    color: props.darkTheme ? "#d8dbe0" : "",
                  }}
                  onClick={handleLogout}
                >
                  Log out
                </Button>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: props.darkTheme ? "#444444" : "",
                    color: props.darkTheme ? "#d8dbe0" : "",
                  }}
                  onClick={handleModalOpen}
                >
                  Add an offer
                </Button>
              </div>
              <div id="dropdown-menu">
                <DropDownMenu
                  setDarkTheme={props.setDarkTheme}
                  darkTheme={props.darkTheme}
                  setOpenOfferModal={props.setOpenOfferModal}
                />
              </div>
            </>
          ) : (
            <div className="logout-buttons-panel">
              {" "}
              <Button
                variant="contained"
                style={{
                  backgroundColor: props.darkTheme ? "#444444" : "",
                  color: props.darkTheme ? "#d8dbe0" : "",
                }}
                onClick={() => {
                  navigate("/offers/all");
                }}
              >
                All Offers
              </Button>
              <Button
                variant="contained"
                style={{
                  backgroundColor: props.darkTheme ? "#444444" : "",
                  color: props.darkTheme ? "#d8dbe0" : "",
                }}
                onClick={() => {
                  navigate("/auth");
                }}
              >
                Sign in
              </Button>
            </div>
          )}

          <div className="toggle-switch">
            <label>
              <input
                type="checkbox"
                onChange={handleModeChange}
                checked={currentTheme === "dark" ? false : true}
              />
              <span className="slider-toggle"></span>
            </label>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Header;
