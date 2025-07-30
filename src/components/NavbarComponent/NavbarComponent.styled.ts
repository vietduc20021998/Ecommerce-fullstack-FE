import styled from "styled-components";

export const WrapperLabelText = styled.h4`
  font-size: 14px;
  color: rgb(56, 56, 61);
  font-weight: 500;
`;

export const WrapperValueText = styled.div`
  font-size: 12px;
  color: rgb(56, 56, 61);
  font-weight: 400;
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  .custom-checkbox {
    display: flex;
    flex-direction: column;
  }
`;
