import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
  padding: 10px 120px;
  background-color: rgb(26, 148, 255);
  align-items: center;

  .custom-row {
    display: flex;
    align-items: center;
    justify-content: right;
    column-gap: 40px;
  }
`;

export const WrapperTextHeader = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  text-align: left;
`;

export const WrapperAccountHeader = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  color: #fff;
  justify-content: right;
`;

export const WrapperTextSmall = styled.span`
  font-size: 12px;
  color: #fff;
`;
