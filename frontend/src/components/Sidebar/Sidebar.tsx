import { Sidebar, useSidebar } from "@rewind-ui/core";
import Image from "next/image";
import { useState } from "react";

export const SideBar =  () => {
  const [expanded, setExpanded] = useState(true);
  const [mobile, setMobile] = useState(false);
  const sidebar = useSidebar();

  return (
   
      <Sidebar>
        <Sidebar.Head>
          <Sidebar.Head.Logo>
            <Image
              src="/images/rewind.svg"
              width={48}
              height={48}
              alt="Rewind-UI"
            />
          </Sidebar.Head.Logo>
          <Sidebar.Head.Title>Rewind-UI</Sidebar.Head.Title>
          <Sidebar.Head.Toggle />
        </Sidebar.Head>
      </Sidebar>
  );
}
