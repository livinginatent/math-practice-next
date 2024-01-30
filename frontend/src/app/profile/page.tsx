"use client";
import React, { useState } from "react";
import ProfileSideBar from "@/components/profileSideBar/ProfileSideBar";
import { StyledCollapseBtn, StyledProfileWrapper } from "./styles";

type Props = {};

const MyProfile = (props: Props) => {

  return (
    <StyledProfileWrapper>
      <ProfileSideBar />
      
    </StyledProfileWrapper>
  );
};

export default MyProfile;
