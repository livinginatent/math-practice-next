import  jwt  from 'jsonwebtoken';
import bcrypt from "bcrypt";
import { connectMongoDB } from "@/app/lib/db/mongodb";
import User from "@/app/models/userModel";
import { NextResponse } from "next/server";

export const POST = async (req: NextResponse) => {
  try {
    await connectMongoDB();
    const { username, email, password } = await req.json();
    const user = await User.findOne({ email });

    if (user)
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    // Generate a token for the new user
    const tokenData = {
      id: savedUser._id,
      username: savedUser.username,
      email: savedUser.email,
    };

    const token = jwt.sign(tokenData, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });

    // Set the token in the cookies
    const response = NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error },{status:400});
  }
};
