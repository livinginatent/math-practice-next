import React, { useEffect, useState } from "react";
import { StyledHeaderItem, StyledHeaderWrapper } from "./styles";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import DropDown from "../Dropdown/Dropdown";
export const Header = () => {
  const router = useRouter()
  const handleLogOut = () => {
    signOut({ callbackUrl: "http://localhost:3000/login" });
  };
  const { data: session } = useSession();
  const user = session?.user;
  const username = user?.username

  return (
    <StyledHeaderWrapper>
      {user ? (
        <DropDown userName={username} />
      ) : (
        <StyledHeaderItem onClick={() => router.push("/login")}>
          Sign In
        </StyledHeaderItem>
      )}{" "}
      {session && (
        <StyledHeaderItem onClick={handleLogOut}>Logout</StyledHeaderItem>
      )}{" "}
    </StyledHeaderWrapper>
  );
};


