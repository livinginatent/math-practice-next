"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { RegisterData } from "@/interfaces";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Button } from "@rewind-ui/core";

const RegisterPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<RegisterData>();

  const onSubmit = async ({ username, email, password }: RegisterData) => {
    try {
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
      if (res.ok) {
        await signIn("credentials", {
          email,
          password,
          redirect: false,
        });
        router.push("/");
      }
    } catch (error) {}
  };

  return (
    <main className="flex flex-row justify-center align-center items-center w-full h-full">
      <div className="bg-white p-10 w-3/12 mx-auto rounded-lg shadow-md">
        <form className="flex flex-col " onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username">Username</label>
          <input className="p-2.5 mb-2.5 border border-[#ccc] rounded-md"
            type="text"
            id="username"
            placeholder="Enter username"
            {...register("username", { required: true })}
          />
          {errors.username && <p>{errors.username.message}</p>}

          <label htmlFor="email">Email address</label>
          <input className="p-2.5 mb-2.5 border border-[#ccc] rounded-md"
            type="email"
            id="email"
            placeholder="Enter email"
            {...register("email", { required: true })}
          />
          {errors.email && <p>{errors.email.message}</p>}

          <label htmlFor="password">Password</label>
          <input className="p-2.5 mb-2.5 border border-[#ccc] rounded-md"
            type="password"
            id="password"
            placeholder="Enter password"
            {...register("password", { required: true })}
          />
          {errors.password && <p>{errors.password.message}</p>}

          <Button color="blue" type="submit">Register</Button>
        </form>
      </div>
    </main>
  );
};

export default RegisterPage;
