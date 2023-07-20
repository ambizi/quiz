import { ReactNode } from "react";
import Slider from "react-slick";

type childreProps = {
    children: ReactNode
}


function Render({children}:childreProps) {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return(
        <div>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    )
} export default Render