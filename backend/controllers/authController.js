import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs"
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { sendVerficationEmail } from "../nodeMailer/email.js";
// import express from "express";

export const signup = async (req, res) => {
  const { email, password, name } = req.body;
  
  try {
    if( !email || !password || !name ) {
      throw new Error("All fields are required");
    }
    const userAlreadyExists = await User.findOne({email});
    if( userAlreadyExists ) {
      return res.status(400).json({success: false, message: "User already exists"});
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();

    generateTokenAndSetCookie( res, user._id);
    sendVerficationEmail( email, verificationToken );
    const user = new User({
      email, password: hashedPassword, name, verificationToken, verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000
    });

    await user.save();
    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        ...user._doc,
        password: undefined
      }
    })

  } catch (error) {
    res.status(400).json({success: false, message: error.message});
  }
};

// export const login = async (res, req) => {
//   res.send("This is login Page!");
// }