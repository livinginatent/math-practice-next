"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import { RegisterData } from "@/interfaces";
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
    formState: { errors },
  } = useForm<RegisterData>();
  const { loginUser, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) router.push("/");
  }, [user]);
  const onSubmit = (data: RegisterData) => {
    loginUser(data); // This should call the API to register the user
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
