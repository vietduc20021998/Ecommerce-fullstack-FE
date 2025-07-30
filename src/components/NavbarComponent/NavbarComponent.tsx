import { Checkbox, Rate } from "antd";
import * as S from "./NavbarComponent.styled";

const NavbarComponent = () => {
  const renderContent = (type: string, options: any) => {
    switch (type) {
      case "text":
        return options.map((option: any) => (
          <div>
            <S.WrapperValueText>{option}</S.WrapperValueText>
          </div>
        ));

      case "checkbox":
        return (
          <Checkbox.Group
            style={{ width: "100%" }}
            onChange={() => {}}
            className="custom-checkbox"
          >
            {options.map((option: any) => (
              <Checkbox value={option.value}>{option.label}</Checkbox>
            ))}
          </Checkbox.Group>
        );
      case "star":
        return options.map((option: any) => (
          <div>
            <Rate
              style={{ fontSize: "12px", marginRight: 10 }}
              disabled
              defaultValue={option}
            />
            <span style={{ fontSize: "12px" }}>Tu {option} sao</span>
          </div>
        ));

      default:
        return <S.WrapperValueText></S.WrapperValueText>;
    }
  };
  return (
    <div>
      <S.WrapperLabelText>Label</S.WrapperLabelText>
      <S.WrapperContent>
        {renderContent("text", ["Tu lanh", "TV", "May giat"])}
        {renderContent("checkbox", [
          {
            value: "a",
            label: "A",
          },
          {
            value: "b",
            label: "B",
          },
          {
            value: "c",
            label: "C",
          },
        ])}
        {renderContent("star", [3, 4, 5])}
      </S.WrapperContent>
    </div>
  );
};

export default NavbarComponent;
