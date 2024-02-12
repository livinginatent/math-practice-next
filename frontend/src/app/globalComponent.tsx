"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { resetGame } from "./lib/features/user/userSlice";
import StyledComponentsRegistry from "./registry";
import { AuthProvider } from "./AuthProvider";
import { useAppDispatch } from "../hooks/rtkHooks";
import { Header } from "../components/shared/Header/Header";
import "../../src/styles/globalStyles.css";
import SideBar from "../components/Sidebar/Sidebar";

const GlobalComponent = ({ children }: any) => {
  const path = usePathname();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!path.includes("/challenges")) {
      dispatch(resetGame());
    }
  }, [path, dispatch]);

  return (
    <AuthProvider>
      <StyledComponentsRegistry>
        <Header />
        {children}
      </StyledComponentsRegistry>
    </AuthProvider>
  );
};

export default GlobalComponent;
