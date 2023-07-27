import { Button } from "@mui/material";
import "../App.scss";
import mpBigLogo from "../images/marketplacelogo4.png";
import mpSmallLogo from "../images/marketplacesmalllogo.png";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import MenuIcon from '@mui/icons-material/Menu';


const Header = (): JSX.Element => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon/>
      </Button>
      {/* <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
          
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
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
        <MenuItem onClick={handleClose}>Account</MenuItem>
        <MenuItem onClick={handleClose}>Favorite</MenuItem>
        <MenuItem onClick={handleClose}>Search</MenuItem>
      </Menu> */}
    </div>
        
        <Button variant="contained">Add an offer</Button>
      </ul>
    </nav>
  );
};

export default Header;
