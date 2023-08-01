import { useMemo } from "react";
import "../../../common/assets/styles/scss/App.scss";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { offersList } from "../../../common/mockData/offersList";
import { Route, useNavigate } from "react-router-dom";
import { Offer } from "../../../common/types/Types";

type OffersProps = {
  inputValue?: string;
};

const Offers = (props: OffersProps): JSX.Element => {
  const navigate = useNavigate();

  // const filteredItems = useMemo(() => {
  //   return offersList.filter((offer) => {
  //     const inputValue = props.inputValue || "";
  //     return offer.title.toLowerCase().includes(inputValue.toLocaleLowerCase());
  //   });
  // }, [props.inputValue, offersList]);
  
  const filteredItems = 
   offersList.filter((offer) => {
      const inputValue = props.inputValue || "";
      return offer.title.toLowerCase().includes(inputValue.toLocaleLowerCase());
    });
 

  console.log(filteredItems);

  return (
    <div className="offers-wrapper">
      <div className="offers-wrapper-2">
        <h1>Offers</h1>
        <div className="offers-container">
          {filteredItems.map((e, i) => {
            return (
              <div
                className="offer-item"
                key={i}
                onClick={() => {
                  navigate(`/offer/${e.id}`);
                  window.scrollTo(0, 0);
                }}
              >
                {e.images.length > 0 && <img src={e.images[0]} alt="" />}

                <h2 className="offer-title">{e.title}</h2>
                <h3 className="offer-price">{e.price} $</h3>
                <p className="offer-phone">
                  <span>+ 00 {e.phone}</span>
                  <LocalPhoneOutlinedIcon />
                </p>
                <p className="offer-date">{e.date}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Offers;
