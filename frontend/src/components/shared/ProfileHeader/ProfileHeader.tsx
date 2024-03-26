import { ProfileHeader } from "@/interfaces";
import { Button, Card } from "@rewind-ui/core";
import React, { useEffect, useState } from "react";
import { Avatar } from "@rewind-ui/core";
import { useGetUserQuery } from "@/services/userApi";
import { useAppSelector } from "@/hooks/rtkHooks";

const ProfileHeader = ({ path }: ProfileHeader) => {
   const user = useAppSelector((state) => state.user);
    const [userName,setUserName] = useState('')
    useEffect(()=>{
      if(user)setUserName(user.userInfo?.username)
    },[user])

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
            <div className="font-small text-white text-base">{userName}</div>
            <div className="text-gray-400 text-xs">Rank: 1</div>
          </div>
        </Card.Body>
      </Card>
    </nav>
  );
};

export default ProfileHeader;
