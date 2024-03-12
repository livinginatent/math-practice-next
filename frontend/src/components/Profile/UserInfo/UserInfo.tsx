"use client";
import { getUser } from "@/app/lib/me/me";
import updateUser from "@/app/lib/updateUser";
import User from "@/app/models/userModel";
import { useGetUserQuery, useUpdateUserMutation } from "@/services/userApi";
import { Button, Card, Input } from "@rewind-ui/core";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

type Props = {};

const UserInfo = (props: Props) => {
  const [updateUser] = useUpdateUserMutation(); // Use the mutation hook
  const { data: userData } = useGetUserQuery("api/me");
  const [userInfo, setUserInfo] = useState({
    Name: "",
    Email: "",
    Mobile: "+994558801868",
    Address: "Baku, Azerbaijan",
  });

  useEffect(() => {
    if (userData) {
      setUserInfo((prev) => ({
        ...prev,
        Name: userData.username || "",
        Email: userData.email || "",
      }));
    }
  }, [userData]);

  const [isEditing, setIsEditing] = useState(false);

const handleSave = async () => {
    const { Email, Name } = userInfo;
    if (Email && Name) {
      // Use the updateUser mutation here
      await updateUser({ email: Email, username: Name }).unwrap();
      // No need to manually refetch; invalidation will trigger a refetch
    } else {
      console.error("Invalid Email or Name");
    }
    setIsEditing(false);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  return (
    <div className="w-3/4 mt-4 ml-8">
      <Card className="h-[20rem]">
        {Object.entries(userInfo).map(([key, value], index) => (
          <Card.Body
            key={index}
            className="h-16 flex justify-between items-center"
          >
            {isEditing ? (
              <>
                {key}{" "}
                <div className="">
                  <Input
                    name={key}
                    value={value}
                    onChange={handleChange}
                    className="h-12 flex justify-between items-center"
                  />
                </div>
              </>
            ) : (
              <>
                {key} {<p className="font-extralight">{value}</p>}
              </>
            )}
          </Card.Body>
        ))}
      </Card>
      <div className="flex flex-col items-end mt-1">
        {isEditing ? (
          <Button onClick={() => handleSave()}>Save changes</Button>
        ) : (
          <Button
            onClick={() => setIsEditing((prev) => !prev)}
            tone="outline"
            className="hover:bg-[#D8D9DA]"
          >
            Edit your information
          </Button>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
