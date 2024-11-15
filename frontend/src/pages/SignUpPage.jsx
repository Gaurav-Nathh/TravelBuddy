import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion";
import travel_buddy_logo from "../../public/TravelBuddy_Logo.svg"
import { Input } from "../components/input"
import { Loader, LockKeyholeIcon, Mail, User2, } from "lucide-react";
import { PasswordStrengthMeter } from "../components/PasswordStrengthMeter";
import { useAuthStore } from "../Store/authStore";
export const SignUpPage = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { signup, error, isLoading } = useAuthStore();

  const handleSignUp = async(e) => {
    e.preventDefault();
    try{
      await signup(email, password, name);
      navigate("/verify-email");
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <section className=" bord flex justify-center h-[100svh] overflow-hidden bg-cloud_planes bg-center bg-no-repeat bg-cover items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=" absolute text-center rounded-3xl w-[25rem] h-fit bg-gray-100 bg-opacity-[.3] backdrop-blur-sm text-gray-500">
        <img src={travel_buddy_logo} alt="" className="w-[8rem] mt-8 m-auto"/>
        <h1 className=" mt-4 text-4xl text-gray-700 font-playfair font-black">Create Account</h1>
        <p className="mt-1 text-sm">Please enter your details, Your Buddy awaits.</p>
        <form onSubmit={handleSignUp}>
          <Input icon = {User2}
            type = "text"
            placeholder = "Full Name"
            value = {name}
            onChange = {(e) => setName(e.target.value)}
            />
          <Input icon = {Mail}
            type = "text"
            placeholder = "Email"
            value = {email}
            onChange = {(e) => setEmail(e.target.value)}
            />
          <Input icon = {LockKeyholeIcon}
            type = "text"
            placeholder = "Password"
            value = {password}
            onChange = {(e) => setPassword(e.target.value)}
            />
        {error && <p className="px-6 mt-3 text-left text-red-500">{error}</p>}
        <PasswordStrengthMeter password={password} />

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98}}
          type="submit"
          disabled={isLoading}
          className=" text-white w-[85%] font-medium py-2 my-6 text-2xl rounded-xl bg-blue_main"
        >
          {isLoading ? <Loader className=" animate-spin mx-auto" size={24} /> : "Sign Up"}
        </motion.button> 
        </form>
        <p className="text-xs mb-3">Already have an account? {" "}
          <Link to = {"/login"} className="text-blue_main"> Login</Link>
        </p>
      </motion.div>
      </section>
    </>
  )
}