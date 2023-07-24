import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { imagens } from '@/app/uteis/helper';
import Image from 'next/image';

const ImageCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <Image src={imagens.Profession1} alt="Prof1" width={500} height={400} />
      </div>
      <div>
      <Image src={imagens.Profession2} alt="Prof2" width={500} height={400} />
      </div>
      <div>
      <Image src={imagens.Profession3} alt="Prof3" width={500} height={400} />
      </div>
    </Slider>
  );
};

export default ImageCarousel;