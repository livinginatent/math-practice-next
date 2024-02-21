"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { LoginData, RegisterData } from "@/interfaces";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { Button } from "@rewind-ui/core";

type Props = {};

const LoginPage = (props: Props) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [error, setError] = useState("");
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [session, status, router]);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<RegisterData>({ mode: "onSubmit" });

  const onSubmit = async ({ email, password }: LoginData) => {
    setError("");
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res?.error) {
        setError("Username or password is incorrect"); // Set the actual error message received from signIn
        return;
      }
      router.push("/");
    } catch (error) {}
  };

  return (
    <main className="flex flex-row justify-center align-center items-center w-full h-full">
      <div className="bg-white p-10 w-3/12 mx-auto rounded-lg shadow-md">
        <form className="flex flex-col " onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">Email address</label>
          <input
            className="p-2.5 mb-2.5 border border-[#ccc] rounded-md"
            type="email"
            id="email"
            placeholder="Enter email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="m-0 text-red-500">{errors.email.message}</p>
          )}
          <label htmlFor="password">Password</label>
          <input
            className="p-2.5 mb-2.5 border border-[#ccc] rounded-md"
            type="password"
            id="password"
            placeholder="Enter password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="m-0 text-red-500">{errors.password.message}</p>
          )}
          <Button className="mt-2" color="blue" type="submit">
            Login
          </Button>
          {error && <p className="m-0 text-red-500">{error}</p>}
          <Button
            className="mt-4"
            onClick={(e: any) => {
              e.preventDefault();
              router.push("/register");
            }}
          >{`Don't have an account?`}</Button>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
