import { Col, Pagination, Row } from "antd";
import CardComponent from "../../components/CardComponent/CardComponent";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import * as S from "./TypeProductPage.styled";

const TypeProductPage = () => {
  return (
    <Row
      style={{
        padding: "0 120px",
        background: "#efefef",
        flexWrap: "nowrap",
        paddingTop: "10px",
      }}
    >
      <S.WrapperNavbar span={4}>
        <NavbarComponent />
      </S.WrapperNavbar>
      <Col span={20}>
        <S.WrapperProduct>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </S.WrapperProduct>
        <Pagination
          showPrevNextJumpers
          defaultCurrent={2}
          total={500}
          onChange={() => {}}
          style={{ justifyContent: "center", marginTop: "20px" }}
        />
      </Col>
    </Row>
  );
};

export default TypeProductPage;
