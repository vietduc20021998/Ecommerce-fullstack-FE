import React from "react";
import * as S from "./ProductType.styled";

interface IProductType {
  data: string[];
}

const ProductType = ({ data }: IProductType) => {
  return (
    <S.TypeContainer>
      {data.map((item) => (
        <S.TypeItem>{item}</S.TypeItem>
      ))}
    </S.TypeContainer>
  );
};

export default ProductType;
