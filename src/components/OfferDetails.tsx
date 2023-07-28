import "../App.scss";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import avatar from "../images/others/avatar-icon.png";
import { useState } from "react";
import { offersList } from "../mockData/offersList";

const OfferDetails = () => {
  const [showPhone, setShowPhone] = useState<boolean>(false);
  const [slideCount, setSlideCount] = useState<number>(0);

  return (
    <div className="main-offer-view-container">
      <div className="sub-offer-view-container">
        <h1 className="title">Title</h1>
        <div className="image-slider">
          <div className="arrow left">
            <ArrowBackIosNewIcon
              sx={{ fontSize: "50px" }}
              onClick={() => {
                if (slideCount > offersList[0].images.length * -100 + 100) {
                  setSlideCount(slideCount - 100);
                }
              }}
            />
          </div>
          <div className="img-container-showed">
            <div
              className="img-contaier-slide"
              style={{ transform: `translate(${slideCount}%)` }}
            >
              {offersList[0].images.map((e) => {
                return <img src={e} alt="offer-image" />;
              })}
            </div>
          </div>
          <div className="arrow right">
            <ArrowForwardIosIcon
              sx={{ fontSize: "50px" }}
              onClick={() => {
               if(slideCount < 0)
                    setSlideCount(slideCount + 100);
                
              }}
            />
          </div>
        </div>

        <div className="price-container">
          <p>1500 $</p>
        </div>
        <div className="details-wrapper">
          <div className="details-container">
            <h1 className="title">Title</h1>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              itaque sequi consequuntur saepe assumenda quidem blanditiis, nobis
              ad quos quisquam ab nostrum possimus sunt non libero molestias
              fuga totam rerum. Aliquam ipsam ut nesciunt, non mollitia odio
              minus repellat blanditiis.
            </p>
          </div>
          <div className="author-data-container">
            <img src={avatar} alt="avatar" />
            <p className="name">Grzegorz</p>
            {showPhone ? (
              <p className="number">800 900 800</p>
            ) : (
              <p className="show" onClick={() => setShowPhone(true)}>
                Show contact number
              </p>
            )}
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <iframe
            width="100%"
            height="500px"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default OfferDetails;
