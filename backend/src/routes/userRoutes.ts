import { Router } from "express";
import User, { IUser } from "../models/UserModel";
import bcyrpt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userRouter = Router();

const JWT_SECRET = process.env.JWT_SECRET as string

userRouter.post("/register", async (req, res) => {
  try {
    const salt = await bcyrpt.genSalt(10)
    const hashedPassword = await bcyrpt.hash(req.body.password,salt)

    const user =  await User.findOne({email:req.body.email})
    if(user) return res.status(400).json({message:'User already exists'})

    const newUser:IUser=new User({
      username:req.body.username,
      email:req.body.email,
      password:hashedPassword
    })
    const savedUser = await newUser.save();
    const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    // Redirect with cookie and Location header
    res.setHeader("Set-Cookie", `jwt=${token}`);
    res.setHeader("Location", "/dashboard"); // Replace with your intended redirect URL
    res.status(302).send();
    
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
});

userRouter.post("/login", async (req,res)=>{
  try {
    const user = await User.findOne({email:req.body.email})
    if(!user) return res.status(400).json({message:`User doesn't exist`})
    const validPassword = await bcyrpt.compare(req.body.password,user.password)
    if(!validPassword) return res.status(400).json({message:'Email or password is wrong'})


    //Generate JWT
    const token = jwt.sign(
      {_id:user._id },
      JWT_SECRET,
      {expiresIn:'1h'}
    )

    res.setHeader("Set-Cookie", `jwt=${token}`);
    res.setHeader("Location", "/"); 
    res.status(302).send();
    
  } catch (error:any) {
    res.status(500).json({message:error.message})
  }
})

export default userRouter
