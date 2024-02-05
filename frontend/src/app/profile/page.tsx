"use client";
import React, { useState } from "react";
import { StyledCollapseBtn, StyledProfileWrapper } from "./styles";
import { SideBar } from "@/components/Sidebar/Sidebar";

type Props = {};

const MyProfile = (props: Props) => {
  return (
    <StyledProfileWrapper>
      <SideBar/>
    </StyledProfileWrapper>
  );
};

export default MyProfile;
