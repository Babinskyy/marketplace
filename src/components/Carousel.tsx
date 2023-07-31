import { useState } from "react";
import "../App.scss";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { SliderData } from "../mockData/sliderData";
import { Box, Modal, Typography } from "@mui/material";

type CarouselProps = {
  images: string[];
};
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Carousel = (props: CarouselProps): JSX.Element => {
  const [current, setCurrent] = useState<number>(0);
  const [openImage, setOpenImage] = useState<boolean>(false);

  const handleClose = () => setOpenImage(false);

  const nextSlide = () => {
    setCurrent(current === props.images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? props.images.length - 1 : current - 1);
  };

  if (!Array.isArray(props.images) || props.images.length <= 0) {
    return <h1>Sorry, we could not find this offer.</h1>;
  }

  return (
    <section className="slider">
      <ArrowBackIosNewIcon className="left-arrow" onClick={prevSlide} />
      <ArrowForwardIosIcon className="right-arrow" onClick={nextSlide} />
      {props.images.map((e: string, i: number) => {
        return (
          <div className={i === current ? "slide active" : "slide"} key={i}>
            {i === current && (
              <img
                src={props.images[current]}
                alt="offer-image"
                className="image"
                onClick={() => {
                  setOpenImage(true);
                }}
              />
            )}
          </div>
        );
      })}
      <div className="images-preview-container">
        <div className="images-preview-slide">
          {props.images.map((e, i) => {
            return (
              <img
                src={e}
                alt="offer-image"
                className={`${current === i && "selected"}`}
                key={i}
                onClick={() => {
                  setCurrent(i);
                }}
              />
            );
          })}
        </div>
      </div>
      <div>
        <Modal
          open={openImage}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <img src={props.images[current]} alt="" />
          </Box>
        </Modal>
      </div>
    </section>
  );
};

export default Carousel;
