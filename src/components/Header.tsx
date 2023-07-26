import { Button } from "@mui/material";
import "../App.scss";
import mplogo from "../images/marketplacelogo2.png";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";

const Header = (): JSX.Element => {
  return (
    <nav className="main-header">
      <ul className="main-navigation">
        <div className="logo-holder">
          <Link to="/">
            <img src={mplogo} alt="logo" className="logo" />
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
            <span>Your Account</span>
          </li>
        </ul>
        <Button variant="contained">Add an offer</Button>
      </ul>
    </nav>
  );
};

export default Header;
