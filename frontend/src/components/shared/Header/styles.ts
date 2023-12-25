import styled from "styled-components";

export const StyledHeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fffbf5;
  border-radius: 5px;
  width: 100%;
 
`;

export const StyledHeaderItem = styled.p`
  margin: 1rem;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #000;
  }
`;
