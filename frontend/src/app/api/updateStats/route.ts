import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { connectMongoDB } from "@/app/lib/db/mongodb";
import User from "@/app/models/userModel";

export const PATCH = async (req: any, res: any) => {
  const body = await req.json();

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
    user.userStats.totalGamesPlayed++;
    user.userStats.totalScore += body.finalScore;
    if (body.operation === "addition") {
      user.userStats.totalAdditionPlayed++;
      user.userStats.totalAdditionScore += body.finalScore;
      user.userStats.highestAdditionScore = Math.max(
        user.userStats.highestAdditionScore,
        body.finalScore
      );
    } else if (body.operation === "subtraction") {
      user.userStats.totalSubtractionPlayed++;
      user.userStats.totalSubtractionScore += body.finalScore;
      user.userStats.highestSubtractionScore = Math.max(
        user.userStats.highestSubtractionScore,
        body.finalScore
      );
    } else if (body.operation === "multiplication") {
      user.userStats.totalMultiplicationPlayed++;
      user.userStats.totalMultiplicationScore += body.finalScore;
      user.userStats.highestMultiplicationScore = Math.max(
        user.userStats.highestMultiplicationScore,
        body.finalScore
      );
    } else if (body.operation === "division") {
      user.userStats.totalDivisionPlayed++;
      user.userStats.totalDivisionScore += body.finalScore;
      user.userStats.highestDivisionScore = Math.max(
        user.userStats.highestDivisionScore,
        body.finalScore
      );
    } else {
      user.userStats.totalOrderedPlayed++;
      user.userStats.totalOrderedScore += body.finalScore;
      user.userStats.highestOrderedScore = Math.max(
        user.userStats.highestOrderedScore,
        body.finalScore
      );
    }
    await User.findByIdAndUpdate(
      { _id: user.id },
      { $set: { userStats: user.userStats } },
      { new: true }
    );

    return new Response("Stats updated", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("internal server error", { status: 500 });
  }
};
