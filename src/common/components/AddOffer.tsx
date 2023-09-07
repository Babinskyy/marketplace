import {
  Box,
  Modal,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Button,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import Textarea from "@mui/joy/Textarea";
import "../../common/assets/styles/scss/main/App.scss";
import React, { useState, useEffect, FormEvent, useRef } from "react";
import { Offer, Errors, Category } from "../../common/types/Types";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

type AddOfferProps = {
  openOfferModal: boolean;
  setOpenOfferModal: React.Dispatch<React.SetStateAction<boolean>>;
  categories: Category[] | undefined;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddOffer = (props: AddOfferProps): JSX.Element => {
  const [errorMessages, setErrorMessages] = useState<Errors>({
    title: "",
    category: "",
    price: "",
    country: "",
    author: "",
    phone: "",
  });
  const [country, setCountry] = useState<string>("");
  const [offerId, setOfferId] = useState<number>();

  const [formData, setFormData] = useState<Offer>({
    id: null,
    images: [],
    title: "",
    description: "",
    price: null,
    date: "",
    author: "",
    country: "",
    phone: "",
    category: undefined,
  });

  const [errors, setErrors] = useState<Errors>({
    title: undefined,
    price: undefined,
    author: undefined,
    country: undefined,
    phone: undefined,
    category: undefined,
    images: undefined,
  });

  const inputFileRef = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();
  const handleClose = () => {
    setErrors({
      title: undefined,
      price: undefined,
      author: undefined,
      country: undefined,
      phone: undefined,
      category: undefined,
      images: undefined,
    });
    setErrorMessages({
      title: "",
      category: "",
      price: "",
      country: "",
      author: "",
      phone: "",
      images: "",
    });
    props.setOpenOfferModal(false);
  };

  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );

  const handleCategoryChange = (event: SelectChangeEvent) => {
    const selectedCategoryId = parseInt(event.target.value, 10);

    if (!isNaN(selectedCategoryId)) {
      setSelectedCategoryId(selectedCategoryId);

      const result = props.categories?.filter(
        (category) => category.id === selectedCategoryId
      );
      if (result)
        setFormData({
          ...formData,
          category: result[0],
        });
    }
  };
  const handleCountryChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value as string);
    setFormData({
      ...formData,
      country: event.target.value as string,
    });
  };

  const validate = () => {
    let result: boolean = true;

    const tmpErrors: Errors = {
      title: undefined,
      category: undefined,
      price: undefined,
      country: undefined,
      author: undefined,
      phone: undefined,
      images: undefined,
    };

    if (formData.title.trim().length === 0) {
      tmpErrors.title = "Title should not be empty!";
    } else if (formData.title.trim().length < 5) {
      tmpErrors.title = "Title should have at least 5 characters!";
    } else if (formData.title.trim().length > 25) {
      tmpErrors.title = "Title should have maximum of 25 characters!";
    }

    if (!formData.category) {
      tmpErrors.category = "Choose category of your offer!";
    }

    if (imagePreviews.every((preview) => preview.preview === "")) {
      tmpErrors.images = "Add at least 1 image!";
    }

    if (!formData.price) {
      tmpErrors.price = "Set correct price of your offer!";
    }

    if (formData.country.length === 0) {
      tmpErrors.country = "Choose a country!";
    }

    if (formData.author.trim().length === 0) {
      tmpErrors.author = "Enter your name!";
    }

    if (formData.phone.trim().length === 0) {
      tmpErrors.phone = "Enter your contact number!";
    } else if (!/^\d+$/.test(formData.phone.trim())) {
      tmpErrors.phone = "Contact phone should contain only numbers!";
    }

    setErrors(tmpErrors);

    for (const key in tmpErrors) {
      if (tmpErrors[key]) {
        result = false;
        break;
      }
    }
    setErrorMessages(tmpErrors);
    return result;
  };

  const [imagePreviews, setImagePreviews] = useState([
    { preview: "", data: "" },
    { preview: "", data: "" },
    { preview: "", data: "" },
  ]);

  const handleFileChange = (e: any, index: number) => {
    if (e.target.files[0]) {
      const img = {
        preview: URL.createObjectURL(e.target.files[0]),
        data: e.target.files[0],
      };

      const updatedImagePreviews = [...imagePreviews];
      updatedImagePreviews[index] = img;
      setImagePreviews(updatedImagePreviews);
    }
  };
  const handleClearPreview = (index: number) => {
    const updatedImagePreviews = [...imagePreviews];
    updatedImagePreviews[index] = { preview: "", data: "" };
    setImagePreviews(updatedImagePreviews);
  };
  const uploadImages = async () => {
    let imageData = new FormData();

    imagePreviews.forEach((preview, index) => {
      imageData.append(`file`, preview.data);
    });
    imageData.append("title", formData.title);
    try {
      const response = await fetch("http://localhost:8000/offers/upload", {
        method: "POST",
        body: imageData,
        credentials: "include",
      });
      if (response) {
      } else console.log("err");
    } catch (err) {
      console.error(err);
    }
  };
  const createNewOffer = async () => {
    try {
      const response = await fetch("http://localhost:8000/offers/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data.username, "data.username");
      console.log(data, "data");
      navigate(`/offer/${data.id}`);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (validate()) {
      uploadImages();
      createNewOffer();
      props.setOpenOfferModal(false);
      
      setFormData({
        id: null,
        images: [],
        title: "",
        description: "",
        price: null,
        date: "",
        author: "",
        country: "",
        phone: "",
        category: undefined,
      });
      setSelectedCategoryId(null);
      setCountry("");
      setImagePreviews([
        { preview: "", data: "" },
        { preview: "", data: "" },
        { preview: "", data: "" },
      ]);
      props.setTrigger((prev) => !prev);
    }
  };

  return (
    <div className="add-offer-container">
      <Modal
        open={props.openOfferModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-box">
          <h2>Add your offer</h2>
          <form action="" className="offer-modal-form" onSubmit={handleSubmit}>
            <TextField
              id="title"
              error={errors.title ? true : false}
              name="title"
              label="Title"
              defaultValue=""
              sx={{ width: "510px", fontSize: "25px" }}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  [e.currentTarget.name]: e.currentTarget.value,
                });
              }}
            />
            <div className="error-message mg">{errorMessages.title}</div>
            <FormControl sx={{ width: "510px" }}>
              <InputLabel id="category-label" sx={{ marginTop: "10px" }}>
                Category
              </InputLabel>
              <Select
                error={errors.category ? true : false}
                name="category"
                sx={{ marginTop: "10px" }}
                labelId="category-label"
                id="category-select"
                value={selectedCategoryId?.toString() || ""}
                label="Category"
                onChange={handleCategoryChange}
              >
                {props.categories?.map((e, i) => {
                  return (
                    <MenuItem value={e.id} key={i + 1}>
                      <span className="category-name">{e.name}</span>
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <div className="error-message mg">{errorMessages.category}</div>

            <h3 className="add-images-h3">Add images</h3>
            <div className="error-message mg">{errorMessages.images}</div>
            <div className="add-images-container">
              {imagePreviews.map((preview, index) => (
                <div key={index}>
                  <label
                    htmlFor={`file-upload${index}`}
                    style={{
                      borderRadius: "5px",
                      backgroundImage: `url(${preview.preview})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      pointerEvents: imagePreviews[index].preview
                        ? "none"
                        : "auto",
                      marginBottom: imagePreviews[index].preview
                        ? "0px"
                        : "30px",
                    }}
                    className={"add"}
                  >
                    {!imagePreviews[index].preview && (
                      <div className="add-icon">
                        <AddIcon />
                      </div>
                    )}
                  </label>

                  <input
                    ref={inputFileRef}
                    id={`file-upload${index}`}
                    type="file"
                    onChange={(e) => {
                      handleFileChange(e, index);
                    }}
                    style={{ display: "none" }}
                  />

                  {imagePreviews[index].preview && (
                    <Button
                      color="error"
                      variant="contained"
                      style={{
                        padding: "0px",
                        fontSize: "10px",
                        fontWeight: "400",
                        left: "57px",
                        marginTop: "10px",
                      }}
                      className="close-button"
                      onClick={() => {
                        handleClearPreview(index);
                        if (inputFileRef.current) {
                          inputFileRef.current.value = "";
                        }
                      }}
                    >
                      delete
                    </Button>
                  )}
                </div>
              ))}
            </div>

            <label htmlFor="description"></label>
            <TextField
              error={!!errors.price}
              name="price"
              label="Price"
              defaultValue=""
              sx={{ width: "510px" }}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  [e.currentTarget.name]: +e.currentTarget.value,
                });
              }}
            />
            <div className="error-message mg">{errorMessages.price}</div>
            <div className="details-holder">
              <Textarea
                name="description"
                color="neutral"
                minRows={6}
                placeholder="Write as many details as possible..."
                size="lg"
                variant="outlined"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    [e.currentTarget.name]: e.currentTarget.value,
                  });
                }}
              />
              <div className="author-data-holder">
                <FormControl sx={{ width: "310px" }}>
                  <InputLabel id="country-label" sx={{ marginTop: "10px" }}>
                    Country
                  </InputLabel>
                  <Select
                    error={errors.country ? true : false}
                    sx={{ marginTop: "10px" }}
                    labelId="country-label"
                    id="country-select"
                    value={country}
                    label="Country"
                    onChange={handleCountryChange}
                  >
                    <MenuItem value={"France"}>France</MenuItem>
                    <MenuItem value={"Germany"}>Germany</MenuItem>
                    <MenuItem value={"Great"}>Great Britain</MenuItem>
                    <MenuItem value={"Spain"}>Spain</MenuItem>
                    <MenuItem value={"Poland"}>Poland</MenuItem>
                    <MenuItem value={"Italy"}>Italy</MenuItem>
                    <MenuItem value={"Switzerland"}>Switzerland</MenuItem>
                    <MenuItem value={"Austria"}>Austria</MenuItem>
                    <MenuItem value={"Netherlands"}>Netherlands</MenuItem>
                  </Select>
                </FormControl>
                <div className="error-message">{errorMessages.country}</div>
                <TextField
                  error={errors.author ? true : false}
                  name="author"
                  label="Name"
                  defaultValue=""
                  sx={{ width: "310px" }}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      [e.currentTarget.name]: e.currentTarget.value,
                    });
                  }}
                />
                <div className="error-message">{errorMessages.author}</div>
                <TextField
                  error={errors.phone ? true : false}
                  name="phone"
                  label="Phone"
                  defaultValue=""
                  sx={{ width: "310px" }}
                  id="data-textfield"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      [e.currentTarget.name]: e.currentTarget.value,
                    });
                  }}
                />
                <div className="error-message">{errorMessages.phone}</div>
              </div>
            </div>
            <Button type="submit" variant="contained" className="submit-button">
              Add to Market Place
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};
export default AddOffer;
