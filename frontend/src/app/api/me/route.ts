import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { connectMongoDB } from "@/app/lib/db/mongodb";
import User from "@/app/models/userModel";

export const GET = async (req: any, res: any) => {
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

    // Return only the userStats instead of the entire user object
    return new Response(JSON.stringify({ userStats: user.userStats }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response("Internal server error", { status: 500 });
  }
};
