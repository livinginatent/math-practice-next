import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import DropDown from "../Dropdown/Dropdown";
export const Header = () => {
  const router = useRouter();
  const handleLogOut = () => {
    signOut({ callbackUrl: "http://localhost:3000/login" });
  };
  const { data: session } = useSession();
  const user = session?.user;
  const username = user?.username;

  return (
    <div className="flex items-center justify-between bg-[#fffbf5] rounded-md w-full">
      {user ? (
        <DropDown userName={username} />
      ) : (
        <div
          className="m-4 no-underline text-[#333] font-bold cursor-pointer hover:text-black"
          onClick={() => router.push("/login")}
        >
          Sign In
        </div>
      )}{" "}
      {session && (
        <div
          className="m-4 no-underline text-[#333] font-bold cursor-pointer hover:text-black"
          onClick={handleLogOut}
        >
          Logout
        </div>
      )}{" "}
    </div>
  );
};
