import "../App.scss";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import avatar from "../images/others/avatar-icon.png";
import { useState } from "react";
import { offersList } from "../mockData/offersList";
import { useParams } from "react-router-dom";
import { Button } from "@mui/joy";
import PhoneIcon from '@mui/icons-material/Phone';


const OfferDetails = () => {
  const [showPhone, setShowPhone] = useState<boolean>(false);
  const [slideCount, setSlideCount] = useState<number>(0);

  const { id } = useParams<{ id: string }>();

  const offer = offersList.find((o) => o.id?.toString() === id);

  if (!offer) {
    return <p>Loading...</p>;
  }

  return (
    <div className="main-offer-view-container">
      <div className="sub-offer-view-container">
        <h1 className="title">{offer?.title}</h1>
        <div className="image-slider">
          <div className="arrow left">
            <ArrowBackIosNewIcon
              sx={{ fontSize: "50px" }}
              onClick={() => {
                if (slideCount < 0) {
                  setSlideCount(slideCount + 100);
                }
              }}
            />
          </div>
          <div className="img-container-showed">
            <div
              className="img-contaier-slide"
              style={{ transform: `translate(${slideCount}%)` }}
            >
              {offer?.images.map((e) => {
                return <img src={e} alt="offer-image" />;
              })}
            </div>
          </div>
          <div className="arrow right">
            <ArrowForwardIosIcon
              sx={{ fontSize: "50px" }}
              onClick={() => {
                if (slideCount > offer.images.length * -100 + 100) {
                  setSlideCount(slideCount - 100);
                }
              }}
            />
          </div>
        </div>

        <div className="price-container">
          <p>{offer?.price} $</p>
        </div>
        <div className="details-wrapper">
          <div className="details-container">
            <h1 className="title">{offer?.title}</h1>
            <p className="description">{offer?.description}</p>
          </div>
          <div className="author-data-container">
            <div className="avatar-name-container">
            <img src={avatar} alt="avatar" />
            <p className="name">{offer?.author}</p>
            </div>
            <div className="phone-data">
            {showPhone ? (
              <p className="number"><span>{offer?.phone}</span> <PhoneIcon sx={{fontSize: "35px", marginLeft: "6px", transform: "translate(0, -2px)"}}/></p>
            ) : (
              <>
              <p className="show" >
                <span>XXX XXX XXX</span> <PhoneIcon sx={{fontSize: "35px", marginLeft: "6px", transform: "translate(0, -2px)"}}/>
              </p>
              <Button onClick={() => setShowPhone(true)}>Show contact number</Button>
              </>
              
            )}
            </div>
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <iframe
            width="100%"
            height="500px"
            style={{    borderWidth: "0"}}
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default OfferDetails;