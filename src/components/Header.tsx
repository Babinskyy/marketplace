import { Button } from "@mui/material";
import "../App.scss";
import mpBigLogo from "../images/logo/marketplacelogo4.png";
import mpSmallLogo from "../images/logo/marketplacesmalllogo.png";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import MenuIcon from "@mui/icons-material/Menu";

type HeaderProps = {
  setOpenOfferModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = (props: HeaderProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
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

        <ul className="navigation">
          <li className="icon favorite">
            <FavoriteBorderIcon />
            <span>Favorite</span>
          </li>
          <li className="icon search">
            <SearchIcon />
            <span>Search</span>
          </li>
          <li className="icon account">
            <PersonOutlineOutlinedIcon />
            <span>Account</span>
          </li>
        </ul>
        <div>
          <Button
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </Button>
          <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
          
        }}
        anchorEl={anchorEl}
        open={open}
        // onClose={handleClose}
        TransitionComponent={Fade}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        
      >
        <MenuItem >Account</MenuItem>
        <MenuItem >Favorite</MenuItem>
        <MenuItem >Search</MenuItem>
      </Menu>
        </div>

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
