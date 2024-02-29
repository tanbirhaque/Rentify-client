// These routes are fully designed and functional featuries  worked by [ sojib ]
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import "./UserProfile.css";
import { IoIosArrowForward } from "react-icons/io";
import { MdDateRange, MdOutlineEmail, MdOutlineWork } from "react-icons/md";
import useBlogs from "../../../Hooks/useBlogs";
import { Link } from "react-router-dom";
import { FaComment, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import useRecentAddProperties from "../../../Hooks/useRecentAddProperties";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtub } from "react-icons/pi";
import { LuTriangleRight } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import useGetRole from "../../../Hooks/useGetRole";
import useCurrentOwner from "../../../Hooks/useCurrentOwner";
import { FaPersonRifle } from "react-icons/fa6";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [blogs] = useBlogs();
  const [recentAddProperty] = useRecentAddProperties();
  const [userRole] = useGetRole()
  const [currentOwner] = useCurrentOwner()
  console.log(currentOwner);
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="">
      {/* Profile banner section */}
      <div className=" grid grid-cols-1 w-[97%] mx-auto mt-5">
        <div className=" relative text-transparent rounded-md shadow dark:shadow-gray-700 overflow-hidden">
          <div className="">
            <img
              className=" w-full h-80 object-cover text-transparent opacity-90"
              style={{ zIndex: -1 }}
              src="https://i.ibb.co/S5vvBYj/download.webp"
              alt=""
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
        </div>
      </div>
      {/* Profile main layouts */}
      <div className=" grid md:grid-cols-12 grid-cols-1 w-[97%] mx-auto mt-5">
        {/* Profile card details */}
        <div className="xl:col-span-3 lg:col-span-4 md:col-span-4 mx-6">
          {/* user condition */}
          {userRole?.role === "user" ?
            <div className="p-6 relative rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 -mt-48">
              {/* profile card heading part */}
              <div className=" flex flex-col justify-center items-center">
                <div className="relative mx-auto">
                  <img
                    className="h-24 w-24 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                </div>
                <div className="mt-4 text-center">
                  <h5 className="text-lg font-semibold">{user?.displayName}</h5>
                  <p className="text-slate-400">{user?.email}</p>
                </div>
              </div>
              {/* profile card body part */}
              <div className=" border-t-2 mt-5 border-gray-100 dark:border-gray-700">
                <h5 className="text-xl font-semibold mt-4">Personal Details :</h5>
                <div className="mt-4">
                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <MdOutlineEmail className=" text-4xl text-slate-400"></MdOutlineEmail>
                    <div className="flex-1">
                      <h6 className="text-[#002172] dark:text-white font-medium mb-0">
                        Email :
                      </h6>
                      <a className="text-slate-400" href="">{user?.email}</a>
                    </div>
                  </div>
                  {/* profession */}
                  <div className="flex items-center mt-3 gap-4">
                    <MdOutlineWork className=" text-2xl text-slate-400"></MdOutlineWork>
                    <div className="flex-1">
                      <h6 className="text-[#002172] dark:text-white font-medium mb-0">
                        Profession :
                      </h6>
                      <a className="text-slate-400" href=""> Not added</a>
                    </div>
                  </div>
                  {/* linkedin */}
                  <div className="flex items-center mt-3 gap-4">
                    <FaLinkedin className=" text-2xl text-slate-400"></FaLinkedin>
                    <div className="flex-1">
                      <h6 className="text-[#002172] dark:text-white font-medium mb-0">
                        Linkedin :
                      </h6>
                      <a className="text-slate-400" href=""> Not added</a>
                    </div>
                  </div>
                  {/* facebook */}
                  <div className="flex items-center mt-3 gap-4">
                    <FaFacebook className=" text-2xl text-slate-400"></FaFacebook>
                    <div className="flex-1">
                      <h6 className="text-[#002172] dark:text-white font-medium mb-0">
                        Facebook :
                      </h6>
                      <a className="text-slate-400" href="">Not added</a>
                    </div>
                  </div>
                  <div className="flex items-center mt-3 gap-4">
                    <FaTwitter className=" text-2xl text-slate-400"></FaTwitter>
                    <div className="flex-1">
                      <h6 className="text-[#002172] dark:text-white font-medium mb-0">
                        Twitter :
                      </h6>
                      <a className="text-slate-400 hover:underline" target="_blank" href={currentOwner?.linkedin} rel="noreferrer">Not added</a>
                    </div>
                  </div>
                  {/* location */}
                  <div className="flex items-center mt-3">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="fea icon-ex-md text-slate-400 me-3 w-6 h-6"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <div className="flex-1">
                      <h6 className="text-[#002172] dark:text-white font-medium mb-0">
                        Location :
                      </h6>
                      <a className="text-slate-400" href="">Not added</a>
                    </div>
                  </div>
                  {/* contact */}
                  <div className="flex items-center mt-3">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="fea icon-ex-md text-slate-400 me-3 w-6 h-6"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <div className="flex-1">
                      <h6 className="text-[#002172] dark:text-white font-medium mb-0">
                        Cell No :
                      </h6>
                      <a className="text-slate-400" href="">Contact number unavailable</a>
                    </div>
                  </div>
                </div>
              </div>
            </div> :
            ""}
          {/* owner condition */}
          {userRole?.role === "owner" ?
            <div className="p-6 relative rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 -mt-48">
              {/* profile card heading */}
              <div className=" flex flex-col justify-center items-center">
                <div className="relative mx-auto">
                  <img
                    className="h-24 w-24 rounded-full"
                    src={currentOwner?.ownerImg}
                    alt=""
                  />
                </div>
                <div className="mt-4 text-center">
                  <h5 className="text-lg font-semibold">{currentOwner?.firstName + " " + currentOwner?.lastName}</h5>
                  <p className="text-slate-400">{currentOwner?.ownerEmail}</p>
                </div>
              </div>
              {/* profile card body part */}
              <div className=" border-t-2 mt-5 border-gray-100 dark:border-gray-700">
                <h5 className="text-xl font-semibold mt-4">Personal Details :</h5>
                <div className="mt-4">
                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <MdOutlineEmail className=" text-2xl text-slate-400"></MdOutlineEmail>
                    <div className="flex-1">
                      <h6 className="text-[#002172] dark:text-white font-medium mb-0">
                        Email :
                      </h6>
                      <a className="text-slate-400" href="">
                        {currentOwner?.ownerEmail}
                      </a>
                    </div>
                  </div>
                  {/* profession */}
                  <div className="flex items-center mt-3 gap-4">
                    <MdOutlineWork className=" text-2xl text-slate-400"></MdOutlineWork>
                    <div className="flex-1">
                      <h6 className="text-[#002172] dark:text-white font-medium mb-0">
                        Profession :
                      </h6>
                      <a className="text-slate-400" href="">{currentOwner?.profession}</a>
                    </div>
                  </div>
                  {/* linkedin */}
                  <div className="flex items-center mt-3 gap-4">
                    <FaLinkedin className=" text-2xl text-slate-400"></FaLinkedin>
                    <div className="flex-1">
                      <h6 className="text-[#002172] dark:text-white font-medium mb-0">
                        Linkedin :
                      </h6>
                      <a className="text-slate-400 hover:underline" target="_blank" href={currentOwner?.linkedin} rel="noreferrer">{currentOwner?.linkedin?.slice(8, 20)}</a>
                    </div>
                  </div>
                  {/* facebook */}
                  <div className="flex items-center mt-3 gap-4">
                    <FaFacebook className=" text-2xl text-slate-400"></FaFacebook>
                    <div className="flex-1">
                      <h6 className="text-[#002172] dark:text-white font-medium mb-0">
                        Facebook :
                      </h6>
                      <a className="text-slate-400 hover:underline" target="_blank" href={currentOwner?.linkedin} rel="noreferrer">{currentOwner?.facebook?.slice(8, 20)}</a>
                    </div>
                  </div>
                  {/* twitter */}
                  <div className="flex items-center mt-3 gap-4">
                    <FaTwitter className=" text-2xl text-slate-400"></FaTwitter>
                    <div className="flex-1">
                      <h6 className="text-[#002172] dark:text-white font-medium mb-0">
                        Twitter :
                      </h6>
                      <a className="text-slate-400 hover:underline" target="_blank" href={currentOwner?.linkedin} rel="noreferrer">{currentOwner?.twitter?.slice(0, 19)}</a>
                    </div>
                  </div>
                  {/* location */}
                  <div className="flex items-center mt-3">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="fea icon-ex-md text-slate-400 me-3 w-6 h-6"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <div className="flex-1">
                      <h6 className="text-[#002172] dark:text-white font-medium mb-0">
                        Location :
                      </h6>
                      <a className="text-slate-400" href="">{currentOwner?.address}</a>
                    </div>
                  </div>
                  {/* contact */}
                  <div className="flex items-center mt-3">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="fea icon-ex-md text-slate-400 me-3 w-6 h-6"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <div className="flex-1">
                      <h6 className="text-[#002172] dark:text-white font-medium mb-0">
                        Cell No :
                      </h6>
                      <a className="text-slate-400" href="">{currentOwner?.number}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            :
            ""
          }
        </div>
        <div className="xl:col-span-9 lg:col-span-8 md:col-span-8 my-6">
          {/* Description area */}
          <div className="grid grid-cols-1 gap-6">
            {userRole?.role === "user" ?
              <div className="p-6 border-2 relative rounded-md dark:shadow-gray-700 bg-white dark:bg-slate-900">
                <h5 className="text-xl font-semibold">{user?.displayName}</h5>
                <p className="text-slate-400 mt-3">
                  I have started my career as a trainee and prove my self and
                  achieve all the milestone with good guidance and reach up to the
                  project manager. In this journey, I understand all the procedure
                  which make me a good developer, team leader, and a project
                  manager.
                </p>
              </div> :
              ""
            }
            {userRole?.role === "owner" ?
              <div className="p-6 border-2 relative rounded-md dark:shadow-gray-700 bg-white dark:bg-slate-900">
                <h5 className="text-xl font-semibold">{currentOwner?.firstName + " " + currentOwner?.lastName}</h5>
                <p className="text-slate-400 mt-3">{currentOwner?.description}</p>
              </div>
              :
              ""
            }
            {/* This tab part make by konika */}
            <Tabs
              defaultIndex={tabIndex}
              onSelect={(index) => setTabIndex(index)}
            >
              <TabList className="ml-[2px]">
                <Tab>All Blogs</Tab>
                <Tab>Properties</Tab>
              </TabList>
              <TabPanel>
                <div className="p-6 relative border-2 rounded-md dark:shadow-gray-700 bg-white dark:bg-slate-900">
                  <h5 className="text-xl font-semibold">All Blogs :</h5>
                  {/* blogs card section */}
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-6 gap-6">
                    {blogs.map((item) => (
                      <div key={item._id}>
                        <div className="group relative h-fit hover:-mt-[5px] overflow-hidden bg-white dark:bg-slate-900 rounded-xl shadow dark:shadow-gray-700 transition-all duration-500">
                          <div className="relative overflow-hidden">
                            <img
                              className=" h-[230px] w-full"
                              src={item.img}
                              alt=""
                            />
                            <div className="absolute end-4 top-4">
                              <span className="bg-[#002172] text-white text-[14px] px-2.5 py-1 font-medium rounded-full h-5">
                                Residential
                              </span>
                            </div>
                          </div>
                          <div className="relative p-6">
                            <div className="">
                              <div className="flex justify-between mb-4">
                                <span className="text-slate-400 text-sm flex items-center gap-1">
                                  <span className=" text-slate-900">
                                    <MdDateRange />
                                  </span>
                                  {item.date}
                                </span>
                                <span className="text-slate-400 text-sm ms-3 flex items-center gap-1">
                                  <span>
                                    <FaComment></FaComment>
                                  </span>
                                  {item.comment} Comment
                                </span>
                              </div>
                              <a
                                className="title text-xl font-medium hover:text-[#002172] duration-500 ease-in-out"
                                href="/blog-detail/1"
                              >
                                {item.title}
                              </a>
                              <div className="mt-3">
                                <div className=" overflow-hidden">
                                  <Link to={`/blogs/${item._id}`}>
                                    <div className="hover:text-[#002172] after:bg-[#002172] duration-500 ease-in-out flex items-center blogAfter">
                                      <p>Read more</p>
                                      <p>
                                        <IoIosArrowForward />
                                      </p>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="p-6 relative border-2 rounded-md dark:shadow-gray-700 bg-white dark:bg-slate-900">
                  <h5 className="text-xl font-semibold">Recent Properties :</h5>
                  {/* blogs card section */}
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-6 gap-6">
                    {recentAddProperty.map((item) => (
                      <div key={item._id}>
                        {/* <div className="group relative h-fit hover:-mt-[5px] overflow-hidden bg-white dark:bg-slate-900 rounded-xl shadow dark:shadow-gray-700 transition-all duration-500">
                          <div className="relative overflow-hidden">
                            <img
                              className=" h-[230px] w-full"
                              src={item.img}
                              alt=""
                            />
                            <div className="absolute end-4 top-4">
                              <span className="bg-[#002172] text-white text-[14px] px-2.5 py-1 font-medium rounded-full h-5">
                                Residential
                              </span>
                            </div>
                          </div>
                          <div className="relative p-6">
                            <div className="">
                              <div className="flex justify-between mb-4">
                                <span className="text-slate-400 text-sm flex items-center gap-1">
                                  <span className=" text-slate-900">
                                    <MdDateRange />
                                  </span>
                                  {item.date}
                                </span>
                                <span className="text-slate-400 text-sm ms-3 flex items-center gap-1">
                                  <span>
                                    <FaComment></FaComment>
                                  </span>
                                  {item.comment} Comment
                                </span>
                              </div>
                              <a
                                className="title text-xl font-medium hover:text-[#002172] duration-500 ease-in-out"
                                href="/blog-detail/1"
                              >
                                {item.title}
                              </a>
                              <div className="mt-3">
                                <div className=" overflow-hidden">
                                  <Link to={`/blogs/${item._id}`}>
                                    <div className="hover:text-[#002172] after:bg-[#002172] duration-500 ease-in-out flex items-center blogAfter">
                                      <p>Read more</p>
                                      <p>
                                        <IoIosArrowForward />
                                      </p>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> */}
                        <div className="card card-compact max-w-[414px] rounded-none bg-base-100 shadow-md mx-auto mb-1">
                          <figure className="w-full h-[294px]">
                            <img
                              className="w-full h-full"
                              src={item.property_info.property_img}
                              alt={item.property_info.property_title}
                            />
                          </figure>
                          <div className="card-body">
                            <div className="flex justify-between items-center mb-2">
                              <button className="bg-[#e33226] rounded-md btn-one py-[8px] px-[12px] text-white text-[16px] capitalize">
                                {item.property_info.property_for}
                              </button>
                              <p className="text-right text-[#666666]">
                                <span className="text-[#002172] text-[16px] font-bold ">
                                  $78
                                </span>
                                /month
                              </p>
                            </div>
                            <Link to={`/details/${item._id}`}>
                              <h2 className="hover:text-[#e33226] text-[22px] poppins-font font-semibold truncate overflow-hidden">
                                {item.property_info.property_title}
                              </h2>
                            </Link>
                            <p className="flex text-[16px] text-[#666666] items-center gap-2">
                              <CiLocationOn className="text-[#e33226]" />
                              <span className="truncate overflow-hidden">
                                {item.property_info.property_location?.address?.street},{" "}
                                {item.property_info.property_location?.address?.city},{" "}
                                {item.property_info.property_location?.address?.state},{" "}
                                {item.property_info.property_location?.address?.country}
                              </span>
                            </p>
                            <div className="card-actions text-md border-[#00000016]  border mt-5 text-md">
                              <p className="flex items-center justify-center gap-2 border-r-2 p-2 border-[#00000016]">
                                <IoBedOutline className="text-[#666666]" />
                                {item.property_info.property_details?.bedroom}
                              </p>
                              <p className="flex items-center justify-center gap-2 border-r-2 p-2  border-[#00000016]">
                                <PiBathtub className="text-[#666666]" />
                                {item.property_info.property_details?.bath}
                              </p>
                              <p className="flex items-center justify-center gap-2 p-2">
                                <LuTriangleRight className="text-[#666666]" />
                                {item.property_info.property_details?.sqf} sqft
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
