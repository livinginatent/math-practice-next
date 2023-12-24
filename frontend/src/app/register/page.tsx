"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import {  RegisterData } from "@/interfaces";
import {  RegisterButton, RegisterContainer, RegisterForm, RegisterInput, RegisterTitle} from "./styles";
import { useRouter } from "next/navigation";



const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterData>();
  const { registerUser,user } = useAuth();
  const router = useRouter();

useEffect(()=>{
if(user) router.push('/')
},[user])
  const onSubmit = (data: RegisterData) => {
    registerUser(data); // This should call the API to register the user
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

