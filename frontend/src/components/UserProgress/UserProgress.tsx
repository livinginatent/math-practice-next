import { Card, Progress } from "@rewind-ui/core";
import React from "react";

type Props = {};

const UserProgress = (props: Props) => {
  return (
     
      <div className="flex gap-4 w-1/2 ml-8"> {/* Added flex-wrap for responsiveness */}
        <Card className=" md:w-1/2"> {/* Adjusted width */}
          <Card.Header>Player Progress</Card.Header>
          <Card.Body>
            <p className="font-medium">Achievements</p>
            <Progress
              color="blue"
              size="sm"
              animated={true}
              value={75}
              striped={true}
              label="Getting there!"
            ></Progress>
            <p className="font-medium">Badges</p>
            <Progress
              color="blue"
              size="sm"
              animated={true}
              value={60}
              striped={true}
              label="Still some left!"
            ></Progress>
          </Card.Body>
        </Card>
        <Card className="w-full md:w-1/2"> {/* Adjusted width */}
          <Card.Header>Skill Progress</Card.Header>
          <Card.Body>
            <p className="font-medium">Accuracy</p>
            <Progress
              color="blue"
              size="sm"
              animated={true}
              value={75}
              striped={true}
              label="You are getting better"
            ></Progress>
            <p className="font-medium">Speed</p>
            <Progress
              color="blue"
              size="sm"
              animated={true}
              value={60}
              striped={true}
              label="Could be faster"
            ></Progress>
          </Card.Body>
        </Card>
      </div>
  
  );
};

export default UserProgress;
