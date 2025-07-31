import slider1 from "../../assets/images/wu1.avif";
import slider2 from "../../assets/images/wu2.avif";
import slider3 from "../../assets/images/wu3.avif";
import CardComponent from "../../components/CardComponent/CardComponent";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import ProductType from "../../components/ProductType/ProductType";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import * as S from "./HomePage.styled";

const HomePage = () => {
  const arr = [
    "Thit, Rau cu",
    "Bach hoa",
    "Nha cua",
    "Dien tu",
    "Thiet bi so",
    "Dien thoai",
  ];
  return (
    <S.HomePageContainer>
      <ProductType data={arr} />
      <SliderComponent arrImages={[slider1, slider2, slider3]} />
      <S.WrapperProduct>
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </S.WrapperProduct>
      <NavbarComponent />
    </S.HomePageContainer>
  );
};

export default HomePage;
