import styled from "styled-components";

export const StyledHeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ccc;
`;

export const StyledHeaderItem = styled.p`
  margin-left: 1rem;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #000;
  }
`;
