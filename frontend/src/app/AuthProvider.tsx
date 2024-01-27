"use client"
import { SessionProvider } from "next-auth/react";
import { AnyNode } from "postcss";
export const AuthProvider = ({children}:any) => {
  return <SessionProvider>{children}</SessionProvider>
}
