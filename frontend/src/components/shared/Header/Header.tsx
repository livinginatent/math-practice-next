import React from "react";
import { StyledHeaderItem, StyledHeaderWrapper } from "./styles";
import { useRouter } from "next/navigation";
import {  logout } from "@/app/lib/auth/logout";

type Props = {};

const Header = (props: Props) => {
 
  
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };

const handleLogOut = () => {
  logout(router)
}

 
  return (
    <StyledHeaderWrapper>
      <StyledHeaderItem>Welcome</StyledHeaderItem>
      <StyledHeaderItem onClick={handleClick}>Math Practice</StyledHeaderItem>
      <StyledHeaderItem>New Challenge</StyledHeaderItem>
      <StyledHeaderItem onClick={handleLogOut}>Logout</StyledHeaderItem>
    </StyledHeaderWrapper>
  );
};

export default Header;
