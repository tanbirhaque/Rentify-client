import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  // const navLinks = (
  //   <>
  //     <NavLink
  //       className={({ isActive }) => (isActive ? "active-link" : "link")} 
  //     >
  //       Home
  //     </NavLink>
  //     <NavLink
  //       className={({ isActive }) => (isActive ? "active-link" : "link")}
  //     >
  //       home 2
  //     </NavLink>

  //     <NavLink
  //       className={({ isActive }) => (isActive ? "active-link" : "link")}
  //     >
  //       home 3
  //     </NavLink>
  //     <NavLink
  //       to="/login"
  //       className={({ isActive }) => (isActive ? "active-link" : "link")}
  //     >
  //       Login
  //     </NavLink>

  //     <NavLink
  //       to="/register"
  //       className={({ isActive }) => (isActive ? "active-link" : "link")}
  //     >
  //       Register
  //     </NavLink>
  //   </>
  // );

  const navLinks = (
    <>
      <NavLink to='/' className='navAfter relative font-medium text-base text-black mx-3'>Home</NavLink>
      <NavLink to='/blogs' className='navAfter relative font-medium text-base text-black mx-3'>Blogs</NavLink>
      <NavLink to='/testimonials' className='navAfter relative font-medium text-base text-black mx-3'>Testimonials</NavLink>
      <NavLink to='/privacy' className='navAfter relative font-medium text-base text-black mx-3'>Our Privacy</NavLink>
      <NavLink to='/conditions' className='navAfter relative font-medium text-base text-black mx-3'>Terms & Conditions</NavLink>
      <NavLink to='/login' className='navAfter relative font-medium text-base text-black  mx-3'>Signin</NavLink>
      <NavLink to='register' className='navAfter relative font-medium text-base  text-black mx-3'>Signup</NavLink>
    </>
  )

  return (
    <div className="max-w-screen-2xl mx-auto">
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
              Renti<span className="text-[#002172]">fy</span>
            </h4>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <Link to='/signin'>
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
              className="text-[#002172] hover:text-white border border-[#002172] hover:bg-gradient-to-r from-blue-700 to-[#002172] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
              Signup
            </button>
          </Link >
        </div >
      </div >
    </div >
  );
};

export default Navbar;
