'use client'
import { useEffect, useState } from "react";
import * as authService from "../services/authService";
import { LoginData, RegisterData } from "@/interfaces";

export const useAuth = () => {
  const [user, setUser] = useState({});

    useEffect(() => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }, []);

  const registerUser = async (userData:RegisterData) => {
    try {
      const response = await authService.register(userData);
      setUser(response.data)
    } catch (error) {
      // Handle error
    }
  };

  const loginUser = async (userData:LoginData) => {
    try {
      const response = await authService.login(userData);
     localStorage.setItem("user", JSON.stringify(response.data));
     setUser(response.data);
    } catch (error) {
      // Handle error
    }
  };

 

  return { user, registerUser, loginUser };
};
