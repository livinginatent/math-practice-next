'use client'
import React from "react";
import { useForm } from "react-hook-form";
import { RegisterData } from "@/interfaces";
import {
  RegisterButton,
  RegisterContainer,
  RegisterForm,
  RegisterInput,
  RegisterTitle,
} from "./styles";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";


const RegisterPage =  () => {

  
  const router = useRouter()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterData>();

  const onSubmit = async ({
    username,
    email,
    password,
  }: RegisterData) => {
    
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
         // Assuming your API returns the username and password upon successful registration
         const userData = await res.json();
         signIn("credentials", {
           username: userData.username,
           password: userData.password,
           
         });
         reset();
         router.push("/");
       }
    } catch (error) {}
  };

  return (
    <RegisterContainer>
      <RegisterTitle>Register</RegisterTitle>
      <RegisterForm onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <RegisterInput
          type="text"
          id="username"
          placeholder="Enter username"
          {...register("username", { required: true })}
        />
        {errors.username && <p>{errors.username.message}</p>}

        <label htmlFor="email">Email address</label>
        <RegisterInput
          type="email"
          id="email"
          placeholder="Enter email"
          {...register("email", { required: true })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label htmlFor="password">Password</label>
        <RegisterInput
          type="password"
          id="password"
          placeholder="Enter password"
          {...register("password", { required: true })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <RegisterButton type="submit">Register</RegisterButton>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default RegisterPage;
