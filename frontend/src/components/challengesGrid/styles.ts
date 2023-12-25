import Image from "next/image";
import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 40%; /* Adjust width as needed, or set a specific width */
  margin-top: 30px;
  margin-left: 0.5rem;
  gap: 0.5rem;
  width: 45%;
`;

export const GridItem = styled.div`
  background-color: #f2afef; /* Light grey background, adjust color as needed */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  /* Add padding, text styles, or other design elements as needed */
  height: 11rem;
 /*  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px; */
  transition: all 1s;
  position: relative;
  &:after,
  &:before {
    content: " ";
    width: 10px;
    height: 10px;
    position: absolute;
    border: 0px solid #fff;
    transition: all 1s;
  }
  &:after {
    top: -1px;
    left: -1px;
    border-top: 5px solid #3887be;
    border-left: 5px solid #3887be;
  }
  &:before {
    bottom: -1px;
    right: -1px;
    border-bottom: 5px solid #3887BE;
    border-right: 5px solid #3887BE;
  }
  &:hover {
    border-top-right-radius: 0px;
    border-bottom-left-radius: 0px;
    // background:rgba(0,0,0,.5);
    // color:white;
    &:before,
    &:after {
      width: 100%;
      height: 100%;
      // border-color:white;
    }
  }

  &:nth-child(1) {
    background-color: #91b89e;
  }
  &:nth-child(2) {
    background-color: #91a0b8;
  }
  &:nth-child(3) {
    background-color: #ebe4de;
  }
  &:nth-child(4) {
    background-color: #ecd768;
  }
  &:nth-child(5) {
    background-color: #ffb885;
  }
  &:nth-child(6) {
    background-color: #b89191;
  }
`;
