import React, { useState } from "react";
import { Sidebar, useSidebar } from "@rewind-ui/core";
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
type Props = {};

const SideBar = (props: Props) => {
  const [expanded, setExpanded] = useState(true);
  const [mobile, setMobile] = useState(false);
  const sidebar = useSidebar();
  return (
    <Sidebar
      className="relative min-w-[5rem]"
      onMouseEnter={() => setExpanded((prev) => !prev)}
    >
      <Sidebar.Head>
        <Sidebar.Head.Title>Math Practice</Sidebar.Head.Title>

        <Sidebar.Head.Toggle />
      </Sidebar.Head>
      <Sidebar.Nav>
        <Sidebar.Nav.Section>
          <Sidebar.Nav.Section.Item
            icon={<MdDashboard />}
            label="Dashboard"
            href="#"
            active
          />
        </Sidebar.Nav.Section>
        <Sidebar.Nav.Section.Title>User</Sidebar.Nav.Section.Title>
        <Sidebar.Nav.Section.Item
          icon={<FaUser />}
          label="Profile"
          href="#"
          active
        />
      </Sidebar.Nav>
    </Sidebar>
  );
};

export default SideBar;
