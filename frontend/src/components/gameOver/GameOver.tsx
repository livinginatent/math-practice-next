import { GameOverComponent } from "@/interfaces";
import React from "react";

import { Button } from "@rewind-ui/core";

const GameOver = ({ lostBy, newGame, finalScore }: GameOverComponent) => {
  return (
    <div className="flex bg-[#fff6f6] rounded-lg text-4xl text-center items-center flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/3">
      <p className="mt-6">You lost because you ran out of {lostBy}</p>
      <p className="mt-6">Final Score: {finalScore}</p>
      <Button color="gray" className="mt-6 font-semibold" onClick={newGame}>Play Again!</Button>
    </div>
  );
};

export default GameOver;
