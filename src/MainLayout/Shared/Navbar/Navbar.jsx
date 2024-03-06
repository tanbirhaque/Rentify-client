import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import ButtonBlue from "../buttons/Blue/ButtonBlue";
// import ButtonRed from "../buttons/Red/ButtonRed";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useGetRole from "../../../Hooks/useGetRole";
import { MdOutlineAdminPanelSettings, MdOutlineEmail } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbLogout } from "react-icons/tb";
import useCurrentOwner from "../../../Hooks/useCurrentOwner";
import { HiOutlineHome } from "react-icons/hi2";

const Navbar = () => {
  const [isNavbarJumping, setIsNavbarJumping] = useState(false);
  const [isNavBarOpen, setIsNavbarOpen] = useState(false)
  const { userSignOut, user, setUser } = useContext(AuthContext);
  const [userRole] = useGetRole();
  const navigate = useNavigate();
  const [currentOwner] = useCurrentOwner();
  // console.log(currentOwner);

  // for logout user -Sadia
  const handleLogOut = () => {
    userSignOut()
      .then(() => {
        console.log("logged out");
        // swal("Signout", "You are successfully signed out", "success");
        //sweet alert 2 added by Fahima
        Swal.fire({
          title: "You are successfully signed out",
          timer: 2000,
          color: "#002172",
          showConfirmButton: false,
          icon: "success",
        });
        setUser(null);

        setTimeout(() => {
          navigate("/");
        }, 500);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // for jumping effect code -sadia
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const scrollThreshold = 100;

      setIsNavbarJumping(scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // when the user dont have a pro pic this pic will be shown
  const defaultImg =
    "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1696786604~exp=1696787204~hmac=c10645727b8724eecda4984ef1d8fbfba92a9c9072a57b851c28c9b1d8d62b81";

  const navLinks = (
    <>

      <NavLink
        to="/"
        className="navAfter relative font-medium text-base text-black mx-3"
      >
        Home
      </NavLink>
      <NavLink
        to="/all"
        className="navAfter relative font-medium text-base  text-black mx-3"
      >
        All Properties
      </NavLink>
      <NavLink
        to="/owners"
        className="navAfter relative font-medium text-base  text-black mx-3"
      >
        Owners
      </NavLink>
      <NavLink
        to="/blogs"
        className="navAfter relative font-medium text-base text-black mx-3"
      >
        Blogs
      </NavLink>

      {/* for others */}
      {/* <div className="dropdown dropdown-hover relative h-[65px]">
        <div tabIndex={0} role="button" className="dropAfter relative font-medium text-base text-black mx-3 flex items-center h-full">Others</div>
        <ul className="menu dropdown-content z-[1] bg-white pl-5  w-[250px] border-[#e33226] border-l-[2px] rounded-[5px] py-0 absolute top-14">
          <NavLink
            to="/how-it-works"
            className="navAfter relative font-medium text-base text-black my-2"
          >
            How it works
          </NavLink>
          <NavLink
            to="/testimonials"
            className="navAfter relative font-medium text-base text-black my-2"
          >
            Testimonials
          </NavLink>
          <NavLink
            to="/contact"
            className="navAfter relative font-medium text-base text-black my-2"
          >
            Contact with us
          </NavLink>
          <NavLink
            to="/privacy"
            className="navAfter relative font-medium text-base text-black my-2"
          >
            Our Privacy
          </NavLink>
          <NavLink
            to="/conditions"
            className="navAfter relative font-medium text-base text-black my-2"
          >
            Terms & Conditions
          </NavLink>
          <NavLink
            to="/faq"
            className="navAfter relative font-medium text-base text-black  my-2"
          >
            FAQ
          </NavLink>
        </ul>
      </div> */}
    </>
  );

  const otherDropDownLinks = (
    <>
      <NavLink
        to="/how-it-works"
        className="navAfter relative font-medium text-base text-black my-2"
      >
        How it works
      </NavLink>
      <NavLink
        to="/testimonials"
        className="navAfter relative font-medium text-base text-black my-2"
      >
        Testimonials
      </NavLink>
      <NavLink
        to="/contact"
        className="navAfter relative font-medium text-base text-black my-2"
      >
        Contact with us
      </NavLink>
      <NavLink
        to="/privacy"
        className="navAfter relative font-medium text-base text-black my-2"
      >
        Our Privacy
      </NavLink>
      <NavLink
        to="/conditions"
        className="navAfter relative font-medium text-base text-black my-2"
      >
        Terms & Conditions
      </NavLink>
      <NavLink
        to="/faq"
        className="navAfter relative font-medium text-base text-black  my-2"
      >
        FAQ
      </NavLink>
      <NavLink
        to="/about"
        className="navAfter relative font-medium text-base text-black  my-2"
      >
        About Us
      </NavLink>
    </>
  )

  const dropNavLinks = (
    <>
      <div className="dropdown dropdown-hover relative h-[65px]">
        <div tabIndex={0} role="button" className="dropAfter relative font-medium text-base text-black mx-3 flex items-center h-full">Others</div>
        <ul className="menu dropdown-content z-[1] bg-white pl-5  w-[250px] border-[#e33226] border-l-[2px] rounded-[5px] py-0 absolute top-14">
          {otherDropDownLinks}
        </ul>
      </div>
    </>
  )

  const handleNavbarDropDown = () => {
    setIsNavbarOpen(!isNavBarOpen)
    console.log(isNavBarOpen);
  }
  return (
    // Please don't change the z-index, added by -Tanbir
    <>
      <div
        className={` bg-base-100  sticky top-0 left-0 z-[99999] ${isNavbarJumping ? "animate-jump shadow-md" : ""
          }`}
      >
        <div className="navbar max-w-screen-2xl mx-auto bg-base-100 pl-6 md:px-5 lg:px-8 xl:px-0 py-2">
          <div className="navbar-start">
            {/* Navbar ham-berger icon to open and close the responsive drop-down navbar */}
            <div className="pr-5 lg:hidden" onClick={handleNavbarDropDown}>
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
            </div>
            {/* Navbar Logo */}
            <Link to="/">
              <div className="flex  items-center">
                <img
                  className="w-[60px] md:w-full"
                  src="https://i.ibb.co/GsQpf2D/logo.png"
                />
                <h4 className="font-bold poppins-font text-2xl lg:text-[38px] ml-2 text-[#002172]">
                  Renti<span className="text-[#e33226]">fy</span>
                </h4>
              </div>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex min-h-full">
            <ul className="menu menu-horizontal px-1  flex items-center py-0">{navLinks}{dropNavLinks}</ul>
          </div>

          {/* for toggle feature for profile button -sadia || Remake by -Tanbir */}
          <div className="navbar-end gap-5 lg:gap-0">
            {/* this user role condition added by sojib */}
            <div>
              {user ?
                <>
                  <div className="dropdown dropdown-end">
                    <div className="flex items-center">
                      <div className="hidden  md:flex flex-col items-end lg:mr-3 h-full">
                        <h3 className="capitalize poppins-font text-[16px] font-semibold">
                          {user && userRole?.role === "user" ? `${user.displayName}` : `${currentOwner?.firstName}`}
                        </h3>
                        <p className="capitalize poppins-font text-[12px] text-[#464a53]">{userRole?.role}</p>
                      </div>
                      {/* DashNav Profile dropdown */}
                      <div className="dropdown dropdown-hover relative h-[65px]">
                        <div tabIndex={0} role="button" className=" relative font-medium text-base text-black mx-3 xl:mx-0 flex items-center h-full">
                          <img
                            className="rounded-lg max-w-[48px] max-h-[48]"
                            src={user && userRole?.role === "user" ? `${user.photoURL}` : `${currentOwner?.ownerImg}`}
                          />
                        </div>
                        <ul className="menu dropdown-content z-[1] bg-white w-fit rounded-[5px] px-0 absolute top-16"
                          style={{
                            boxShadow: '0px 2px 20px 0px rgba(0,0,0,0.68)',
                            WebkitBoxShadow: '0px 2px 20px 0px rgba(0,0,0,0.68)',
                            MozBoxShadow: '0px 2px 20px 0px rgba(0,0,0,0.68)'
                          }}
                        >
                          <li className="hover:bg-[#002172] transition-all ease-out duration-300 hover:text-white">
                            <p className="text-[17px]"><span><MdOutlineEmail className=""></MdOutlineEmail></span>{currentOwner?.ownerEmail}</p>
                          </li>
                          <li className="hover:bg-[#002172] transition-all ease-out duration-300 hover:text-white">
                            <Link to="/dashboard/userProfile" className="text-[17px]"><span><LuLayoutDashboard></LuLayoutDashboard></span>Dashboard</Link>
                          </li>
                          <li className="hover:bg-[#002172] transition-all ease-out duration-300 hover:text-white">
                            <a href="https://rentify-admin.firebaseapp.com/dashboard/profile" target="blank" className="text-[17px]"><span><MdOutlineAdminPanelSettings></MdOutlineAdminPanelSettings></span>Admin Panel</a>
                          </li>
                          <li className="hover:bg-[#002172] transition-all ease-out duration-300 hover:text-white">
                            <Link onClick={handleLogOut} className="text-[17px]"><span><TbLogout className="text-[#e33226]"></TbLogout></span>Logout</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
                :
                <>
                  <div className="flex items-center">
                    <Link to="/login">
                      <ButtonBlue titleBlue={"Log In"} />
                    </Link>
                  </div>
                </>
              }
            </div>
          </div>
        </div>
        {/* Responsive navbar for small devices */}
        <div className={`bg-[#f9f9f9] max-h-[410px] overflow-y-scroll ${isNavBarOpen ? 'lg:hidden' : "hidden"}`}>
          <div className="p-4">
            <ul className="flex flex-col bg-white border-l-[2px] border-red-500 resNavCSS py-2 rounded-md">
              {navLinks}
            </ul>
            <details className="dropdown w-full mt-3">
              <summary className="w-full text-right marker:bg-none relative py-2 bg-white border-l-[2px] border-red-500 rounded-t-md ">
                <span className="mt-5 absolute left-3 bottom-2">Others</span>
              </summary>
              <ul className="flex flex-col bg-white border-l-[2px] border-red-500 resNavCSS resNavDrop py-2 pl-3 rounded-md rounded-t-none">
                {otherDropDownLinks}
              </ul>
            </details>
          </div>
        </div>
      </div >
    </>
  );
};

export default Navbar;
// comment for checking
