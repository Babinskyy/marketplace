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
  };

  let OffersList: Offer[] = [
    {
      images: [
        "https://images.wheels.ca/wp-content/uploads/2018/10/Lexus-LS-500h-front.jpg",
          "https://www.hdcarwallpapers.com/walls/2018_lexus_ls_500_awd_4k-HD.jpg",
        "https://images.hgmsites.net/hug/2018-lexus-ls_100623505_h.jpg",
        "https://st.automobilemag.com/uploads/sites/11/2017/03/2018-Lexus-LS-500h-Interior.jpg",
      ],
      title: "Used 2018 Lexus LS",
      description: "Used 2018 Lexus LS",
      price: 70000,
      date: "16-07-2023",
      author: "John",
      place: "USA",
      phone: "888 900 900",
    },
    {
      images: [
        "https://images.wheels.ca/wp-content/uploads/2018/10/Lexus-LS-500h-front.jpg",
          "https://www.hdcarwallpapers.com/walls/2018_lexus_ls_500_awd_4k-HD.jpg",
        "https://images.hgmsites.net/hug/2018-lexus-ls_100623505_h.jpg",
        "https://st.automobilemag.com/uploads/sites/11/2017/03/2018-Lexus-LS-500h-Interior.jpg",
      ],
      title: "Used 2018 Lexus LS",
      description: "Used 2018 Lexus LS",
      price: 70000,
      date: "16-07-2023",
      author: "John",
      place: "USA",
      phone: "888 900 900",
    },
    {
      images: [
        "https://images.wheels.ca/wp-content/uploads/2018/10/Lexus-LS-500h-front.jpg",
          "https://www.hdcarwallpapers.com/walls/2018_lexus_ls_500_awd_4k-HD.jpg",
        "https://images.hgmsites.net/hug/2018-lexus-ls_100623505_h.jpg",
        "https://st.automobilemag.com/uploads/sites/11/2017/03/2018-Lexus-LS-500h-Interior.jpg",
      ],
      title: "Used 2018 Lexus LS",
      description: "Used 2018 Lexus LS",
      price: 70000,
      date: "16-07-2023",
      author: "John",
      place: "USA",
      phone: "888 900 900",
    },
    {
      images: [
        "https://images.wheels.ca/wp-content/uploads/2018/10/Lexus-LS-500h-front.jpg",
          "https://www.hdcarwallpapers.com/walls/2018_lexus_ls_500_awd_4k-HD.jpg",
        "https://images.hgmsites.net/hug/2018-lexus-ls_100623505_h.jpg",
        "https://st.automobilemag.com/uploads/sites/11/2017/03/2018-Lexus-LS-500h-Interior.jpg",
      ],
      title: "Used 2018 Lexus LS",
      description: "Used 2018 Lexus LS",
      price: 70000,
      date: "16-07-2023",
      author: "John",
      place: "USA",
      phone: "888 900 900",
    },
    {
        images: [
          "https://images.wheels.ca/wp-content/uploads/2018/10/Lexus-LS-500h-front.jpg",
          "https://www.hdcarwallpapers.com/walls/2018_lexus_ls_500_awd_4k-HD.jpg",
          "https://images.hgmsites.net/hug/2018-lexus-ls_100623505_h.jpg",
          "https://st.automobilemag.com/uploads/sites/11/2017/03/2018-Lexus-LS-500h-Interior.jpg",
        ],
        title: "Used 2018 Lexus LS",
        description: "Used 2018 Lexus LS",
        price: 70000,
        date: "16-07-2023",
        author: "John",
        place: "USA",
        phone: "888 900 900",
      },
      {
        images: [
          "https://images.wheels.ca/wp-content/uploads/2018/10/Lexus-LS-500h-front.jpg",
          "https://www.hdcarwallpapers.com/walls/2018_lexus_ls_500_awd_4k-HD.jpg",
          "https://images.hgmsites.net/hug/2018-lexus-ls_100623505_h.jpg",
          "https://st.automobilemag.com/uploads/sites/11/2017/03/2018-Lexus-LS-500h-Interior.jpg",
        ],
        title: "Used 2018 Lexus LS",
        description: "Used 2018 Lexus LS",
        price: 70000,
        date: "16-07-2023",
        author: "John",
        place: "USA",
        phone: "888 900 900",
      },
      {
        images: [
          "https://images.wheels.ca/wp-content/uploads/2018/10/Lexus-LS-500h-front.jpg",
          "https://www.hdcarwallpapers.com/walls/2018_lexus_ls_500_awd_4k-HD.jpg",
          "https://images.hgmsites.net/hug/2018-lexus-ls_100623505_h.jpg",
          "https://st.automobilemag.com/uploads/sites/11/2017/03/2018-Lexus-LS-500h-Interior.jpg",
        ],
        title: "Used 2018 Lexus LS",
        description: "Used 2018 Lexus LS",
        price: 70000,
        date: "16-07-2023",
        author: "John",
        place: "USA",
        phone: "888 900 900",
      },
      {
        images: [
          "https://images.wheels.ca/wp-content/uploads/2018/10/Lexus-LS-500h-front.jpg",
          "https://www.hdcarwallpapers.com/walls/2018_lexus_ls_500_awd_4k-HD.jpg",
          "https://images.hgmsites.net/hug/2018-lexus-ls_100623505_h.jpg",
          "https://st.automobilemag.com/uploads/sites/11/2017/03/2018-Lexus-LS-500h-Interior.jpg",
        ],
        title: "Used 2018 Lexus LS",
        description: "Used 2018 Lexus LS",
        price: 70000,
        date: "16-07-2023",
        author: "John",
        place: "USA",
        phone: "888 900 900",
      },
      {
        images: [
            "https://images.wheels.ca/wp-content/uploads/2018/10/Lexus-LS-500h-front.jpg",
          "https://www.hdcarwallpapers.com/walls/2018_lexus_ls_500_awd_4k-HD.jpg",
          "https://images.hgmsites.net/hug/2018-lexus-ls_100623505_h.jpg",
          "https://st.automobilemag.com/uploads/sites/11/2017/03/2018-Lexus-LS-500h-Interior.jpg",
        ],
        title: "Used 2018 Lexus LS",
        description: "Used 2018 Lexus LS",
        price: 70000,
        date: "16-07-2023",
        author: "John",
        place: "USA",
        phone: "888 900 900",
      },
      {
        images: [
            "https://images.wheels.ca/wp-content/uploads/2018/10/Lexus-LS-500h-front.jpg",
          "https://www.hdcarwallpapers.com/walls/2018_lexus_ls_500_awd_4k-HD.jpg",
          "https://images.hgmsites.net/hug/2018-lexus-ls_100623505_h.jpg",
          "https://st.automobilemag.com/uploads/sites/11/2017/03/2018-Lexus-LS-500h-Interior.jpg",
        ],
        title: "Used 2018 Lexus LS",
        description: "Used 2018 Lexus LS",
        price: 70000,
        date: "16-07-2023",
        author: "John",
        place: "USA",
        phone: "888 900 900",
      },
      {
        images: [
            "https://images.wheels.ca/wp-content/uploads/2018/10/Lexus-LS-500h-front.jpg",
          "https://www.hdcarwallpapers.com/walls/2018_lexus_ls_500_awd_4k-HD.jpg",
          "https://images.hgmsites.net/hug/2018-lexus-ls_100623505_h.jpg",
          "https://st.automobilemag.com/uploads/sites/11/2017/03/2018-Lexus-LS-500h-Interior.jpg",
        ],
        title: "Used 2018 Lexus LS",
        description: "Used 2018 Lexus LS",
        price: 70000,
        date: "16-07-2023",
        author: "John",
        place: "USA",
        phone: "888 900 900",
      },
      {
        images: [
            "https://images.wheels.ca/wp-content/uploads/2018/10/Lexus-LS-500h-front.jpg",
          "https://www.hdcarwallpapers.com/walls/2018_lexus_ls_500_awd_4k-HD.jpg",
          "https://images.hgmsites.net/hug/2018-lexus-ls_100623505_h.jpg",
          "https://st.automobilemag.com/uploads/sites/11/2017/03/2018-Lexus-LS-500h-Interior.jpg",
        ],
        title: "Used 2018 Lexus LS",
        description: "Used 2018 Lexus LS",
        price: 70000,
        date: "16-07-2023",
        author: "John",
        place: "USA",
        phone: "888 900 900",
      },
  ];

  return (
    <div className="offers-wrapper">
      <div className="offers-wrapper-2">
        <h1>Offers</h1>
        <div className="offers-container">
          {OffersList.map((e) => {
            return (
              <div className="offer-item">
                <img src={`${e.images[0]}`} alt="main-image" />
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
