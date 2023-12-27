"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { resetGame } from "./lib/features/user/userSlice";
import { Providers } from "./lib/provider";
import StyledComponentsRegistry from "./registry";
import Header from "@/components/shared/Header/Header";
import { useAppDispatch } from "@/hooks/rtkHooks";

const GlobalComponent = ({ children }: any) => {
  const path = usePathname();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!path.includes("/challenges")) {
      dispatch(resetGame());
    }
  }, [path, dispatch]);

  return (
    <StyledComponentsRegistry>
      <Header />
      {children}
    </StyledComponentsRegistry>
  );
};

export default GlobalComponent;
