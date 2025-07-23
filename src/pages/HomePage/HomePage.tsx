import React from "react";
import ProductType from "../../components/ProductType/ProductType";

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
    <div>
      <ProductType data={arr} />
      HomePage
    </div>
  );
};

export default HomePage;
