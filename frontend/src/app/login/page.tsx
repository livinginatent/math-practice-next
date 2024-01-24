"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { LoginData, RegisterData } from "@/interfaces";
import {
  LoginButton,
  LoginContainer,
  LoginForm,
  LoginInput,
  LoginTitle,
} from "./styles";
import { useRouter } from "next/navigation";


type Props = {};

const LoginPage = (props: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterData>();

  const router = useRouter()

  const onSubmit = async ({ email, password }: LoginData) => {
    try {
      const res = await fetch("api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (res.ok) {
        reset();
        router.push('/')
      }
    } catch (error) {}
  };

  return (
    <LoginContainer>
      <LoginTitle>Login</LoginTitle>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email address</label>
        <LoginInput
          type="email"
          id="email"
          placeholder="Enter email"
          {...register("email", { required: true })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label htmlFor="password">Password</label>
        <LoginInput
          type="password"
          id="password"
          placeholder="Enter password"
          {...register("password", { required: true })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <LoginButton type="submit">Login</LoginButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginPage;
