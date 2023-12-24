import styled from "styled-components";
import Image from "next/image";

export const StyledWrapper = styled.section`
  display: flex;
  height: calc(100vh - 60px);
  align-items: center;
  justify-content: center;
`;

export const StyledGameModeWrapper = styled.div`
  border: 2px solid ;
  border-radius: 5px;
  margin: 10px;
  text-align: center;
  box-shadow: 0 8px 4px rgba(0, 0, 0, 0.3);
  /* Add animation on hover */
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1); /* Increase the scale on hover */
  }
`;

export const StyledImage = styled(Image)`
  border-radius: 5px; /* Add a border-radius if needed */
`;

export const StyledModeTitle = styled.h1`
  font-family: var(--font-Raleway);
`;
