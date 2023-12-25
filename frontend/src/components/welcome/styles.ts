import Image from "next/image";
import styled from "styled-components";

export const StyledMainWrapper = styled.main`
  display: flex;
  
`;

export const StyledWelcomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-top: 30px;
  width: 50%;
  background-color: #fffbf5;
`;


export const StyledGeneralInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
  height: 100%; 
`;

export const StyledWelcomeText = styled.h1`
  font-size: 24px;
  
`;

export const StyledLogo = styled(Image)`
  border-radius: 5px; /* Add a border-radius if needed */
`;

