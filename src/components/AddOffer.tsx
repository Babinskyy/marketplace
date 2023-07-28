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
import "../App.scss";
import { useState, useEffect } from "react";
import { categoriesList } from "../mockData/categoryList";
import { Offer } from "../types/Offer";
import { offersList } from "../mockData/offersList";

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
  const handleClose = () => props.setOpenOfferModal(false);

  const [category, setCategory] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [currentOfferList, setCurrentOfferList] = useState<Offer[]>();
  const [formData, setFormData] = useState<Offer>({
    images: [""],
    title: "",
    description: "",
    price: 1000,
    date: "",
    author: "",
    country: "",
    phone: "",
    category: "",
  });

  useEffect(() => {
    setCurrentOfferList(offersList)
  }, [])
  
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

  const createOffer = () => {
    currentOfferList?.push(formData);
    console.log('submit');
    console.log(currentOfferList);
  }

  console.log(offersList);
 
  console.log(currentOfferList);


  // let bgcArray: string[] = [];
  // for (let i = 1; i <= categoriesList.length; i++) {
  //   bgcArray.push(`bgc-${i}`);
  // }


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
          <form action="" className="offer-modal-form" >
            <TextField
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
                    <MenuItem value={(i + 1) * 10}>
                      {/* <div className={`category bgc-${i + 1}`} key={i}>
                        <img src={categoriesList[i].url} alt="category-image" />
                      </div> */}
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
                  name="price"
                  label="Price"
                  defaultValue=""
                  required
                  sx={{ width: "510px"}}
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
                    sx={{ marginTop: "10px" }}
                    labelId="country-label"
                    id="country-select"
                    value={country}
                    label="Country"
                    onChange={handleCountryChange}
                  >
                    <MenuItem value={10}>France</MenuItem>
                    <MenuItem value={20}>Germany</MenuItem>
                    <MenuItem value={30}>Great Britain</MenuItem>
                    <MenuItem value={40}>Spain</MenuItem>
                    <MenuItem value={50}>Poland</MenuItem>
                    <MenuItem value={60}>Italy</MenuItem>
                    <MenuItem value={70}>Great</MenuItem>
                    <MenuItem value={80}>Switzerland</MenuItem>
                    <MenuItem value={90}>Austria</MenuItem>
                    <MenuItem value={90}>Netherlands</MenuItem>
                  </Select>
                </FormControl>

                <TextField
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
            <Button
              variant="contained"
              onClick={() => {
                createOffer()
                props.setOpenOfferModal(false)
              }}
            >
              Add to Market Place
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};
export default AddOffer;
