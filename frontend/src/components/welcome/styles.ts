import Image from "next/image";
import styled from "styled-components";

export const StyledMainWrapper = styled.main`
  display: flex;
  width: 100%;
  justify-content:center;
`;

export const StyledWelcomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 45%;
  margin-top: 30px;
  background-color: #fffbf5;
`;


export const StyledGeneralInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
  height: 100%; 
`;



export const StyledWelcomeText = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  color: #3c22dd;
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid #3c22dd;
    margin-top: -2px;
  }
`;

export const StyledLogo = styled(Image)`
  border-radius: 5px; /* Add a border-radius if needed */
`;

