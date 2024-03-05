"use client";
import { Button, Card } from "@rewind-ui/core";
import React from "react";

type Props = {};

const UserInfo = (props: Props) => {
  return (
    <div className="w-1/2 h-1/2 mt-4 ml-8">
      <Card>
        <Card.Body className="h-12  flex justify-between items-center  ">
          Full Name {<p className="font-extralight">Dan Abramov</p>}
        </Card.Body>
        <Card.Body className="h-12  flex justify-between items-center ">
          Email {<p className="font-extralight">dan.abramov@gmail.com</p>}
        </Card.Body>
        <Card.Body className="h-12  flex justify-between items-center ">
          Mobile {<p className="font-extralight">+994558801868</p>}
        </Card.Body>
        <Card.Body className="h-12  flex justify-between items-center ">
          Address {<p className="font-extralight">Baku, Azerbaijan</p>}
        </Card.Body>
      </Card>
      <div className="flex flex-col items-end mt-1">
        <Button tone="outline" className=" ">
          Edit your information
        </Button>
      </div>
    </div>
  );
};

export default UserInfo;
