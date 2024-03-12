"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { resetGame } from "./lib/features/game/gameSlice";
import { AuthProvider } from "./AuthProvider";
import { useAppDispatch, useAppSelector } from "../hooks/rtkHooks";
import { Header } from "../components/shared/Header/Header";
import "../../src/styles/globalStyles.css";
import { useGetUserQuery, userApi } from "@/services/userApi";

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
      <Header />
      {children}
    </AuthProvider>
  );
};

export default GlobalComponent;
