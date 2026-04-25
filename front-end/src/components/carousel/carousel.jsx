import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import slide_1 from "../../assets/test1.png";
import slide_2 from "../../assets/test2.png";
import slide_3 from "../../assets/test3.png";
import slide_4 from "../../assets/test4.png";
import slide_5 from "../../assets/test5.png";
import slide_6 from "../../assets/test6.png";
import slide_7 from "../../assets/test7.png";
import slide_8 from "../../assets/test8.png";
import "./carousel.css";

const list = [
  { src: slide_1, alt: "slide 1" },
  { src: slide_2, alt: "slide 2" },
  { src: slide_3, alt: "slide 3" },
  { src: slide_4, alt: "slide 4" },
  { src: slide_5, alt: "slide 5" },
  { src: slide_6, alt: "slide 6" },
  { src: slide_7, alt: "slide 7" },
  { src: slide_8, alt: "slide 8" },
];

export function Carousel() {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => setSlide((prev) => (prev === list.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setSlide((prev) => (prev === 0 ? list.length - 1 : prev - 1));

  return (
    <div className="carousel">

      {list.map((e, idx) => (
        <img
          src={e.src}
          alt={e.alt}
          key={idx}
          className={`carousel__slide${slide === idx ? " carousel__slide--active" : ""}`}
        />
      ))}

      <button className="carousel__arrow carousel__arrow--left" onClick={prevSlide} aria-label="Previous">
        <BsArrowLeftCircleFill />
      </button>
      <button className="carousel__arrow carousel__arrow--right" onClick={nextSlide} aria-label="Next">
        <BsArrowRightCircleFill />
      </button>

      <span className="carousel__counter">{slide + 1} / {list.length}</span>

      <div className="carousel__dots">
        {list.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSlide(idx)}
            className={`carousel__dot${slide === idx ? " carousel__dot--active" : ""}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </div>
  );
}