import React, { useState } from "react";
import { Sidebar } from "@rewind-ui/core";
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useAppDispatch } from "@/hooks/rtkHooks";
import { expandSidebar } from "@/app/lib/features/sidebar/sidebarSlice";
import { GoHome } from "react-icons/go";
import { useRouter } from "next/navigation";
type Props = {
  onSelect: any;
};

const SideBar = ({ onSelect }: Props) => {
  const [expanded, setExpanded] = useState(true);
  const dispatch = useAppDispatch();
  const router = useRouter()
  const handleExpand = () => {
    setExpanded((prev) => !prev);
    dispatch(expandSidebar());
  };
  return (
    <Sidebar
      expanded={expanded}
      onToggle={() => handleExpand}
      onMouseEnter={() => null}
      className="relative h-screen min-w-[4rem] "
    >
      <Sidebar.Head>
        <Sidebar.Head.Title>Math Practice</Sidebar.Head.Title>

        <Sidebar.Head.Toggle />
      </Sidebar.Head>

      <Sidebar.Nav>
        <Sidebar.Nav.Section>
          <Sidebar.Nav.Section.Item
            className="mt-[1.2rem] text-lg"
            label="Home"
            onClick={()=>router.push('/')}
            icon={<GoHome />}
          />
          <Sidebar.Nav.Section.Item
            className="mt-[1.2rem] text-lg"
            onClick={() => onSelect("dashboard")}
            label="Dashboard"
            icon={<MdDashboard />}
          />
        </Sidebar.Nav.Section>

        <Sidebar.Nav.Section>
          <Sidebar.Nav.Section.Title className="text-lg">
            User
          </Sidebar.Nav.Section.Title>
          <Sidebar.Nav.Section.Item
            className="text-base"
            onClick={() => onSelect("profile")}
            icon={<FaUser />}
            label="Your Profile"
          />
          <Sidebar.Nav.Section.Item
            className="text-base"
            label="Settings & Privacy"
            as="button"
          >
            <Sidebar.Nav.Section isChild>
              <Sidebar.Nav.Section.Item
                className="text-base"
                icon={<span className="w-1 h-1 rounded bg-transparent" />}
                label="Settings"
              />
              <Sidebar.Nav.Section.Item
                className="text-base"
                icon={<span className="w-1 h-1 rounded bg-transparent" />}
                label="Choose Language"
                href="#"
              />
              <Sidebar.Nav.Section.Item
                className="text-base"
                icon={<span className="w-1 h-1 rounded bg-transparent" />}
                label="Privacy Center"
                href="#"
              />
            </Sidebar.Nav.Section>
          </Sidebar.Nav.Section.Item>
          <Sidebar.Nav.Section.Item
            className="text-base"
            label="Subscription & Upgrade"
            href="#"
          />
          <Sidebar.Nav.Section.Item
            className="text-base"
            label="Permissions"
            href="#"
          />
          <Sidebar.Nav.Section.Item
            className="text-base"
            label="Settings"
            href="#"
          />
        </Sidebar.Nav.Section>

        <Sidebar.Nav.Section>
          <Sidebar.Nav.Section.Title>Support</Sidebar.Nav.Section.Title>
          <Sidebar.Nav.Section.Item
            className="text-base"
            label="Contact"
            href="#"
          />
          <Sidebar.Nav.Section.Item
            className="text-base"
            label="Tickets"
            href="#"
          />
          <Sidebar.Separator />
          <Sidebar.Nav.Section.Item
            className="text-base"
            label="Documentation"
            href="#"
          />
        </Sidebar.Nav.Section>
      </Sidebar.Nav>
    </Sidebar>
  );
};

export default SideBar;
