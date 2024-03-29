import { useAppSelector } from "@/hooks/rtkHooks";
import { Avatar, Button } from "@rewind-ui/core";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

type Props = {};

const UserCard = (props: Props) => {
  const user = useAppSelector((state) => state.user);

  const [userName, setUsername] = useState("");
  useEffect(() => {
    if (user) {
      setUsername(user.userInfo?.username);
    }
  },[user]);
  return (
    <div className="rounded-md w-[14rem] h-[20rem] mt-4 bg-white flex flex-col justify-items-center items-center p-4">
      <Avatar
        src="https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/032/medium/oapgW_Fp_400x400.jpg"
        color="purple"
        size="xl"
        tone="glossy"
      />
      <p className="mt-4 h-10">{userName}</p>
      <p className="mt-4 h-10 font-extralight text-slate-600">Fast Learner</p>
      <p className="mt-4 h-10 font-thin text-slate-600">Premium User</p>
      <div className="flex mt-4">
        <Button className="h-6  " tone="outline">
          Share
        </Button>
      </div>
    </div>
  );
};

export default UserCard;
