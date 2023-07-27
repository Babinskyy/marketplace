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
import Textarea from "@mui/joy/Textarea";
import "../App.scss";
import { useState, useEffect } from "react";

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
          <form action="" className="offer-modal-form">
            <TextField
              name="title"
              label="Title"
              defaultValue=""
              required
              sx={{ width: "510px" }}
            />
            <FormControl sx={{ width: "510px" }} required>
              <InputLabel id="category-label" sx={{ marginTop: "10px" }}>
                Category
              </InputLabel>
              <Select
                sx={{ marginTop: "10px" }}
                labelId="category-label"
                id="category-select"
                value={""}
                label="Category"
                // onChange={handleChange}
              >
                <MenuItem value={10}>Cars</MenuItem>
                <MenuItem value={20}>Clothes</MenuItem>
                <MenuItem value={30}>Electronics</MenuItem>
              </Select>
            </FormControl>

            <h2>Add images</h2>
            <div className="add-images-container">
              <div className="add main-image">+</div>
              <div className="add sub-image">+</div>
              <div className="add sub-image">+</div>
            </div>
            <label htmlFor="description"></label>
            <div className="details-holder">
              <Textarea
                color="neutral"
                minRows={6}
                placeholder="Write as many details as possible..."
                size="lg"
                variant="outlined"
                
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
                    value={""}
                    label="Country"
                    // onChange={handleChange}
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
                    name="name"
                    label="Name"
                    defaultValue=""
                    required
                    sx={{ width: "310px" }}
                  />
                  <TextField
                    name="phone"
                    label="Phone number"
                    defaultValue=""
                    required
                    sx={{ width: "310px" }}
                    id="data-textfield"
                  />
                
              </div>
            </div>
            <Button
          variant="contained"
          onClick={() => props.setOpenOfferModal(true)}
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
