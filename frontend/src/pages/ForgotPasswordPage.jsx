import { motion } from "framer-motion";
import travel_buddy_logo from "../../public/TravelBuddy_Logo.svg"
import { useState } from "react";
import { ArrowLeft, Loader, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../Store/authStore";
import { Input } from "../components/input"

export const ForgotPasswordPage = () => {
	const [email, setEmail] = useState("");
	const [isSubmitted, setIsSubmitted] = useState(false);

	const { isLoading, forgotPassword } = useAuthStore();
	const handleSubmit = async (e) => {
		e.preventDefault();
		await forgotPassword(email);
		setIsSubmitted(true);
	};

	return (
      <section className=" bord flex justify-center h-[100svh] overflow-hidden bg-cloud_planes bg-center bg-no-repeat bg-cover items-center">
      <motion.div className=" absolute text-center rounded-3xl  w-[25rem] h-fit bg-gray-100 bg-opacity-[.3] backdrop-blur-sm text-gray-500"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y:0 }}
      transition={{ duration: 0.5 }}
      >
        <img src={travel_buddy_logo} alt="" className="w-[8rem] mt-8 m-auto"/>
        <h1 className=" mt-4 text-3xl text-gray-700 font-playfair font-black">Forgot Password</h1>
        {(!isSubmitted) ? 
        <form onSubmit={handleSubmit}>
        <p className="my-4 text-sm">Enter your email address and we'll send you a link to reset your password.</p>
          <Input icon = {Mail}
            type = "email"
            placeholder = "Email Address"
            value = {email}
            onChange = {(e) => setEmail(e.target.value)}
            />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="text-white w-[85%] font-medium py-2 my-6 text-xl rounded-xl bg-blue_main"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? <Loader className="w-6 h-6 animate-spin mx-auto" /> : "Send Reset Link"}
        </motion.button>
        </form>
        :
          <div className="mt-5 px-5 flex flex-col items-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30, duration: 2}}
              className=""
            >
              <Mail className="my-4 h-8 w-8 text-blue_main"/>
            </motion.div>
            <p>If an account exits for {email}, you will receive a password reset link shortly.</p>
          </div>
        }
        <div className="my-4 text-xs flex justify-center">
          <Link to={"/login"} className="flex items-center hover:text-blue_main">
            <ArrowLeft className="h-4 w-4 mr-2" />Back to Login
          </Link>
        </div>
      </motion.div>
      </section>
	);
};

