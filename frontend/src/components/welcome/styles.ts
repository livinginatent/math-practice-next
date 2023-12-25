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

export const StyledDescription = styled.p`
`

export const StyledWelcomeText = styled.button`
  font-size: 24px;
  cursor: pointer;
  background-color: #d8d9da;
  border: 1px solid transparent;
  border-radius: 5px;
  &:hover {
    transition: 0.3s ease-in-out;
    border: 1px solid #3887be;
    background-color: #e4f1ff;
  }
`;

export const StyledLogo = styled(Image)`
  border-radius: 5px; /* Add a border-radius if needed */
`;

