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
import "../../common/assets/styles/scss/App.scss";
import { useState, useEffect } from "react";
import { categoriesList } from "../../common/mockData/categoriesList";
import { offersList } from "../../common/mockData/offersList";
import { Offer, Errors } from "../../common/types/Types";

import { useNavigate } from "react-router-dom";

const boxStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type AddOfferProps = {
  openOfferModal: boolean;
  setOpenOfferModal: React.Dispatch<React.SetStateAction<boolean>>;

};

const AddOffer = (props: AddOfferProps): JSX.Element => {
  const [category, setCategory] = useState<string>("");
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
    category: "",
  });

  const [errors, setErrors] = useState<Errors>({
    id: false,
    images: false,
    title: false,
    description: false,
    price: false,
    date: false,
    author: false,
    country: false,
    phone: false,
    category: false,
  });
  const navigate = useNavigate();
  const handleClose = () => props.setOpenOfferModal(false);

  useEffect(() => {
    if (setCurrentOfferList) {
      setCurrentOfferList(offersList);
    }
  }, []);

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
    setFormData({
      ...formData,
      category: event.target.value as string,
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
    setErrors({
      id: false,
      images: false,
      title: false,
      description: false,
      price: false,
      date: false,
      author: false,
      country: false,
      phone: false,
      category: false,
    });

    if (formData.title === "") {
      setErrors((prev) => ({
        ...prev,
        title: true,
      }));
    }
    if (formData.price === null) {
      setErrors((prev) => ({
        ...prev,
        price: true,
      }));
    }
    if (formData.author === null) {
      setErrors((prev) => ({
        ...prev,
        author: true,
      }));
    }
    if (formData.country === null) {
      setErrors((prev) => ({
        ...prev,
        country: true,
      }));
    }
    if (formData.phone === null) {
      setErrors((prev) => ({
        ...prev,
        phone: true,
      }));
    }
    if (formData.category === null) {
      setErrors((prev) => ({
        ...prev,
        category: true,
      }));
    }

    return (
      !errors.title &&
      !errors.price &&
      !errors.author &&
      !errors.country &&
      !errors.phone &&
      !errors.category
    );
  };

  const createOffer = () => {
    console.log(currentOfferList);
    currentOfferList?.push({
      ...formData,
      id: currentOfferList.length + 1,
    });
    props.setOpenOfferModal(false);
    navigate("/");
    window.scroll({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
    setFormData({
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
      category: "",
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createOffer();
    console.log("submit");
  };

  return (
    <div className="add-offer-container">
      <Modal
        open={props.openOfferModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxStyle}>
          <h1>Add your offer</h1>
          <form action="" className="offer-modal-form" onSubmit={handleSubmit}>
            <TextField
              error={errors.title}
              name="title"
              label="Title"
              defaultValue=""
              required
              sx={{ width: "510px", fontSize: "25px" }}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  [e.currentTarget.name]: e.currentTarget.value,
                });
              }}
            />
            <FormControl sx={{ width: "510px" }} required>
              <InputLabel id="category-label" sx={{ marginTop: "10px" }}>
                Category
              </InputLabel>
              <Select
                error={errors.category}
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
                    <MenuItem value={e.name} key={i + 1}>
                      <span className="category-name">{e.name}</span>
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>

            <h2>Add images</h2>
            <div className="add-images-container">
              <div className="add main-image">+</div>
              <div className="add sub-image">+</div>
              <div className="add sub-image">+</div>
            </div>
            <label htmlFor="description"></label>
            <TextField
              error={errors.price}
              name="price"
              label="Price"
              defaultValue=""
              required
              sx={{ width: "510px" }}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  [e.currentTarget.name]: e.currentTarget.value,
                });
              }}
            />
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
                <FormControl sx={{ width: "310px" }} required>
                  <InputLabel id="country-label" sx={{ marginTop: "10px" }}>
                    Country
                  </InputLabel>
                  <Select
                    error={errors.country}
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

                <TextField
                  error={errors.author}
                  name="author"
                  label="Name"
                  defaultValue=""
                  required
                  sx={{ width: "310px" }}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      [e.currentTarget.name]: e.currentTarget.value,
                    });
                  }}
                />
                <TextField
                  error={errors.phone}
                  name="phone"
                  label="Phone number"
                  defaultValue=""
                  required
                  sx={{ width: "310px" }}
                  id="data-textfield"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      [e.currentTarget.name]: e.currentTarget.value,
                    });
                  }}
                />
              </div>
            </div>
            <Button type="submit" variant="contained">
              Add to Market Place
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};
export default AddOffer;
