// const nodemailer = require("nodemailer");
import nodemailer from "nodemailer"
import { configDotenv } from "dotenv";

configDotenv();
const admin_user = process.env.EMAIL_USER;
const admin_pass = process.env.EMAIL_PASS;
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: true, // true for port 465, false for other ports
  auth: {
    // user: `${process.env.EMAIL_USER}`,
    // pass: `${process.env.EMAIL_PASS}`
    // user: "welcome.travelbuddy@gmail.com", 
    // pass: "gydipektspgzydmd"
    user: admin_user, 
    pass: admin_pass
  },
});
// async..await is not allowed in global scope, must use a wrapper
export async function sendMail( to, subject, text, html) {
  // send mail with defined transport object
  const admin_user = "welcome.travelbuddy@gmail.com";
  const info = await transporter.sendMail({
    from: admin_user, // sender address
    to, // list of receivers
    subject, // Subject line
    text, // plain text body
    html
  })
}


