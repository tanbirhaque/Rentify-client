import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaHome, FaTimes } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import { RiHomeOfficeFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoIosSettings } from "react-icons/io";
import { FaBookmark, FaUserCircle } from "react-icons/fa";
import { IoAddCircleSharp } from "react-icons/io5";
import DashNav from "./DashShared/DashNav/DashNav";

const DashLayout = () => {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // const toggleSidebar = () => {
  //     setIsSidebarOpen(!isSidebarOpen);
  // };

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log(isSidebarOpen);
  };

  return (
    <>
      <div className="flex">
        <div
          className={`side_bar bg-gray-800 min-h-screen fixed w-64  text-white transition-all duration-300 ${isSidebarOpen ? "" : "-ml-64"
            }`}
        >
          <div className="w-64  min-h-screen ">
            <ul className="menu p-4">
              <>
                <div className="flex justify-center items-center mb-6">
                  <Link to="/">
                    <div className="flex  items-center">
                      <img
                        className="max-w-[65px] md:w-full"
                        src="https://i.ibb.co/3kqdMYy/logo-white.png"
                      />
                      <h4 className="font-bold poppins-font text-2xl lg:text-[34px] ml-2">
                        Renti<span className="text-[#e33226]">fy</span>
                      </h4>
                    </div>
                  </Link>
                  {/* <span className="mr-2 text-xl">
                    {" "}
                    <RiHomeOfficeFill></RiHomeOfficeFill>
                  </span>
                  <span className="text-center text-xl font-bold py-4"> Dashboard</span> */}
                </div>
                <li>
                  <NavLink to="/dashboard/profile"><FaUserCircle className="text-lg"></FaUserCircle >Profile</NavLink>
                </li>


                <li className="mt-3">
                  <NavLink to="/dashboard/saved"><FaBookmark className="text-base"></FaBookmark> Saved Properties</NavLink>
                </li>
                <li className="my-3">
                  <NavLink to="/dashboard/add"><IoAddCircleSharp className="text-xl"></IoAddCircleSharp> Add Properties</NavLink>
                </li>
              </>

              <hr />
              <li className="mt-3">
                <NavLink to="/">
                  <FaHome></FaHome>
                  Home
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className={`main_content w-svw transition-all duration-300 ${isSidebarOpen ? "ml-64" : ""}`}>
          <DashNav toggleSidebar={toggleSidebar} ></DashNav>
          <div className="flex-1">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashLayout;
