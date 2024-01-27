import { getDataFromToken } from "@/app/lib/auth/getUser";
import { connectMongoDB } from "@/app/lib/db/mongodb";
import User from "@/app/models/userModel";
import { NextRequest, NextResponse } from "next/server";


export const GET = async(request: NextRequest) => {
  try {
    await connectMongoDB()
    // Extract user ID from the authentication token
    const userId = await getDataFromToken(request);

    // Find the user in the database based on the user ID
    const user = await User.findOne({ _id: userId }).select("-password");
    return NextResponse.json({
      message: "User found",
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
