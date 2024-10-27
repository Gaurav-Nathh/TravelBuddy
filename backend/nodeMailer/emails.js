import { sendMail } from "./mailer.js"
import { VERIFICATION_EMAIL_TEMPLATE, WELCOME_EMAIL_TEMPLATE } from "../template/emailTemplate.js";

export const sendVerficationEmail = async ( email, verificationToken ) => {
  try {
    sendMail(email, "Your TravelBuddy verification code", "", VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken));
  } catch (error) {
    throw new Error(`Error sending verfication email: ${error}`);
  }
}

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];
  try{
    sendMail(recipient, "Welcome to TravelBuddy", "", WELCOME_EMAIL_TEMPLATE);
  } catch (error) {
    throw new Error(`Error sending verfication email: ${error}`);
  }
}