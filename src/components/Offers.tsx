import { useEffect } from "react";
import "../App.scss";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

const Offers = (): JSX.Element => {
  type Offer = {
    images: string[];
    title: string;
    description: string;
    price: number;
    date: string;
    author: string;
    place: string;
    phone: string;
    category: string;
  };

  let OffersList: Offer[] = [
    {
      images: [],
      title: "Red Giant Bike",
      description: "Red Giant Bike",
      price: 2000,
      date: "16-07-2023",
      author: "John",
      place: "USA",
      phone: "888 900 900",
      category: "Cars",
    },
    {
      images: [],
      title: "Luxury House",
      description: "Luxury House",
      price: 70000000,
      date: "16-07-2023",
      author: "John",
      place: "USA",
      phone: "888 900 900",
      category: "Cars",
    },
    {
      images: [],
      title: "Used 2018 Lexus LS",
      description: "Used 2018 Lexus LS",
      price: 65000,
      date: "16-07-2023",
      author: "John",
      place: "USA",
      phone: "888 900 900",
      category: "Cars",
    },
    {
      images: [],
      title: "Mercedes S class",
      description: "Mercedes S class",
      price: 70000,
      date: "16-07-2023",
      author: "John",
      place: "USA",
      phone: "888 900 900",
      category: "Cars",
    },
    {
      images: [],
      title: "iPhone 14 Pro mini",
      description: "iPhone 14 Pro mini",
      price: 1000,
      date: "16-07-2023",
      author: "John",
      place: "USA",
      phone: "888 900 900",
      category: "Cars",
    },
    {
      images: [],
      title: "Macbook air 2 pro",
      description: "Macbook air 2 pro",
      price: 2000,
      date: "16-07-2023",
      author: "John",
      place: "USA",
      phone: "888 900 900",
      category: "Cars",
    },
    {
      images: [],
      title: "Handmade chess set",
      description: "Handmade chess set",
      price: 450,
      date: "16-07-2023",
      author: "John",
      place: "USA",
      phone: "888 900 900",
      category: "Cars",
    },
    {
      images: [],
      title: "Gibson Les Paul",
      description: "Gibson Les Paul",
      price: 2000,
      date: "16-07-2023",
      author: "John",
      place: "USA",
      phone: "888 900 900",
      category: "Cars",
    },
    {
      images: [],
      title: "Running shoes",
      description: "Running shoes",
      price: 200,
      date: "16-07-2023",
      author: "John",
      place: "USA",
      phone: "888 900 900",
      category: "Cars",
    },
    {
      images: [],
      title: "Luxury apartment",
      description: "Luxury apartment",
      price: 400,
      date: "16-07-2023",
      author: "John",
      place: "USA",
      phone: "888 900 900",
      category: "Cars",
    },
    {
      images: [],
      title: "Used Skates",
      description: "Used Skates",
      price: 200,
      date: "16-07-2023",
      author: "John",
      place: "USA",
      phone: "888 900 900",
      category: "Cars",
    },
    {
      images: [],
      title: "Antic chair",
      description: "Antic chair",
      price: 3000,
      date: "16-07-2023",
      author: "John",
      place: "USA",
      phone: "888 900 900",
      category: "Cars",
    },
  ];

  let arr: string[][] = [];

  for (let i = 0; i < 12; i++) {
    let element = `../images/offerImages/offerImages${i + 1}`;
    for (let o = 1; o <= 3; o++) {
      OffersList[i].images.push(element + `/image${o}.jpg`);
    }
  }

  return (
    <div className="offers-wrapper">
      <div className="offers-wrapper-2">
        <h1>Offers</h1>
        <div className="offers-container">
          {OffersList.map((e, i) => {
            {
              // console.log(e.images);
              console.log(OffersList[i].images[0]);
              console.log(e.images[0]);
            }
            return (
              <div className="offer-item">
                {e.images.length > 0 && (
                  <img
                    src={require(`../images/offerImages/offerImages${i+1}/image1.jpg`)}
                    alt=""
                  />
                  // <img src={require(e.images[0])} alt="" />
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
