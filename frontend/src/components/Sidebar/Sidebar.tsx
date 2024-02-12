import React, { useState } from "react";
import {
  Button,
  Overlay,
  Sidebar,
  SidebarState,
  useSidebar,
} from "@rewind-ui/core";
type Props = {};

const SideBar = (props: Props) => {
  const [expanded, setExpanded] = useState(true);
  const [mobile, setMobile] = useState(false);
  const sidebar = useSidebar();
  return (
    <div className="relative flex flex-row w-full h-full min-h-[35rem]">
      <Sidebar
        onMouseEnter={() => setExpanded((prev) => !prev)}
        className="absolute min-h-[35rem]"
      >
        <Sidebar.Head>
          <Sidebar.Head.Logo></Sidebar.Head.Logo>
          <Sidebar.Head.Title>Rewind-UI</Sidebar.Head.Title>
          <Sidebar.Head.Toggle />
        </Sidebar.Head>

        <Sidebar.Nav>
          <Sidebar.Nav.Section>
            <Sidebar.Nav.Section.Item label="Dashboard" href="#" active />
          </Sidebar.Nav.Section>
          <Sidebar.Nav.Section>
            <Sidebar.Nav.Section.Title>Management</Sidebar.Nav.Section.Title>
            <Sidebar.Nav.Section.Item label="Clients" href="#" />
            <Sidebar.Nav.Section.Item label="Users" as="button">
              <Sidebar.Nav.Section isChild>
                <Sidebar.Nav.Section.Item
                  icon={<span className="w-1 h-1 rounded bg-transparent" />}
                  label="List all"
                  href="#"
                />
                <Sidebar.Nav.Section.Item
                  icon={<span className="w-1 h-1 rounded bg-transparent" />}
                  label="Add new"
                  href="#"
                />
                <Sidebar.Nav.Section.Item
                  icon={<span className="w-1 h-1 rounded bg-transparent" />}
                  label="Archived"
                  href="#"
                />
              </Sidebar.Nav.Section>
            </Sidebar.Nav.Section.Item>
            <Sidebar.Nav.Section.Item label="Roles" href="#" />
            <Sidebar.Nav.Section.Item label="Permissions" href="#" />
            <Sidebar.Nav.Section.Item label="Settings" href="#" />
          </Sidebar.Nav.Section>

          <Sidebar.Nav.Section>
            <Sidebar.Nav.Section.Title>Support</Sidebar.Nav.Section.Title>
            <Sidebar.Nav.Section.Item label="Contact" href="#" />
            <Sidebar.Nav.Section.Item label="Tickets" href="#" />
            <Sidebar.Separator />
            <Sidebar.Nav.Section.Item label="Documentation" href="#" />
          </Sidebar.Nav.Section>
        </Sidebar.Nav>

        <Sidebar.Footer>
          <div className="flex flex-col justify-center items-center text-sm">
            <span className="font-semibold">Rewind-UI</span>
            <span>version x.y.z</span>
          </div>
        </Sidebar.Footer>
      </Sidebar>
    </div>
  );
};

export default SideBar;
