import { Image } from "antd";
import Slider from "react-slick";
import * as S from "./SliderComponent.styled";

interface ISlider {
  arrImages: string[];
}
const SliderComponent = ({ arrImages }: ISlider) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <S.SliderContainer>
      <Slider {...settings}>
        {arrImages.map((img) => (
          <Image src={img} preview={false} width="100%" height="500px" />
        ))}
      </Slider>
    </S.SliderContainer>
  );
};

export default SliderComponent;
