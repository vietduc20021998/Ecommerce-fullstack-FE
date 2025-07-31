import { Col, Image, Row } from "antd";
import detail1 from "../../assets/images/detail-1.webp";
import detail2 from "../../assets/images/detail-2.webp";
import detail3 from "../../assets/images/detail-3.webp";
import detail4 from "../../assets/images/detail-4.webp";
import * as S from "./ProductDetailComponent.styled";

const ProductDetailComponent = () => {
  const imgArr = [detail1, detail2, detail3, detail4];
  return (
    <Row style={{ background: "#fff", padding: "20px" }}>
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
      <Col span={14}></Col>
    </Row>
  );
};

export default ProductDetailComponent;
