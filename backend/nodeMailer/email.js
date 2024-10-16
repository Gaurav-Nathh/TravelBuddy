import { sendMail } from "./verifiyToken.js"
import { VERIFICATION_EMAIL_TEMPLATE } from "../template/emailTemplate.js";

export const sendVerficationEmail = async ( email, verificationToken ) => {
  sendMail(email, "Your TravelBuddy verification code","", VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken));
    res.status(201).json({
      success: true,
      message: `Verfication code is send to ${email}`
    })
}