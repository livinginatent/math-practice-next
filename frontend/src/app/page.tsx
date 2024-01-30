import Welcome from "@/components/welcome/Welcome";
import { useAppDispatch } from "@/hooks/rtkHooks";
import { useEffect } from "react";
import { resetGame } from "./lib/features/user/userSlice";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <>
      <Welcome />
    </>
  );
}
