import "../../common/assets/styles/scss/App.scss";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="social-icon">
        <li className="social-icon__item">
          <a className="social-icon__link">
            <FacebookOutlinedIcon sx={{ fontSize: "50px" }} />
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link">
            <TwitterIcon sx={{ fontSize: "50px" }} />
          </a>
        </li>
        <li className="social-icon__item">
          <a
            className="social-icon__link"
            target="_blank"
            href="https://www.linkedin.com/in/jan-babi%C5%84ski-880469229/"
          >
            <LinkedInIcon sx={{ fontSize: "50px" }} />
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link">
            <InstagramIcon sx={{ fontSize: "50px" }} />
          </a>
        </li>
      </ul>
      {/* <ul className="menu">
        <li className="menu__item">
          <a className="menu__link" href="#">
            Home
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#">
            About
          </a>
        </li>

        <li className="menu__item">
          <a className="menu__link" href="#">
            Team
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#">
            Contact
          </a>
        </li>
      </ul> */}
      <p className="copyright">&copy;2023 John Babinsky | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
