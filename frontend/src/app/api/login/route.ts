import  jwt  from 'jsonwebtoken';
import  bcrypt  from 'bcrypt';
import { connectMongoDB } from "@/app/lib/db/mongodb";
import User from "@/app/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req:NextRequest) => {
  try {
    await connectMongoDB()
    const {email, password } = await req.json();
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      );
    }
     const validPassword = await bcrypt.compare(password, user.password);
     if (!validPassword) {
       return NextResponse.json({ error: "Invlid password" }, { status: 400 });
     }
      const tokenData = {
        id: user._id,
        username: user.username,
        email: user.email,
      };

      
      const token = await jwt.sign(tokenData, process.env.JWT_SECRET!, {
        expiresIn: "1d",
      });

      
      const response = NextResponse.json({
        message: "Login successful",
        success: true,
      });

      
      response.cookies.set("token", token, {
        httpOnly: true,
      });

      return response;

  } catch (error:any) {
    return NextResponse.json({ error:error.message }, { status: 500 });
  }
}