import { Button, FormControlLabel, FormGroup } from "@mui/material";
import "../../common/assets/styles/scss/main/App.scss";
import mpBigLogo from "../../common/assets/images/logo/marketplacelogo4.png";
import mpDarkBigLogo from "../../common/assets/images/logo/logo-dark.png";
import mpSmallLogo from "../../common/assets//images/logo/marketplacesmalllogo.png";
import mpDarkSmallLogo from "../../common/assets//images/logo/small-logo-dark.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../functions/useAuth";
import { BASE_URL } from "../config/env-variable";

type HeaderProps = {
  setOpenOfferModal: React.Dispatch<React.SetStateAction<boolean>>;
  isNightMode?: boolean;
  setIsNightMode?: React.Dispatch<React.SetStateAction<boolean>>;
  isLogged?: boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  darkTheme: boolean;
  isLoginView?: boolean;
};

const Header = (props: HeaderProps): JSX.Element => {
  const [isUserLogged, setIsUserLogged] = useState<boolean>(false);
  const checkIsLogged = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    const logout = async () => {
      try {
        const response = await fetch(`${BASE_URL}users/logout`, {
          method: "POST",
          credentials: "include",
        });
        console.log(response);
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
    localStorage.setItem("themePreference", newTheme ? "dark" : "light");
  };

  const handleClick = async () => {
    const result = await checkIsLogged(); // Call the function to trigger the fetch
    if (result?.message === "auth success") {
      props.setOpenOfferModal(true);
    } else {
      navigate("/auth");
    }
  };

  useEffect(() => {
    const checkLogStatus = async () => {
      const result = await checkIsLogged();
      if (result?.message === "auth success") {
        setIsUserLogged(true);
      } else {
        setIsUserLogged(false);
      }
    };
    checkLogStatus();
  }, []);

  return (
    <nav className="main-header">
      <ul className="main-navigation">
        <div className={`logo-holder ${props.isLoginView && "login"}`}>
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
        <div className={`buttons-panel ${props.isLoginView && "login"}`}>
          <div className="toggle-switch">
            <label>
              <input
                type="checkbox"
                onChange={handleModeChange}
                checked={!props.darkTheme}
              />
              <span className="slider-toggle"></span>
            </label>
          </div>
          {/* {props.isLogged ? (
            <>
              
              <Button
                variant="contained"
                style={{
                  backgroundColor: props.darkTheme ? "#444444" : "",
                  color: props.darkTheme ? "#d8dbe0" : "",
                }}
                onClick={handleLogout}
                className={`${props.darkTheme ? "dark-theme" : ""}`}
              >
                Log out
              </Button>

              <Button
                variant="contained"
                style={{
                  backgroundColor: props.darkTheme ? "#444444" : "",
                  color: props.darkTheme ? "#d8dbe0" : "",
                }}
                onClick={() => props.setOpenOfferModal(true)}
                className={`${props.darkTheme ? "dark-theme" : ""}`}
              >
                Add an offer
              </Button>
            </>
          ) : (
            <></>
          )} */}
          {props.isLoginView ? (
            <></>
          ) : (
            <>
              {isUserLogged ? (
                <>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: props.darkTheme ? "#444444" : "",
                      color: props.darkTheme ? "#d8dbe0" : "",
                    }}
                    onClick={() => navigate(`/offers/user`)}
                    className={`${props.darkTheme ? "dark-theme" : ""}`}
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
                    className={`${props.darkTheme ? "dark-theme" : ""}`}
                  >
                    Log out
                  </Button>
                </>
              ) : (
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: props.darkTheme ? "#444444" : "",
                    color: props.darkTheme ? "#d8dbe0" : "",
                  }}
                  onClick={handleLogout}
                  className={`${props.darkTheme ? "dark-theme" : ""}`}
                >
                  Log in
                </Button>
              )}

              <Button
                variant="contained"
                style={{
                  backgroundColor: props.darkTheme ? "#444444" : "",
                  color: props.darkTheme ? "#d8dbe0" : "",
                }}
                onClick={handleClick}
                className={`${props.darkTheme ? "dark-theme" : ""}`}
              >
                Add an offer
              </Button>
            </>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Header;
