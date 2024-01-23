import { NavLink } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="holder w-[1350px]  mx-auto">
      <div className="card  h-[400px] border-t  hover:shadow-none relative flex flex-col mx-auto m-5">
        <div className="w-full ">
          <img
            className=" w-full rounded-t-lg h-[200px]  opacity-80"
            style={{ zIndex: -1 }}
            src="https://dash-ui-admin-template.vercel.app/images/background/profile-cover.jpg?fbclid=IwAR33hMTT9POzg0spN-quLZSjRPLq_oZTMeyWR3I3Zjt9Jg7R-5ZEv8XsaYY"
            alt=""
          />
        </div>
        <div className="profile w-full flex m-3 ml-4 text-white">
          <img
            className="w-36 h-36 p-1 bg-white rounded-full  absolute -mt-20 avatar online"
            src="https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb"
            alt=""
          />
          <span className="ml-8 left-28  absolute  w-5 h-5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full" />
        </div>

        <div>
          <div>
            <h2 className="text-3xl ml-44 font-bold">Sarah Afrin</h2>
            <h2 className="text-gray-600 ml-44 font-normal">
              sarah@rentify.com
            </h2>
            <div className="text-end -mt-16">
              <button
                type="button"
                className="text-gray-800 hover:text-white hover:bg-gray-800 hover:border-gray-800 border border-gray-800 text-base  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2 mr-7"
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-sm font-medium text-center text-gray-500 border-b border-t border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap mb-5 mt-5 ">
            {/* <li className="me-2">
      <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Profile</a>
    </li>
    <li className="me-2">
      <a  className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active " aria-current="page">Dashboard</a>
    </li>
    <li className="me-2">
      <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Settings</a>
    </li>
    <li className="me-2">
      <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Contacts</a>
    </li>
    <li>
      <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">Disabled</a>
    </li> */}
            <NavLink
              to=""
              className="picAfter relative font-medium text-base text-black mx-3"
            >
              Blogs
            </NavLink>
            <NavLink
              to=""
              className="picAfter relative font-medium text-base text-black mx-3"
            >
              Home
            </NavLink>
            <NavLink
              to=""
              className="picAfter relative font-medium text-base  text-black mx-3"
            >
              How It Works
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
