import styled from "styled-components";



export const StyledChallenge = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  text-align: center;
  position: absolute;
`;

export const StyledAnswer = styled.input`
  border-radius: 5px;
  border: none;
  width: 50px;
  height: 25px;
  margin-left: 5px;
`;

export const StyledButton = styled.button`
  border-radius: 5px;
  border: none;
  width: 50px;
  height: 25px;
  margin-left: 10px;
`;

export const StyledWrongAnswer = styled.p`
  font-size: large;
  color: red;
`;
