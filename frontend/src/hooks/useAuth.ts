'use client'
import { useState } from "react";
import * as authService from "../services/authService";
import { LoginData, RegisterData } from "@/interfaces";

export const useAuth = () => {
  const [user, setUser] = useState(null);

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
      // Handle response, set user
      setUser(response.data)
    } catch (error) {
      // Handle error
    }
  };

  return { user, registerUser, loginUser };
};
