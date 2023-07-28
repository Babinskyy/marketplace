import { useEffect, useRef } from "react";
import "../App.scss";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { offersList } from "../mockData/offersList";

const Offers = (): JSX.Element => {


  for (let i = 0; i < 9; i++) {
    let element:string = `../images/offerImages/offerImages${i + 1}`;
    for (let o = 1; o <= 3; o++) {
      offersList[i].images.push(element + `/image${o}.jpg`);
    }
  }

  return (
    <div className="offers-wrapper">
      <div className="offers-wrapper-2">
        <h1>Offers</h1>
        <div className="offers-container">
          {offersList.map((e, i) => {
            return (
              <div className="offer-item">
                {e.images.length > 0 && (
                  // <img
                  //   src={require(`../images/offerImages/offerImages${
                  //     i + 1
                  //   }/image1.jpg`)}
                  //   alt=""
                  // />
                  <img
                    src={e.images[0]}
                    alt=""
                  />
                  
                )}

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
