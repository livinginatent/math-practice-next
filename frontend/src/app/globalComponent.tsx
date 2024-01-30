"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { resetGame } from "./lib/features/user/userSlice";
import StyledComponentsRegistry from "./registry";
import Header from "@/components/shared/Header/Header";
import { useAppDispatch } from "@/hooks/rtkHooks";
import { AuthProvider } from "./AuthProvider";


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
