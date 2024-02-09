// This user profile routs ful desgined and functionality made by [sojib]
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import './UserProfile.css'
import { IoIosArrowForward } from "react-icons/io";
import { MdDateRange } from "react-icons/md";
import useBlogs from "../../../Hooks/useBlogs";
import { Link } from "react-router-dom";
import { FaComment } from "react-icons/fa";

const UserProfile = () => {
    const { user } = useContext(AuthContext)
    const [blogs] = useBlogs();
    return (
        <div className="">
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
                    {/* <div
                        className="hero h-80"
                        style={{
                            backgroundImage: "url(https://i.ibb.co/S5vvBYj/download.webp)",
                        }}
                    >
                        <div className="hero-overlay bg-black/80 inset-0 opacity-100 p-28">

                        </div>
                    </div> */}
                </div>
            </div>
            <div className=" grid md:grid-cols-12 grid-cols-1 w-[97%] mx-auto mt-5">
                <div className="xl:col-span-3 lg:col-span-4 md:col-span-4 mx-6">
                    <div className="p-6 relative rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 -mt-48">
                        <div className=" flex flex-col justify-center items-center">
                            <div className="relative mx-auto">
                                <img className="h-24 w-24 rounded-full" src={user?.photoURL} alt="" />
                            </div>
                            <div className="mt-4 text-center">
                                <h5 className="text-lg font-semibold">{user?.displayName}</h5>
                                <p className="text-slate-400">{user?.email}</p>
                            </div>
                        </div>
                        {/* <div className="divider"></div> */}
                        <div className=" border-t-2 mt-5 border-gray-100 dark:border-gray-700">
                            <h5 className="text-xl font-semibold mt-4">
                                Personal Details :</h5>
                            <div className="mt-4">
                                <div className="flex items-center">
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="fea icon-ex-md text-slate-400 me-3 w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>

                                    <div className="flex-1">
                                        <h6 className="text-green-600 dark:text-white font-medium mb-0">Email :
                                        </h6>
                                        <a className="text-slate-400" href="">{user?.email}</a>
                                    </div>
                                </div>
                                <div className="flex items-center mt-3">
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="fea icon-ex-md text-slate-400 me-3 w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                    <div className="flex-1">
                                        <h6 className="text-green-600 dark:text-white font-medium mb-0">Skills :</h6>
                                        <a className="text-slate-400" href="">html</a>,
                                        <a className="text-slate-400" href="">css</a>,
                                        <a className="text-slate-400" href="">js</a>,
                                        <a className="text-slate-400" href="">mysql</a>
                                    </div>
                                </div>
                                <div className="flex items-center mt-3">
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="fea icon-ex-md text-slate-400 me-3 w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>
                                    </svg>
                                    <div className="flex-1">
                                        <h6 className="text-green-600 dark:text-white font-medium mb-0">Language :</h6>
                                        <a className="text-slate-400" href="">English</a>,
                                        <a className="text-slate-400" href="">Japanese</a>,
                                        <a className="text-slate-400" href="">Chinese</a>
                                    </div>
                                </div>
                                <div className="flex items-center mt-3">
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="fea icon-ex-md text-slate-400 me-3 w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                    </svg>
                                    <div className="flex-1">
                                        <h6 className="text-green-600 dark:text-white font-medium mb-0">Website :</h6>
                                        <a className="text-slate-400" href="">www.cristina.com</a>
                                    </div>
                                </div>
                                <div className="flex items-center mt-3">
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="fea icon-ex-md text-slate-400 me-3 w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                                    </svg>
                                    <div className="flex-1">
                                        <h6 className="text-green-600 dark:text-white font-medium mb-0">Birthday :</h6>
                                        <p className="text-slate-400 mb-0">2nd March, 1996</p>
                                    </div>
                                </div>
                                <div className="flex items-center mt-3">
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="fea icon-ex-md text-slate-400 me-3 w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                    <div className="flex-1">
                                        <h6 className="text-green-600 dark:text-white font-medium mb-0">Location :</h6>
                                        <a className="text-slate-400" href="">Beijing, China</a>
                                    </div>
                                </div>
                                <div className="flex items-center mt-3">
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="fea icon-ex-md text-slate-400 me-3 w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                    <div className="flex-1">
                                        <h6 className="text-green-600 dark:text-white font-medium mb-0">Cell No :</h6>
                                        <a className="text-slate-400" href="">(+12) 1254-56-4896</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-9 lg:col-span-8 md:col-span-8 my-6">
                    <div className="grid grid-cols-1 gap-6">
                        <div className="p-6 border-2 relative rounded-md dark:shadow-gray-700 bg-white dark:bg-slate-900">
                            <h5 className="text-xl font-semibold">{user?.displayName}</h5><p className="text-slate-400 mt-3">I have started my career as a trainee and prove my self and achieve all the milestone with good guidance and reach up to the project manager. In this journey, I understand all the procedure which make me a good developer, team leader, and a project manager.</p>
                        </div>
                        <div className="p-6 relative border-2 rounded-md dark:shadow-gray-700 bg-white dark:bg-slate-900">
                            <h5 className="text-xl font-semibold">All Blogs :</h5>
                            {/* blogs card section */}
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-6 gap-6">
                                {
                                    blogs.map(item => <div key={item._id}>
                                        <div className="group relative h-fit hover:-mt-[5px] overflow-hidden bg-white dark:bg-slate-900 rounded-xl shadow dark:shadow-gray-700 transition-all duration-500">
                                            <div className="relative overflow-hidden">
                                                <img className=" h-[230px] w-full" src={item.img} alt="" />
                                                <div className="absolute end-4 top-4">
                                                    <span className="bg-green-600 text-white text-[14px] px-2.5 py-1 font-medium rounded-full h-5">Residential</span>
                                                </div>
                                            </div>
                                            <div className="relative p-6">
                                                <div className="">
                                                    <div className="flex justify-between mb-4">
                                                        <span className="text-slate-400 text-sm flex items-center gap-1">
                                                            <span className=" text-slate-900">
                                                                <MdDateRange />
                                                            </span>
                                                            {item.date}</span>
                                                        <span className="text-slate-400 text-sm ms-3 flex items-center gap-1">
                                                            <span>
                                                                <FaComment></FaComment>
                                                            </span>
                                                            {item.comment} Comment</span>
                                                    </div>
                                                    <a className="title text-xl font-medium hover:text-green-600 duration-500 ease-in-out" href="/blog-detail/1">{item.title}</a>
                                                    <div className="mt-3">
                                                        <div className=" overflow-hidden">
                                                            <Link to={`/blogs/${item._id}`}>
                                                                <div className="hover:text-green-600 after:bg-green-600 duration-500 ease-in-out flex items-center navAfter">
                                                                    <p>Read more
                                                                    </p>
                                                                    <p><IoIosArrowForward /></p>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default UserProfile;