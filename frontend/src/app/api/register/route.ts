import jwt from "jsonwebtoken";
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
    await newUser.save();
    

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
};
