import { ReactNode } from "react";
import React from "react";
import Slider from "react-slick";


type childreProps = {
    children: ReactNode
}

const Carousel = ({children}: childreProps) => {
    
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
    };
  
    return (
      <Slider {...settings}>
        {children}
      </Slider>
    );
  };
  export default Carousel