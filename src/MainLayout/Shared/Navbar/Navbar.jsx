import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navLinks = (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "link")}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "link")}
      >
        home 2
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "link")}
      >
        home 3
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "link")}
      >
        home 4
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "link")}
      >
        home 5
      </NavLink>
    </>
  );

  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="navbar bg-base-100">
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
          <div className="flex  items-center gap-2">
            {/* <img
              className="w-[50px] rounded-full hidden md:block h-[50px] "
              src="https://i.ibb.co/YQkknL0/logo.jpg"
             
            /> */}
            <img
              className="w-[60px] h-[60px] rounded-full hidden md:block  "
              src="https://i.ibb.co/jymRcVn/413339641-1359129788096517-9050509765731491679-n.png"
            />
            <h4 className="font-bold md:text-2xl text-base">
              Renti<span className="text-blue-950">fy</span>
            </h4>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
