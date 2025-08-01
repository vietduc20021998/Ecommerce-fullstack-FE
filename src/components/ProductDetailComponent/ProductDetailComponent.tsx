import { MinusOutlined, PlusOutlined, StarFilled } from "@ant-design/icons";
import { Button, Col, Image, InputNumber, InputNumberProps, Row } from "antd";
import detail1 from "../../assets/images/detail-1.webp";
import detail2 from "../../assets/images/detail-2.webp";
import detail3 from "../../assets/images/detail-3.webp";
import detail4 from "../../assets/images/detail-4.webp";
import * as S from "./ProductDetailComponent.styled";
import { useState } from "react";
import InputQuantityComponent from "../InputQuantityComponent/InputQuantityComponent";

const MAX_QUANTITY = 100;

const ProductDetailComponent = () => {
  const imgArr = [detail1, detail2, detail3, detail4];

  return (
    <Row style={{ background: "#fff", padding: "20px" }} gutter={20}>
      <Col span={10}>
        <Image src={detail1} preview={false} />
        <Row style={{ marginTop: "10px", columnGap: "10px" }}>
          {imgArr.map((img) => (
            <S.WrapperCol span={4}>
              <S.WrapperImage src={img} preview={false} />
            </S.WrapperCol>
          ))}
        </Row>
      </Col>
      <S.WrapperProductInfo span={14}>
        <S.WrapperNameProduct>Conan Conan Conan Conan Conan Conan Conan Conan Conan Conan Conan </S.WrapperNameProduct>
        <div>
          <StarFilled style={{ fontSize: "10px", color: "yellow" }} />
          <StarFilled style={{ fontSize: "10px", color: "yellow" }} />
          <StarFilled style={{ fontSize: "10px", color: "yellow" }} />
          <S.WrapperTextSell> | Da ban 1000+</S.WrapperTextSell>
        </div>
        <S.WrapperPriceProduct>
          <S.WrapperPriceTextProduct>
            {(200000).toLocaleString()} VND
          </S.WrapperPriceTextProduct>
        </S.WrapperPriceProduct>
        <S.WrapperAddressProduct>
          <span>Giao den:</span>
          <span className="address">Cmc Creative space</span>
          <span className="change-address">- Doi dia chi</span>
        </S.WrapperAddressProduct>
        <S.WrapperQuantityProduct>
          <div>So luong:</div>
          <InputQuantityComponent
            onChangeQuantity={(num) => console.log(num)}
          />
        </S.WrapperQuantityProduct>
        <S.WrapperButtonSubmit>
          <Button className="buy-now">Chon mua</Button>
          <Button className="buy-now pay-later">
            <span>Mua truoc tra sau</span>
            <span className="light">Lai suat 0%</span>
          </Button>
        </S.WrapperButtonSubmit>
      </S.WrapperProductInfo>
    </Row>
  );
};

export default ProductDetailComponent;
