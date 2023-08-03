import "../../../common/assets/styles/scss/main/App.scss";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import avatar from "../../../common/assets/images/others/avatar-icon.png";
import { useState } from "react";
import { offersList } from "../../../common/mockData/offersList";
import { useParams } from "react-router-dom";
import { Button } from "@mui/joy";
import PhoneIcon from "@mui/icons-material/Phone";
import Carousel from "./Carousel";

const OfferDetails = () => {
  const [showPhone, setShowPhone] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  const offer = offersList.find((o) => o.id?.toString() === id);

  if (!offer) {
    return <p>Loading...</p>;
  }
  return (
    <div className="main-offer-view-container">
      <div className="sub-offer-view-container">
        <h1 className="title1">{offer?.title}</h1>
        <Carousel images={offer.images} />
        <div className="details-wrapper">
          <div className="details-container">
            <div className="title-price">
              <h1 className="title2">{offer?.title}</h1>
              <p className="price-container">{offer?.price} $</p>
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
