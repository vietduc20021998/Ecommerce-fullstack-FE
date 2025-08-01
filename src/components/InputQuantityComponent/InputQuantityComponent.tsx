import { Button, InputNumber } from "antd";
import * as S from "./InputQuantityComponent.styled";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

interface IInputQuantityComponent {
  maxLength?: number;
  onChangeQuantity: (num: number) => void;
}
const InputQuantityComponent = ({
  maxLength = 100,
  onChangeQuantity,
}: IInputQuantityComponent) => {
  const [quantity, setQuantity] = useState<number>(0);

  const handleChangeQuantity = (value: number | null) => {
    if (value === null || value < 0) {
      setQuantity(0);
    } else if (value > maxLength) {
      setQuantity(maxLength);
    } else {
      setQuantity(value);
    }
  };

  useEffect(() => {
    onChangeQuantity(quantity);
  }, [onChangeQuantity, quantity]);

  return (
    <S.WrapperQuantityProduct>
      <Button
        className="custom-btn"
        onClick={() => handleChangeQuantity(quantity - 1)}
        disabled={quantity === 0}
      >
        <MinusOutlined />
      </Button>
      <InputNumber
        value={quantity}
        controls={false}
        onChange={handleChangeQuantity}
        className="custom-input"
        max={maxLength}
      />
      <Button
        className="custom-btn"
        onClick={() => handleChangeQuantity(quantity + 1)}
        disabled={quantity === maxLength}
      >
        <PlusOutlined />
      </Button>
    </S.WrapperQuantityProduct>
  );
};

export default InputQuantityComponent;
