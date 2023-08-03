import { Button } from "@mui/material";
import "../../common/assets/styles/scss/main/App.scss";
import mpBigLogo from "../../common/assets/images/logo/marketplacelogo4.png";
import mpSmallLogo from "../../common/assets//images/logo/marketplacesmalllogo.png";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import MenuIcon from "@mui/icons-material/Menu";

type HeaderProps = {
  setOpenOfferModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = (props: HeaderProps): JSX.Element => {
  const btnMenuRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <nav className="main-header">
      <ul className="main-navigation">
        <div className="logo-holder">
          <Link to="/">
            <img src={mpBigLogo} alt="logo" className="big-logo" />
            <img src={mpSmallLogo} alt="logo" className="small-logo" />
          </Link>
        </div>

        {/* <ul className="navigation">
          <li className="icon favorite">
            <FavoriteBorderIcon />
            <span>Favorite</span>
          </li> */}
          {/* <li className="icon search">
            <SearchIcon />
            <span>Search</span>
          </li> */}
          {/* <li className="icon account">
            <PersonOutlineOutlinedIcon />
            <span>Account</span>
          </li>
        </ul> */}
        {/* <div>
          <Button
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            ref={btnMenuRef}
          >
            <MenuIcon />
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={btnMenuRef.current}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={handleClose}>Account</MenuItem>
            <MenuItem onClick={handleClose}>Favorite</MenuItem>
          </Menu>
        </div> */}

        <Button
          variant="contained"
          onClick={() => props.setOpenOfferModal(true)}
        >
          Add an offer
        </Button>
      </ul>
    </nav>
  );
};

export default Header;
