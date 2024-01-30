import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { connectMongoDB } from "@/app/lib/db/mongodb";
import User from "@/app/models/userModel";

export const PATCH = async (req:any, res: any) => {
  if (req.method !== "PATCH") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new Response("User not authenticated", { status: 401 });
    }

    await connectMongoDB();
    const user = await User.findById(session.user.id);
    if (!user) {
      return new Response("User not found", { status: 404 });
    }

    user.userStats.totalGamesPlayed++; // Example of stat update
    await user.save();

    return new Response("Stats updated", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("internal server error", { status: 500 });
  }
};
