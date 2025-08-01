import { Col, Image } from "antd";
import styled from "styled-components";

export const WrapperImage = styled(Image)`
  width: 64px;
  height: 64px;
`;

export const WrapperCol = styled(Col)`
  display: flex;
  flex-basis: unset;
`;

export const WrapperNameProduct = styled.h1`
  color: rgb(36, 36, 36);
  font-size: 24px;
  font-weight: 300;
  line-height: 32px;
  word-break: break-word;
`;

export const WrapperTextSell = styled.span`
  color: rgb(120, 120, 120);
  font-size: 15px;
  line-height: 24px;
`;

export const WrapperPriceProduct = styled.div`
  color: rgb(250, 250, 250);
  border-radius: 4px;
`;

export const WrapperPriceTextProduct = styled.h1`
  font-size: 32px;
  line-height: 40px;
  margin-right: 8px;
  font-weight: 500;
  color: #000;
`;

export const WrapperAddressProduct = styled.div`
  display: flex;
  column-gap: 5px;
  span.address {
    text-decoration: underline;
    font-display: 15px;
    line-height: 24px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  span.change-address {
    color: blue;
    font-display: 15px;
    line-height: 24px;
    font-weight: 500;
  }
`;

export const WrapperQuantityProduct = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const WrapperProductInfo = styled(Col)`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const WrapperButtonSubmit = styled.div`
  display: flex;
  column-gap: 10px;

  .btn {
  }

  .buy-now {
    background-color: rgb(255, 57, 69);
    height: 48px;
    width: 220px;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-weight: 700;
    font-size: 15px;
    &:hover {
      background-color: rgba(255, 112, 122, 1) !important;
      color: #fff !important;
    }
  }
  .pay-later {
    background-color: #fff;
    color: rgb(13, 92, 192);
    border: 1px solid rgb(13, 92, 192);
    display: flex;
    flex-direction: column;
    gap: 0;
    &:hover {
      background-color: #fff !important;
      color: rgba(61, 118, 192, 1) !important;
    }

    .light {
      font-weight: 400;
      font-size: 12px;
    }
  }
`;
