import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  background-color: #fff;
`;
export const WrapperLeftContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .sign-in {
    width: 400px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
  .custom-form {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
  .form-item-custom {
    margin: 0;
  }
  .blue {
    color: blue;
    width: fit-content;
    cursor: pointer;
    font-size: 14px;
    &:hover {
      text-decoration: underline;
    }
  }
`;
export const WrapperRightContent = styled.div`
  width: 70%;
  height: 100%;
  background-color: rgb(222, 235, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
