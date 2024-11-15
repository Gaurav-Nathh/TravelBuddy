import { Link } from "react-router-dom";
import travel_buddy_logo from "../../public/TravelBuddy_Logo.svg"
import { useAuthStore } from "../Store/authStore";
import { useState } from "react";

export function Navbar() {
  const { isAuthenticated } = useAuthStore();
  const[isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuthStore();
  const handleLogout = () => {
    logout();
  }

  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <section className="fixed mt-4 w-[95%] left-1/2 transform -translate-x-1/2 rounded-xl p-3 z-50 flex justify-between gap-10 items-center bg-white">
      <div className="ml-5">
        <img src={travel_buddy_logo} alt="Travel-Buddy" className="w-[10rem]" />
      </div>
      <div className="flex gap-9">
        <Link to={"/"}>Home</Link>
        <Link to={"/explore"}>Explore</Link>
        <Link to={"/my-trips"}>My Trips</Link>
        <Link to={"/community"}>Community</Link>
      </div>
      {isAuthenticated ? 
        <div className=" mr-5">
          <div className="relative inline-block text-left">
      {/* Trigger Button */}
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {(user)? user.name: "User"}
      </button>
      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="py-1" role="menu" aria-orientation="vertical">
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
              role="menuitem"
            >
              Account settings
            </a>
            <a
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
              role="menuitem"
              onClick={handleLogout}
            >             
              Sign Out
            </a>
          </div>
        </div>
      )}
    </div>
        </div> :
        <div className="flex gap-9 mr-5">
          <button><Link to={"/login"}>Log In</Link></button>
          <button><Link to={"/signup"}>Sign Up</Link></button>
        </div>
      }
    </section>
  );
}
