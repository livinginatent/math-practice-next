'use client'
import Welcome from "@/components/welcome/Welcome";
import { useAppDispatch } from "@/hooks/rtkHooks";
import { useEffect } from "react";
import { resetGame } from "./lib/features/user/userSlice";

export default function Home() {
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(resetGame())
  })
  return (
    <>
      <Welcome />
    </>
  );
}
