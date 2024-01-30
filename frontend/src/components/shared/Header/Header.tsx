import React, { useEffect, useState } from "react";
import { StyledHeaderItem, StyledHeaderWrapper } from "./styles";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
const Header = () => {
  const handleLogOut = () => {
    signOut({ callbackUrl: "http://localhost:3000/login" });
  };
  const { data: session } = useSession();
  const user = session?.user;
  
  return (
    <StyledHeaderWrapper>
      <StyledHeaderItem>Welcome {user?.username}</StyledHeaderItem>
      <StyledHeaderItem>Math Practice</StyledHeaderItem>
      <StyledHeaderItem>New Challenge</StyledHeaderItem>
      {session && (
        <StyledHeaderItem onClick={handleLogOut}>Logout</StyledHeaderItem>
      )}{" "}
    </StyledHeaderWrapper>
  );
};

export default Header;
