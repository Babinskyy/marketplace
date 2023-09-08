import "../../../common/assets/styles/scss/main/App.scss";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import avatar from "../../../common/assets/images/others/avatar-icon.png";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/joy";
import PhoneIcon from "@mui/icons-material/Phone";
import Carousel from "./Carousel";
import { Offer } from "../../../common/types/Types";
import Loader from "../../../common/components/Loader";

type OfferDetailsType = {
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  darkTheme: boolean;
};

const OfferDetails = (props: OfferDetailsType) => {
  const [showPhone, setShowPhone] = useState<boolean>(false);
  const [offer, setOffer] = useState<Offer>();

  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/offers", {
          credentials: "include",
        });
        const data = await response.json();
        if (data.error) {
          props.setIsLogged(false);
          navigate("/auth");
        }
        const offer = data.find((o: Offer) => o.id?.toString() === id);
        props.setIsLogged(true);
        setOffer(offer);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  if (!offer) {
    return (
      <div className="loader-container">
        <Loader />
      </div>
    );
  }
  return (
    <div
      className={`main-offer-view-container ${props.darkTheme && "dark-theme"}`}
    >
      <div
        className={`sub-offer-view-container ${
          props.darkTheme && "dark-theme"
        }`}
      >
        <h1 className={`title1 ${props.darkTheme && "dark-theme"}`}>
          {offer?.title}
        </h1>
        <Carousel images={offer.images} darkTheme={props.darkTheme}/>
        <div className="details-wrapper">
          <div className="details-container">
            <div className="title-price">
              <h1 className={`title2 ${props.darkTheme && "dark-theme"}`}>
                {offer?.title}
              </h1>
              <p
                className={`price-container ${props.darkTheme && "dark-theme"}`}
              >
                {offer?.price} $
              </p>
            </div>
            <p className="description">{offer?.description}</p>
          </div>
          <div className="author-data-container">
            <div className="avatar-name-container">
              <img src={avatar} alt="avatar" />
              <p className="name">{offer?.author}</p>
            </div>
            <div className="phone-data">
              {showPhone ? (
                <p className="number">
                  <span>{offer?.phone}</span>{" "}
                  <PhoneIcon
                    sx={{
                      fontSize: "35px",
                      marginLeft: "6px",
                      transform: "translate(0, -2px)",
                    }}
                  />
                </p>
              ) : (
                <div className="number-button-container">
                  <p className="show">
                    <span>XXX XXX XXX</span>{" "}
                    <PhoneIcon
                      sx={{
                        fontSize: "25px",
                        marginLeft: "6px",
                        transform: "translate(0, -2px)",
                      }}
                    />
                  </p>
                  <Button onClick={() => setShowPhone(true)}>
                    Show contact number
                  </Button>
                </div>
              )}
            </div>
            <div style={{ width: "100%" }} className="map-container">
              <iframe
                width="300px"
                height="300"
                style={{ borderWidth: "0", margin: "25px 0" }}
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Ireland+()&amp;t=&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferDetails;
