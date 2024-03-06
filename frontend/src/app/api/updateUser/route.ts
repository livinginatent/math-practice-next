import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { connectMongoDB } from "@/app/lib/db/mongodb";
import User from "@/app/models/userModel";

export const PATCH = async (req: any, res: any) => {
  const body = await req.json();
  const { username, email } = body;

  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new Response(
        JSON.stringify({ message: "User not authenticated" }),
        { status: 401 }
      );
    }

    await connectMongoDB();
    const user = await User.findById(session.user.id);
    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    await User.findByIdAndUpdate(
      { _id: user.id },
      { $set: { name: username, email: email } },
      { new: true }
    );

    return new Response(
      JSON.stringify({ message: "User updated successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: "internal server error" }), {
      status: 500,
    });
  }
};
