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
import React, { useState, useEffect, FormEvent } from "react";
import { categoriesList } from "../../common/mockData/categoriesList";
import { offersList } from "../../common/mockData/offersList";
import { Offer, Errors } from "../../common/types/Types";
import { useNavigate } from "react-router-dom";
import Dropzone from "react-dropzone";

const boxStyle = {
  // position: "absolute" as "absolute",
  // top: "50%",
  // left: "50%",
  // transform: "translate(-50%, -50%)",
  // width: 800,
  // bgcolor: "background.paper",
  // border: "1px solid #000",
  // borderRadius: "15px",
  // boxShadow: 24,
  // p: 2,
};

type AddOfferProps = {
  openOfferModal: boolean;
  setOpenOfferModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddOffer = (props: AddOfferProps): JSX.Element => {
  const [category, setCategory] = useState<string>("");
  const [errorMessages, setErrorMessages] = useState<Errors>({
    title: "",
    category: "",
    price: "",
    country: "",
    author: "",
    phone: "",
  });
  const [country, setCountry] = useState<string>("");
  const [currentOfferList, setCurrentOfferList] = useState<Offer[]>();
  const [formData, setFormData] = useState<Offer>({
    id: null,
    images: [
      "https://i.postimg.cc/XJVHJXTY/image1.jpg",
      "https://i.postimg.cc/mkkmYJZx/image2.jpg",
      "https://i.postimg.cc/Y08hHDQS/image.png",
    ],
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
  });

  const [files, setFiles] = useState<any[]>([]);
  const navigate = useNavigate();
  const handleClose = () => {
    setErrors({
      title: undefined,
      price: undefined,
      author: undefined,
      country: undefined,
      phone: undefined,
      category: undefined,
    });
    setErrorMessages({
      title: "",
      category: "",
      price: "",
      country: "",
      author: "",
      phone: "",
    });
    props.setOpenOfferModal(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/offers");
        const data = await response.json();
        setCurrentOfferList(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
    setFormData({
      ...formData,
      // category: event.target.value as string,
    });
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
    };

    if (formData.title.trim().length === 0) {
      tmpErrors.title = "Title should not be empty!";
    } else if (formData.title.trim().length < 5) {
      tmpErrors.title = "Title should have at least 5 characters!";
    } else if (formData.title.trim().length > 25) {
      tmpErrors.title = "Title should have maximum of 25 characters!";
    }

    if (formData.category?.name.length === 0) {
      tmpErrors.category = "Choose category of your offer!";
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

  const handleOnDrop = (files: any, rejectedFiles: any) => {
    files.length > 0 && setFiles((prev: any) => [...prev, files]);

    rejectedFiles.length > 0 &&
      console.log(
        "error code:",
        rejectedFiles[0].errors[0].code,
        "reason:",
        rejectedFiles[0].errors[0].message
      );
  };

  const createOffer = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    currentOfferList?.unshift({
      ...formData,
      id: currentOfferList.length + 1,
      date: dd + "-" + mm + "-" + yyyy,
    });
    props.setOpenOfferModal(false);
    navigate("/");
    window.scroll({
      top: document.body.scrollTop + 500,
      left: 0,
      behavior: "smooth",
    });
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
    setCategory("");
    setCountry("");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      createOffer();
    }
  };

  const [image, setImage] = useState({ preview: "", data: "" });
  const [status, setStatus] = useState("");

  const handleFileChange = (e: any) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  };

  const handleImageSubmit = async (e: any) => {
    e.preventDefault();

    const uploadImage = async () => {
      let imageData = new FormData();
      console.log(formData.title);
      imageData.append("file", image.data);
      imageData.append("title", formData.title);
      try {
        const response = await fetch("http://localhost:8000/offers/upload", {
          method: "POST",
          body: imageData,
        });
        if (response) {
          setStatus(response.statusText);
          console.log("send");
        } else console.log("err");
      } catch (err) {
        console.error(err);
      }
    };

    uploadImage();

    const createOffer = async () => {
      try {
        const response = await fetch("http://localhost:8000/offers/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };

    createOffer();
  };

  return (
    <div className="add-offer-container">
      <Modal
        open={props.openOfferModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxStyle} className="modal-box">
          <h2>Add your offer</h2>
          <form
            action=""
            className="offer-modal-form"
            onSubmit={handleImageSubmit}
          >
            <input type="file" name="file" onChange={handleFileChange}></input>
            {image.preview && (
              <img src={image.preview} width="100" height="100" />
            )}
            {status && <h4>{status}</h4>}
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
                value={category}
                label="Category"
                onChange={handleCategoryChange}
              >
                {categoriesList.map((e, i) => {
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
            <div className="add-images-container">
              <Dropzone
                onDrop={handleFileChange}
                multiple={false}
                maxSize={2000000}
              >
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <div className="add main-image">+</div>
                    </div>
                  </section>
                )}
              </Dropzone>
              <Dropzone
                onDrop={handleOnDrop}
                multiple={false}
                maxSize={2000000}
              >
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <div className="add second-image">+</div>
                    </div>
                  </section>
                )}
              </Dropzone>
              <Dropzone
                onDrop={handleOnDrop}
                multiple={false}
                maxSize={2000000}
              >
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <div className="add third-image">+</div>
                    </div>
                  </section>
                )}
              </Dropzone>
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
