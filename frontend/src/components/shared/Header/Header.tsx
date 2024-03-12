import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Corrected from 'next/navigation' to 'next/router'
import { signOut, useSession } from "next-auth/react";
import DropDown from "../Dropdown/Dropdown";
import { useGetUserQuery } from "@/services/userApi";

export const Header = () => {
  const router = useRouter();
  const { data: session, status } = useSession(); 
  const [username, setUsername] = useState("");
  const { data: userData } = useGetUserQuery(session?.user?.id || "", {
    skip: !session, 
  });

  useEffect(() => {
    if (userData?.username) {
      setUsername(userData.username);
    }
  }, [userData]);

  const handleLogOut = () => {
    signOut({ callbackUrl: "http://localhost:3000/login" });
  };

  

  return (
    <div className="flex items-center justify-between bg-[#fffbf5] rounded-md w-full">
      {session && username ? (
        <DropDown userName={username} />
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
