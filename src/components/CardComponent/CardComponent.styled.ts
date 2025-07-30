import styled from "styled-components";

export const StyledNameProduct = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgb(56, 56, 61);
`;

export const WrapperReportText = styled.div`
  font-size: 10px;
  color: rgb(128, 128, 137);
  display: flex;
  align-items: center;
  column-gap: 2px;
`;

export const WrapperPriceText = styled.div`
  font-size: 16px;
  color: rgb(255, 66, 78);
  font-weight: 500;
`;

export const WrapperDiscountText = styled.span`
  font-size: 12px;
  color: rgb(255, 66, 78);
  font-weight: 500;
`;

export const WrapperImage = styled.div`
  position: relative;
  .product-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  .official {
    padding: 1px 5px;
    color: #fff;
    background-color: rgba(66, 110, 255, 1);
    font-size: 10px;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
