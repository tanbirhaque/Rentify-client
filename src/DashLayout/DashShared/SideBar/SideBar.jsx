import "./SideBar.css";
import { Link, NavLink } from "react-router-dom";
import {
  FaBookmark,
  FaHome,
  FaUserCircle,
  FaBlogger,
  FaRegClone,
  FaChevronDown,
} from "react-icons/fa";
import { IoAddCircleSharp, IoBookmarksSharp } from "react-icons/io5";
import {
  MdOutlinePendingActions,
  MdOutlineRemoveShoppingCart,
} from "react-icons/md";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { MdManageHistory } from "react-icons/md";
import { HiCubeTransparent } from "react-icons/hi2";
import { CiShoppingTag } from "react-icons/ci";
import { VscRequestChanges } from "react-icons/vsc";
import useGetRole from "../../../Hooks/useGetRole";
import { useState } from "react";

const SideBar = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  const [isDropDownOpen2, setIsDropDownOpen2] = useState(false)
  //roles
  const [userRole] = useGetRole();
  const { role } = userRole || {};
  // console.log(role);
  //roles

  const sideLinks = (
    <>
      <li className="dashLi xl:text-[20px]">
        <NavLink
          to="/dashboard/userProfile"
          className="dashNav flex items-center gap-2"
        >
          <FaUserCircle className="dashIcon text-[#64707d]"></FaUserCircle>
          Profile
        </NavLink>
      </li>
      <li className="dashLi xl:text-[20px]">
        <NavLink
          to="/dashboard/my-requests"
          className="dashNav flex items-center gap-2"
        >
          <MdOutlinePendingActions className="dashIcon text-[#64707d]"></MdOutlinePendingActions>
          Requested Properties
        </NavLink>
      </li>
      <li className="dashLi xl:text-[20px]">
        <NavLink
          to="/dashboard/saved"
          className="dashNav flex items-center gap-2"
        >
          <FaBookmark className="dashIcon text-[#64707d]"></FaBookmark>
          Saved Properties
        </NavLink>
      </li>
      <li className="dashLi xl:text-[20px]">
        <NavLink
          to="/dashboard/writeBlogs"
          className="dashNav flex items-center gap-2"
        >
          <FaBlogger className="dashIcon text-[#64707d]"></FaBlogger>
          Write Blogs
        </NavLink>
      </li>
      {role === "user" && (
        <li className="dashLi xl:text-[20px]">
          <NavLink
            to="/dashboard/ownerRequest"
            className="dashNav flex items-center gap-2"
          >
            <VscRequestChanges className="dashIcon text-[#64707d]" />
            Owner Request
          </NavLink>
        </li>
      )}
    </>
  );
  const ownerRoutes = (
    <>
      <li className="dashLi xl:text-[20px]">
        <NavLink
          to="/dashboard/add"
          className="dashNav flex items-center gap-2"
        >
          <IoAddCircleSharp className="dashIcon text-[#64707d]"></IoAddCircleSharp>
          Add Properties
        </NavLink>
      </li>
      {/* <li className="dashLi xl:text-[20px] pt-2">
        <NavLink
          to="/dashboard/manage"
          className="dashNav flex items-center gap-2"
        >
          <MdManageHistory className="dashIcon text-[#64707d]"></MdManageHistory>
          Manage Properties
        </NavLink>
      </li> */}
      {/* <li className="dashLi xl:text-[20px] pt-2">
        <NavLink
          to="/dashboard/rentReq"
          className="dashNav flex items-center gap-2"
        >
          <HiCubeTransparent className="dashIcon text-[#64707d]">
            {" "}
          </HiCubeTransparent>
          Rent Request
        </NavLink>
      </li>
      <li className="dashLi xl:text-[20px] pt-2">
        <NavLink
          to="/dashboard/buyReq"
          className="dashNav flex items-center gap-2"
        >
          <CiShoppingTag className="dashIcon text-[#64707d]"></CiShoppingTag>
          Buy Request
        </NavLink>
      </li> */}
      {/* <li className="dashLi xl:text-[20px] pt-2">
        <NavLink
          to="/dashboard/soldProperties"
          className="dashNav flex items-center gap-2"
        >
          <MdOutlineRemoveShoppingCart className="dashIcon text-[#64707d]"></MdOutlineRemoveShoppingCart>
          Sold Out Properties
        </NavLink>
      </li>
      <li className="dashLi xl:text-[20px] pt-2">
        <NavLink
          to="/dashboard/rentOutProperties"
          className="dashNav flex items-center gap-2"
        >
          <IoBookmarksSharp className="dashIcon text-[#64707d]"></IoBookmarksSharp>
          Rent Out Properties
        </NavLink>
      </li> */}
    </>
  );

  const handleDropDownClick = () => {
    setIsDropDownOpen(!isDropDownOpen);
    // console.log(isDropDownOpen);
  }
  const handleDropDownClick2 = () => {
    setIsDropDownOpen2(!isDropDownOpen2);
    // console.log(isDropDownOpen2);
  }
  
  return (
    <div>
      <div className="w-64 xl:min-w-[300px] min-h-screen">
        <div className="flex justify-center items-center my-6">
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
        </div>
        {/* Sidebar Contents (Routes of dashboard) starts here */}
        <div className="p-4">
          <span className="flex gap-5">
            <NavLink to="/" className="flex items-center gap-2">
              <FaHome></FaHome>
              Home
            </NavLink>
            <h3>&gt;</h3>
            <h3 className="flex items-center gap-2">
              <MdOutlineDashboardCustomize />
              Dashboard
            </h3>
          </span>
          <hr className="mb-3" />
          {/* user routes */}
          {role === "user" && (
            <ul className="flex flex-col gap-2">{sideLinks}</ul>
          )}
          {/* owner routes */}
          {role === "owner" && (
            <>
              <ul className="flex flex-col gap-2">{sideLinks}</ul>
              <h3 className="poppins-font font-semibold text-xl xl:text-2xl mt-5 text-gray-400">
                Owner Routes
              </h3>
              <hr className="mb-3" />
              <ul>{ownerRoutes}</ul>
              {/* Requests routes dropdown starts here */}
              <div className={`collapse mt-2 ${isDropDownOpen ? "" : "h-[35px]" }`}>
                <input
                  className="max-h-[30px] min-h-[30px]"
                  type="checkbox"
                  onClick={handleDropDownClick}
                />
                <div
                  className="collapse-title max-h-[30px] min-h-[30px] dashLi dashdrop xl:text-[20px] text-[#919eab] font-semibold flex justify-between gap-1.5 items-center p-0"
                >
                  Property Requests
                  {isDropDownOpen ? <FaChevronDown className="-rotate-90 text-[16px]" /> : <FaChevronDown className="text-[16px]" />}

                </div>
                <div className="collapse-content bg-[#1d2739] pt-5">
                  <ul>
                    <li className="dashLi xl:text-[20px] pt-2">
                      <NavLink
                        to="/dashboard/rentReq"
                        className="dashNav flex items-center gap-2"
                      >
                        <HiCubeTransparent className="dashIcon text-[#64707d]">
                          {" "}
                        </HiCubeTransparent>
                        Rent Request
                      </NavLink>
                    </li>
                    <li className="dashLi xl:text-[20px] pt-2">
                      <NavLink
                        to="/dashboard/buyReq"
                        className="dashNav flex items-center gap-2"
                      >
                        <CiShoppingTag className="dashIcon text-[#64707d]"></CiShoppingTag>
                        Buy Request
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Requests routes dropdown ends here */}
              {/* Property Management routes dropdown starts here */}
              <div className={`collapse ${isDropDownOpen2 ? "" : "h-[35px]" }`}>
                <input
                  className="max-h-[30px] min-h-[30px]"
                  type="checkbox"
                  onClick={handleDropDownClick2}
                />
                <div
                  className="collapse-title max-h-[30px] min-h-[30px] dashLi dashdrop xl:text-[20px] text-[#919eab] font-semibold flex justify-between gap-1.5 items-center p-0"
                >
                  Property Management
                  {isDropDownOpen2 ? <FaChevronDown className="-rotate-90 text-[16px]" /> : <FaChevronDown className="text-[16px]" />}

                </div>
                <div className="collapse-content bg-[#1d2739] pt-5">
                  <ul>
                    <li className="dashLi xl:text-[20px] pt-2">
                      <NavLink
                        to="/dashboard/manage"
                        className="dashNav flex items-center gap-2"
                      >
                        <MdManageHistory className="dashIcon text-[#64707d]"></MdManageHistory>
                        Manage Properties
                      </NavLink>
                    </li>
                    <li className="dashLi xl:text-[20px] pt-2">
                      <NavLink
                        to="/dashboard/soldProperties"
                        className="dashNav flex items-center gap-2"
                      >
                        <MdOutlineRemoveShoppingCart className="dashIcon text-[#64707d]"></MdOutlineRemoveShoppingCart>
                        Sold Out Properties
                      </NavLink>
                    </li>
                    <li className="dashLi xl:text-[20px] pt-2">
                      <NavLink
                        to="/dashboard/rentOutProperties"
                        className="dashNav flex items-center gap-2"
                      >
                        <IoBookmarksSharp className="dashIcon text-[#64707d]"></IoBookmarksSharp>
                        Rent Out Properties
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Property Management routes dropdown ends here */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
