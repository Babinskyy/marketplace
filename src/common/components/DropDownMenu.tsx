import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../config/env-variable";
import { useAppDispatch } from "../../store/store";
import {
  categoryFilterValueSet,
  countryFilterValueSet,
  currentInputValueSet,
  inputValueSet,
} from "../../store/features/FiltersSlice";
import { useAuth } from "../functions/useAuth";

type MenuProps = {
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  darkTheme: boolean;
  setOpenOfferModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const DropDownMenu = (props: MenuProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const auth = useAuth();
  const handleLogout = async () => {
    const logout = async () => {
      localStorage.removeItem("user");
      try {
        const response = await fetch(`${BASE_URL}users/logout`, {
          method: "POST",
          credentials: "include",
        });
        console.log(response.status);
      } catch (err) {
        console.error(err);
      }
    };
    logout();
    navigate("/auth");
  };

  const clearFilters = () => {
    dispatch(currentInputValueSet(""));
    dispatch(categoryFilterValueSet(""));
    dispatch(countryFilterValueSet(""));
    dispatch(inputValueSet(""));
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

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            variant="contained"
            {...bindTrigger(popupState)}
            style={{
              height: "50px",
              width: "120px",
              backgroundColor: props.darkTheme ? "rgb(68, 68, 68)" : "#fff",
              color: props.darkTheme ? "#eee" : "#3586ff",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Menu
          </Button>

          <Menu {...bindMenu(popupState)}>
            <MenuItem
              onClick={() => {
                popupState.close();
                navigate("/");
                clearFilters();
              }}
            >
              Home
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/offers/all");
                popupState.close();
                clearFilters();
              }}
            >
              All offers
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/offers/user");
                popupState.close();
                clearFilters();
              }}
            >
              My offers
            </MenuItem>
            <MenuItem
              onClick={() => {
                popupState.close();
                handleModalOpen();
              }}
            >
              Add an offer
            </MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
};
export default DropDownMenu;
