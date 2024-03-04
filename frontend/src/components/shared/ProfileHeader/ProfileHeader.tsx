import { ProfileHeader } from "@/interfaces";
import { Button, Card } from "@rewind-ui/core";
import React from "react";
import { Avatar } from "@rewind-ui/core";

const ProfileHeader = ({ path }: ProfileHeader) => {
  return (
    <nav className="w-full flex items-center justify-between h-10 bg-[#1e293b]">
      <Button
        tone="transparent"
        className="ml-6 text-white hover:text-slate-300"
      >
        Achievements & Badges
      </Button>
      <Button tone="transparent" className="text-white hover:text-slate-300">
        Addition Stats
      </Button>
      <Button tone="transparent" className="text-white hover:text-slate-300">
        Subtraction Stats
      </Button>
      <Button tone="transparent" className="text-white hover:text-slate-300">
        Multiplication Stats
      </Button>
      <Button tone="transparent" className="text-white hover:text-slate-300">
        Division Stats
      </Button>
      <Card className="bg-transparent " radius="sm" bordered={false}>
        <Card.Body className="flex space-x-3 py-1 items-center align-center">
          <Avatar
            src="https://avatars.githubusercontent.com/u/810438?s=96&v=4"
            initials="DA"
            alt="Dan Abramov"
            size="xs"
          />
          <div className="flex flex-col">
            <div className="font-small text-white text-base">Dan Abramov</div>
            <div className="text-gray-400 text-xs">Rank: 1</div>
          </div>
        </Card.Body>
      </Card>
    </nav>
  );
};

export default ProfileHeader;
