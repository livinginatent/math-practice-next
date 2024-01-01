import styled from "styled-components";

export const StyledChallengeWrapper = styled.main`
  background-color: #fff6f6;
  border-radius: 10px;
  font-size: 36px;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
`;

export const StyledChallenge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40%;
`;

export const StyledAnswer = styled.input`
  border-radius: 5px;
  border: solid 1px #b6bbc4;
  width: 10%;
  height: auto;
  padding:10px 15px 10px 15px;
  margin-left: 5px;
  background-color: #f4f4f4;
`;

export const StyledButton = styled.button`
  border-radius: 5px;
  border: none;
  width: auto;
  height: auto;
  padding:10px 25px 10px 25px;
  margin-left: 10px;
  color: white;
  background-color: #3c22dd;
  font-size: 16px;

`;

export const StyledWrongAnswer = styled.p`
  font-size: large;
  color: red;
`;

export const StyledUserGameStats = styled.section`
  display: flex;
  height: auto;
  justify-content: space-around;
  align-items: center;
  
  width: 100%;
  
`;

export const StyledUserScore = styled.p`
  
`;
export const StyledUserTime = styled.p`
  
`;
export const StyledUserLives = styled.p`
  
`;
