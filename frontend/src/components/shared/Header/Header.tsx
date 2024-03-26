import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import DropDown from "../Dropdown/Dropdown";
import { useAppSelector } from "@/hooks/rtkHooks";

export const Header = ({ userName }: any) => {
  const router = useRouter();
  const { data: session } = useSession();

  const user = useAppSelector((state) => state.user);

  const handleLogOut = () => {
    signOut({ callbackUrl: "http://localhost:3000/login" });
  };

  return (
    <div className="flex items-center justify-between bg-[#fffbf5] rounded-md w-full">
      {session ? (
        <DropDown userName={userName ? userName : " test"} />
      ) : (
        <div
          className="m-4 no-underline text-[#333] font-bold cursor-pointer hover:text-black"
          onClick={() => router.push("/login")}
        >
          Sign In
        </div>
      )}
      {session && (
        <div
          className="m-4 no-underline text-[#333] font-bold cursor-pointer hover:text-black"
          onClick={handleLogOut}
        >
          Logout
        </div>
      )}
    </div>
  );
};
