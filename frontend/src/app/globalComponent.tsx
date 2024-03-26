"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { resetGame } from "./lib/features/game/gameSlice";
import { AuthProvider } from "./AuthProvider";
import { useAppDispatch, useAppSelector } from "../hooks/rtkHooks";
import { Header } from "../components/shared/Header/Header";
import "../../src/styles/globalStyles.css";
import { useGetUserQuery } from "@/services/userApi";
import { setUser } from "./lib/features/user/userSlice";

const GlobalComponent = ({ children }: any) => {
  const path = usePathname();
  const dispatch = useAppDispatch();
  const { data: userData, status } = useGetUserQuery("api/me");
  const user = useAppSelector((state) => state.user);
  const[userName,setUserName] = useState('')
  

  useEffect(() => {
    if (!path.includes("/challenges")) {
      dispatch(resetGame());
    }
    if (userData) {
      dispatch(setUser(userData));
    }
    setUserName(user.userInfo?.username);
  }, [path, dispatch, userData, user.userInfo?.username]);

  return (
    <AuthProvider>
      <Header userName={userName} />
      {children}
    </AuthProvider>
  );
};

export default GlobalComponent;
