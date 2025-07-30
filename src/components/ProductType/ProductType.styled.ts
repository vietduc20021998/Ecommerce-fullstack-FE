import styled from "styled-components";

export const TypeContainer = styled.div`
  display: flex;
  column-gap: 10px;
  padding-bottom: 2px;
  border-bottom: 1px solid #000;
  margin-bottom: 2px;
`;
export const TypeItem = styled.div`
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 2px;
  &:hover {
    background-color: rgba(235, 235, 235, 0.48);
  }
`;
