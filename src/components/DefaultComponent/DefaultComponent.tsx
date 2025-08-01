import React from "react";
import { PropsWithChildren } from "react";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import * as S from "./DefaultComponent.styled";

interface IDefaultComponent extends PropsWithChildren {
  isShowHeader?: boolean;
}

const DefaultComponent = ({ isShowHeader, children }: IDefaultComponent) => {
  return isShowHeader ? (
    <div>
      <HeaderComponent />
      <S.Container>{children}</S.Container>
    </div>
  ) : (
    <div>{children}</div>
  );
};

export default DefaultComponent;
