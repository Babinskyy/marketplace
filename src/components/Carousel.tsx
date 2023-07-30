import { useState } from "react";
import "../App.scss";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { SliderData } from "../mockData/sliderData";

type CarouselProps = {
  images: string[];
};

const Carousel = (props: CarouselProps): JSX.Element => {
  const [current, setCurrent] = useState(0);
  const [slideCount, setSlideCount] = useState<number>(0);
  const [selected, setSelected] = useState<number>(0);
  const length = props.images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);

    setSelected(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);

    setSelected(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(props.images) || props.images.length <= 0) {
    return <></>;
  }

  console.log(selected);

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
                alt="travel image"
                className="image"
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
                className={`${selected === i && "selected"}`}
                key={i}
                onClick={(e) => {
                  //   setSlideCount(-i * 100);
                  setSelected(-i);
                  if (i > selected) {
                    nextSlide();
                  } else if (i < selected) {
                    prevSlide();
                  }
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
