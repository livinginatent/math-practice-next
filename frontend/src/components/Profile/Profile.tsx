"use client";
import { Avatar, Button, Card } from "@rewind-ui/core";
import React from "react";
import { SlBadge } from "react-icons/sl";
import { FaRegChartBar } from "react-icons/fa";
import { BiMath } from "react-icons/bi";
import UserInfo from "../UserInfo/UserInfo";
import UserProgress from "../UserProgress/UserProgress";
import { GoTrophy } from "react-icons/go";
type Props = {};

const Profile = (props: Props) => {
  return (
    <main className="bg-[#eeeeee] h-screen ">
      <section className="flex flex-col ml-8 gap-4 ">
        <div className="flex">
          <div className="rounded-md w-[14rem] h-[16rem] mt-4 bg-white flex flex-col justify-items-center items-center p-4">
            <Avatar
              src="https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/032/medium/oapgW_Fp_400x400.jpg"
              color="purple"
              size="xl"
              tone="glossy"
            />
            <p className="mt-4">Dan Abramov</p>
            <p className="mt-4 font-extralight text-slate-600">Fast Learner</p>
            <p className="mt-4 font-thin text-slate-600">Baku, Azerbaijan</p>
            <div className="flex mt-4">
              <Button className="h-6  " tone="outline">
                Share
              </Button>
            </div>
          </div>
          <UserInfo />
        </div>

        <div className="flex">
          <Card className="w-[14rem] h-50">
            <Card.Body className="flex h-10 flex-row gap-2 justify-items-center items-center p-2 font-light">
              {<SlBadge />}Total Badges: 20
            </Card.Body>
            <Card.Body className="flex h-10 flex-row gap-2 justify-items-center items-center p-2 font-light">
              {<FaRegChartBar />} Skill Level: Expert
            </Card.Body>
            <Card.Body className="flex h-10 flex-row gap-2 justify-items-center items-center p-2 font-light">
              {<GoTrophy />} Rank: Addition
            </Card.Body>
            <Card.Body className="flex  flex-row gap-2 justify-items-center items-center p-2 font-light">
              {<BiMath />} Favourite Challenge: Addition
            </Card.Body>
          </Card>
          <UserProgress />
        </div>
      </section>
    </main>
  );
};

export default Profile;
