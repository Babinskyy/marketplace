import { useState } from "react";
import "../../../common/assets/styles/scss/main/App.scss";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import { SliderData } from "../mockData/sliderData";
import { Box, Modal} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

type CarouselProps = {
  images: string[];
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
      <div className="slide-container">

      <ArrowBackIosNewIcon className="left-arrow" onClick={prevSlide} />
      {props.images.map((e: string, i: number) => {
        if(i === current){
          return (
            <div className={"slide active"} key={i}>
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
        }
        
      })}
      <ArrowForwardIosIcon className="right-arrow" onClick={nextSlide} />
      </div>
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
          <Box className="zoom-img-box" onClick={handleClose}>
            <img src={props.images[current]} alt="" ></img>
            
          </Box>
        </Modal>
      </div>
    </section>
  );
};

export default Carousel;
