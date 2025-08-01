import styled from "styled-components";

export const WrapperQuantityProduct = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  border: 1px solid #d1d1d1ff;
  border-radius: 5px;

  .custom-btn {
    width: 30px;
    height: 30px;
    border: none;

    &:disabled {
      border-radius: 0;
    }
  }
  .custom-input {
    width: 50px;
    border: none;
    border-left: 1px solid #d1d1d1ff;
    border-right: 1px solid #d1d1d1ff;
    border-radius: 0;
    & input {
      text-align: center;
    }
  }
`;
