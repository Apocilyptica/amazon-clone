import React from "react";
import styled from "styled-components";

// React-Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Data
import { homeSliderImages } from "../../Data/HomeSliderImages";

const HomeSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false,
  };

  return (
    <Slider {...settings}>
      {homeSliderImages.map((image, index) => {
        return (
          <Banner key={index}>
            <img src={image} alt="Background Img" />
          </Banner>
        );
      })}
    </Slider>
  );
};

export default HomeSlider;

const Banner = styled.div`
  min-height: 600px;
  background-position: center;
  background-size: cover;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;
