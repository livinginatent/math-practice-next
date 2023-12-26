import styled from "styled-components";

export const StyledGameOverWrapper = styled.main`
  display: flex;
  background-color: #fff6f6;
  border-radius: 10px;
  font-size: 36px;
  text-align: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
`;

export const StyledLostText = styled.p`

`

export const StyledPlayAgain = styled.button`
  border-radius: 5px;
  border: none;
  width: auto;
  height: auto;
  padding: 0.5rem;
  margin-left: 10px;
  font-size: 24px;
  cursor: pointer;
`;