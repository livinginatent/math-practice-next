import { Card } from '@rewind-ui/core';
import React from 'react'
import { BiMath } from 'react-icons/bi';
import { FaRegChartBar } from 'react-icons/fa';
import { GoTrophy } from 'react-icons/go';
import { SlBadge } from 'react-icons/sl';

type Props = {}

const UserAchievements = (props: Props) => {
  return (
    <Card className="w-[14rem] h-50">
      <Card.Body className="flex h-10 flex-row gap-2 justify-items-center items-center p-2 font-light">
        {<SlBadge />}Total Badges: 20
      </Card.Body>
      <Card.Body className="flex h-10 flex-row gap-2 justify-items-center items-center p-2 font-light">
        {<FaRegChartBar />} Skill Level: Expert
      </Card.Body>
      <Card.Body className="flex h-10 flex-row gap-2 justify-items-center items-center p-2 font-light">
        {<GoTrophy />} Rank: 12
      </Card.Body>
      <Card.Body className="flex  flex-row gap-2 justify-items-center items-center p-2 font-light">
        {<BiMath />} Favourite Challenge: Addition
      </Card.Body>
    </Card>
  );
}

export default UserAchievements