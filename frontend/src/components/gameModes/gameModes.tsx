import React from "react";
import myImage from "../../../addition-vertical-2x2digit-sums-under-100-a.gif";
import { gameModes } from "@/interfaces";
import Image from "next/image";

const GameModes = ({ title }: gameModes) => {
  return (
    <section
      className="flex h-[calc(100vh-60px)] items-center justify-center
"
    >
      <div className="border border-solid border-2 rounded-md m-2.5 text-center shadow-lg transition-transform duration-300 ease-in-out hover:scale-110">
        <p>{title}</p>
        <Image alt="Your Image" width={350} height={450} src={myImage}></Image>
      </div>
    </section>
  );
};

export default GameModes;
