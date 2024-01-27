"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { LoginData, RegisterData } from "@/interfaces";
import {
  LoginButton,
  LoginContainer,
  LoginForm,
  LoginInput,
  LoginTitle,
  StyledErrorMessage,
  StyledRegister,
} from "./styles";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

type Props = {};

const LoginPage = (props: Props) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [session, status, router]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterData>();

  const onSubmit = async ({ email, password }: LoginData) => {
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res?.error) {
        console.log(res.error);
        return;
      }
      router.push("/");
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
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <StyledErrorMessage>{errors.email.message}</StyledErrorMessage>
        )}

        <label htmlFor="password">Password</label>
        <LoginInput
          type="password"
          id="password"
          placeholder="Enter password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <StyledErrorMessage>{errors.password.message}</StyledErrorMessage>
        )}

        <LoginButton type="submit">Login</LoginButton>
        <StyledRegister
          onClick={() => router.push("/register")}
        >{`Don't have an account?`}</StyledRegister>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginPage;
