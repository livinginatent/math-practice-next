import { StyledCollapseBtn } from "@/app/profile/styles";
import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {IconArrowLeft, IconArrowRight} from "./icons";

type Props = {};

const ProfileSideBar = (props: Props) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Sidebar collapsed={collapsed}>
        <Menu>
          <MenuItem> Overview </MenuItem>
          <MenuItem> Achievements & Badges </MenuItem>
          <MenuItem> Settings & Preferences </MenuItem>
          <MenuItem>  </MenuItem>
        </Menu>
      </Sidebar>
      <StyledCollapseBtn onClick={() => setCollapsed(!collapsed)}>
        {!collapsed ? <IconArrowLeft /> : <IconArrowRight />}
      </StyledCollapseBtn>
    </>
  );
};

export default ProfileSideBar;
