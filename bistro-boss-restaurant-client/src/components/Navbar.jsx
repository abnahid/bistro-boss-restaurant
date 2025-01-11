import { useContext, useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosCall, IoMdHelpCircleOutline, IoMdLogOut } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import defaultProfilePicture from "../assets/defaultProfilePicture.jpg";
import { AuthContext } from "../context/AuthProvider";
import useCart from "../hooks/useCart";

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const activeStyle = "font-semibold text-[#EEFF25]";
  const [activeTab, setActiveTab] = useState("register");
  const [darkMode, setDarkMode] = useState(false);
  const [cart] = useCart();
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const theme = darkMode ? "mydarktheme" : "mytheme";
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeStyle : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-us"
          className={({ isActive }) => (isActive ? activeStyle : "")}
        >
          Contact us
        </NavLink>
      </li>

      {/* {user?.email && ( */}
      <>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? activeStyle : "")}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/our-menu"
            className={({ isActive }) => (isActive ? activeStyle : "")}
          >
            Our Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/our-shop"
            className={({ isActive }) => (isActive ? activeStyle : "")}
          >
            Our Shop
          </NavLink>
        </li>
      </>
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30  bg-black text-white px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end gap-4">
          {user && user?.email ? (
            <>
              <Link
                to="/dashboard/cart"
                className="relative btn rounded-full text-lg"
              >
                <FiShoppingCart />
                <span className="badge absolute -top-2 right-0 badge-secondary ml-2">
                  {cart.length}
                </span>
              </Link>
              <div className="dropdown dropdown-end">
                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                  <div className="w-12 rounded-full">
                    <img
                      src={user?.photoURL || defaultProfilePicture}
                      alt="Profile Picture"
                    />
                  </div>
                </label>
                <ul
                  tabIndex="0"
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-80 z-50 text-neutral dark:text-gray-100"
                >
                  {/* User Profile */}
                  <li className="flex items-center justify-between ">
                    <div className="flex items-center flex-row">
                      <img
                        src={user?.photoURL || defaultProfilePicture}
                        alt="Profile Picture"
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="ml-3">
                        <p className="font-bold ">
                          {user?.displayName || "User Name"}
                        </p>
                        <a href="#" className="text-sm text-blue-500">
                          See your profile
                        </a>
                      </div>

                      <input
                        type="checkbox"
                        checked={darkMode}
                        onChange={toggleDarkMode}
                        className="toggle toggle-primary theme-controller"
                      />
                    </div>
                  </li>

                  {/* Feedback */}
                  <li className="mt-2">
                    <a
                      href="https://www.linkedin.com/in/ajnahid"
                      className="flex items-center gap-2"
                    >
                      <IoIosCall className="text-2xl" />
                      <div>
                        <h3>Contact Developer</h3>
                        <p className="text-xs text-blue-500">
                          Help us to improve the new design
                        </p>
                      </div>
                    </a>
                  </li>

                  {/* Settings and Logout */}
                  <li>
                    <Link
                      to="/feed-back-form"
                      className="flex items-center gap-2"
                    >
                      <MdOutlineFeedback className="text-2xl" />
                      <span>Write Review</span>
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-2">
                      <IoMdHelpCircleOutline className="text-2xl" />
                      <span>Help & Support</span>
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={signOutUser}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <IoMdLogOut className="text-2xl" />
                      <span>Logout</span>
                    </a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className={`${
                  activeTab === "login"
                    ? "bg-Primary text-white font-semibold"
                    : "text-Primary"
                } px-6 py-2 rounded-lg text-sm font-normal`}
                onClick={() => setActiveTab("login")}
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className={`${
                  activeTab === "register"
                    ? "bg-Primary text-white font-semibold"
                    : "text-Primary"
                } px-6 py-2 rounded-lg text-sm font-normal`}
                onClick={() => setActiveTab("register")}
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
