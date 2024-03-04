"use client";
import { Avatar, Button } from "@rewind-ui/core";
import React from "react";
type Props = {};

const Profile = (props: Props) => {
  return (
    <main className="bg-[#eeeeee]">
      <section className="flex flex-col ml-8 ">
        <div className="rounded-md w-[14rem] h-[16rem] mt-4 bg-white flex flex-col justify-items-center items-center p-4">
          <Avatar color="purple" size="xl" tone="glossy" />
          <p className="mt-4">Dan Abramov</p>
          <p className="mt-4 font-extralight text-slate-600">Fast Learner</p>
          <p className="mt-4 font-thin text-slate-600">Baku, Azerbaijan</p>
          <div className="flex gap-2 mt-4">
            <Button className="h-6" color="blue">
              Edit
            </Button>
            <Button className="h-6  " tone="outline">
              Share
            </Button>
          </div>
        </div>
      
      </section>
    </main>
  );
};

export default Profile;
