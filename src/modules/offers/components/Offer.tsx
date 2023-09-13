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
import { Input } from "@mui/material";
import { useForm } from "react-hook-form";

type OfferDetailsType = {
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  darkTheme: boolean;
};

const OfferDetails = (props: OfferDetailsType) => {
  const [showPhone, setShowPhone] = useState<boolean>(false);
  const [offer, setOffer] = useState<Offer>();
  const [editOffer, setEditOffer] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [trigger, setTrigger] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();
  useEffect(() => {
    const fetchOffers = async () => {
      const url = "https://marketplaceserver-2777642eddf2.herokuapp.com/"
      // const url = "http://localhost:8000/"
      try {
        const response = await fetch(`${url}offers`, {
          credentials: "include",
        });
        const data = await response.json();
        if (data.error) {
          props.setIsLogged(false);
          navigate("/auth");
        }
        const offer = data.offers.find((o: Offer) => o.id?.toString() === id);
        props.setIsLogged(true);
        setOffer(offer);
        setUsername(data.username);
      } catch (err) {
        console.error(err);
      }
    };

    fetchOffers();
  }, [trigger]);

  const handleOfferDelete = () => {
    if (window.confirm("Are you sure?")) {
      const deleteOffer = async () => {
        const url = "https://marketplaceserver-2777642eddf2.herokuapp.com/"
      // const url = "http://localhost:8000/"
        try {
          const response = await fetch(
            `${url}offers/delete/${id}`,
            {
              method: "DELETE",
              credentials: "include",
            }
          );
          const data = await response.json();
          if (data.error) {
            props.setIsLogged(false);
            navigate("/auth");
          } else {
            navigate("/");
          }
        } catch (err) {
          console.error(err);
        }
      };

      deleteOffer();
    } else {
      console.log("Deleting canceled");
    }
  };
  const isAuthorLogged = () => {
    return username === offer?.author;
  };
  const onSubmit = handleSubmit((values) => {
    setEditOffer(false);
    const updateOffer = async () => {
      const url = "https://marketplaceserver-2777642eddf2.herokuapp.com/"
      // const url = "http://localhost:8000/"
      try {
        const response = await fetch(
          `${url}offers/update/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(values),
          }
        );
        const data = await response.json();
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };

    updateOffer();
    reset();
    setTrigger((prev) => !prev);
  });
  return (
    <div
      className={`main-offer-view-container ${props.darkTheme && "dark-theme"}`}
    >
      <div
        className={`sub-offer-view-container ${
          props.darkTheme && "dark-theme"
        }`}
      >
        <form onSubmit={onSubmit}>
          {isAuthorLogged() && (
            <div className="buttons-panel">
              {editOffer ? (
                <>
                  <Button
                    color="warning"
                    onClick={() => {
                      setEditOffer(false);
                      reset();
                    }}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">Confirm</Button>
                </>
              ) : (
                <>
                  <Button
                    className="edit-button"
                    color="warning"
                    onClick={() => setEditOffer(true)}
                  >
                    Edit
                  </Button>
                  <Button
                    className="delete-button"
                    color="danger"
                    onClick={handleOfferDelete}
                  >
                    Delete
                  </Button>
                </>
              )}
            </div>
          )}

          {editOffer ? (
            <div className={`h1-input-container`}>
              <input
                type="text"
                id="title1"
                className={`title1-input ${props.darkTheme && "dark-theme"}`}
                defaultValue={offer?.title}
                {...register("title1", { required: true })}
              ></input>
              <div className="error-container">
                {errors.title1 && <p className="error">Enter title.</p>}
              </div>
            </div>
          ) : (
            <h1 className={`title1 ${props.darkTheme && "dark-theme"}`}>
              {offer?.title}
            </h1>
          )}

          {offer && (
            <Carousel images={offer.images} darkTheme={props.darkTheme} />
          )}

          <div className="details-wrapper">
            <div className="details-container">
              <div className="title-price">
                {/* {editOffer ? (
                <div className={`title2-input-container`}>
                  <input
                  type="text"
                  id="title2"
                    className={`title2-input ${
                      props.darkTheme && "dark-theme"
                    }`}
                    defaultValue={offer?.title}
                    {...register("title2", { required: true })}
                  ></input>
                </div>
              ) : ( */}
                <h1 className={`title2 ${props.darkTheme && "dark-theme"}`}>
                  {offer?.title}
                </h1>
                {/* )} */}

                {editOffer && offer?.price ? (
                  <div className={`price-input-container`}>
                    <input
                      type="number"
                      id="price"
                      className={`price-input ${
                        props.darkTheme && "dark-theme"
                      }`}
                      defaultValue={offer?.price}
                      {...register("price", { required: true })}
                    ></input>
                    <span>$</span>
                    <div className="error-container error-price">
                      {errors.price && <p className="error">Enter price.</p>}
                    </div>
                  </div>
                ) : (
                  <p
                    className={`price-container ${
                      props.darkTheme && "dark-theme"
                    }`}
                  >
                    {offer?.price} $
                  </p>
                )}
              </div>
              {editOffer ? (
                <>
                  <textarea
                    rows={8}
                    id="description"
                    className={`description  ${
                      props.darkTheme && "dark-theme"
                    }`}
                    defaultValue={offer?.description}
                    {...register("description", { required: true })}
                  />{" "}
                  <div className="error-container">
                    {errors.description && (
                      <p className="error">Enter description.</p>
                    )}
                  </div>
                </>
              ) : (
                <p className="description">{offer?.description}</p>
              )}
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
                  style={{
                    borderWidth: "0",
                    margin: "25px 0",
                    borderRadius: "10px",
                  }}
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Ireland+()&amp;t=&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OfferDetails;
