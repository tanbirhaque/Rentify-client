import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import ButtonBlue from "../buttons/Blue/ButtonBlue";
import ButtonRed from "../buttons/Red/ButtonRed";
import { useEffect, useState } from "react";
import logo from "../../../assets/Template_files/logo.png";

const Navbar = () => {

  const [isNavbarJumping, setIsNavbarJumping] = useState(false);


  // for jumping effect code
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;


      const scrollThreshold = 100;

      setIsNavbarJumping(scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);






  const navLinks = (
    <>
      <NavLink
        to="/"
        className="navAfter relative font-medium text-base text-black mx-3"
      >
        Home
      </NavLink>
      <NavLink
        to="/blogs"
        className="navAfter relative font-medium text-base text-black mx-3"
      >
        Blogs
      </NavLink>
      <NavLink
        to="/testimonials"
        className="navAfter relative font-medium text-base text-black mx-3"
      >
        Testimonials
      </NavLink>
      <NavLink
        to="/privacy"
        className="navAfter relative font-medium text-base text-black mx-3"
      >
        Our Privacy
      </NavLink>
      <NavLink
        to="/conditions"
        className="navAfter relative font-medium text-base text-black mx-3"
      >
        Terms & Conditions
      </NavLink>
      <NavLink
        to="/faq"
        className="navAfter relative font-medium text-base text-black  mx-3"
      >
        FAQ
      </NavLink>
      <NavLink
        to="/how-it-works"
        className="navAfter relative font-medium text-base  text-black mx-3"
      >
        How It Works
      </NavLink>
    </>
  );

  return (
    // Please don't change the z-index, added by -Tanbir
    <div className={` bg-base-100  sticky top-0 left-0 z-[99999] ${isNavbarJumping ? 'animate-jump shadow-md' : ''}`}
    >
      <div className="navbar max-w-screen-2xl  mx-auto   bg-base-100">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="flex  items-center">
            <img
              className="w-[50px] h-[60px] hidden md:block  "
              src="https://i.ibb.co/kXpZ7RD/Rentify-logo-1.png"
            />
            <h4 className="font-bold md:text-2xl lg:text-[40px] ml-2">
              Renti<span className="text-[#002172]">fy</span>
            </h4>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end gap-5">
          {/* Buttons Added by Fahima-dev */}
          <Link to="/login">
            <ButtonBlue titleBlue={"Log In"} />
          </Link>
          <Link to="/register">
            <ButtonRed titleRed={"Register"} />
          </Link>
          {/* Buttons added by Sadia-dev */}
          {/* <Link to='/signin'>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-700 to-[#002172] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Signin
            </button>
          </Link>
          <Link>
            <button
              type="button"
              className="text-[#002172] hover:text-white border border-[#002172] hover:bg-gradient-to-r from-blue-700 to-[#002172] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
              Signup
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
