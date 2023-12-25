import styled from "styled-components";

export const StyledChallengesWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%; 
  width: 100%; 
  
`;

export const StyledChallenge = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  text-align:center;
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  width: 30%;
  height: 20%;
  
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
`