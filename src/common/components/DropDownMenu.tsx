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
  currentInputValueSet,
  inputValueSet,
} from "../../store/features/FiltersSlice";
import { useAuth } from "../functions/useAuth";

type MenuProps = {
  isUserLogged: boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  darkTheme: boolean;
  setOpenOfferModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const DropDownMenu = (props: MenuProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const checkIsLogged = useAuth();
  const handleLogout = async () => {
    const logout = async () => {
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
    await checkIsLogged();
    navigate("/auth");
  };

  const handleModeChange = async () => {
    const newTheme = !props.darkTheme;
    props.setDarkTheme(newTheme);
    localStorage.setItem("themePreference", newTheme ? "dark" : "light");
  };

  const clearFilters = () => {
    dispatch(currentInputValueSet(""));
    dispatch(categoryFilterValueSet(""));
    dispatch(inputValueSet(""));
  };

  const handleModalOpen = async () => {
    const result = await checkIsLogged();
    if (result?.success) {
      props.setOpenOfferModal(true);
    } else {
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
