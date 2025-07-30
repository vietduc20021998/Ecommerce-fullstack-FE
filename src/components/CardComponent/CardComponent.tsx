import { StarFilled } from "@ant-design/icons";
import { Card } from "antd";
import * as S from "./CardComponent.styled";

const CardComponent = () => {
  return (
    <Card
      hoverable
      style={{ width: 200 }}
      bodyStyle={{ padding: "10px" }}
      cover={
        <S.WrapperImage>
          <img
            alt="example"
            className="product-img"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
          <span className="official">OFFICIAL</span>
        </S.WrapperImage>
      }
    >
      <S.StyledNameProduct>IPhone</S.StyledNameProduct>
      <S.WrapperReportText>
        <span>
          <span>4.96</span>
          <StarFilled style={{ fontSize: "10px", color: "yellow" }} />
        </span>
        <span> | Da ban 1000+</span>
      </S.WrapperReportText>
      <S.WrapperPriceText>
        {(19000000).toLocaleString()}VND
        <S.WrapperDiscountText>-{5}%</S.WrapperDiscountText>
      </S.WrapperPriceText>
    </Card>
  );
};

export default CardComponent;
