import React from "react";
import { Badge, Col } from "antd";
import * as S from "./styled";
import Search from "antd/es/input/Search";
import {
  CaretDownOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

const HeaderComponent = () => {
  return (
    <div>
      <S.WrapperHeader>
        <Col span={6}>
          <S.WrapperTextHeader>ECOMMERCE</S.WrapperTextHeader>
        </Col>
        <Col span={12}>
          {" "}
          <Search
            placeholder="Find products,..."
            onSearch={() => console.log("")}
            enterButton
          />
        </Col>
        <Col span={6} className="custom-row">
          <S.WrapperAccountHeader>
            <UserOutlined style={{ fontSize: 30 }} />
            <div>
              <S.WrapperTextSmall>Login / Register</S.WrapperTextSmall>
              <div>
                <S.WrapperTextSmall>Account</S.WrapperTextSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </S.WrapperAccountHeader>
          <div>
            <Badge count={4} size="small">
              <ShoppingCartOutlined style={{ fontSize: 30, color: "#FFF" }} />
            </Badge>
            <S.WrapperTextSmall>Cart</S.WrapperTextSmall>
          </div>
        </Col>
      </S.WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
