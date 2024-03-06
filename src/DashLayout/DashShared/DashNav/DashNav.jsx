import { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import { MdOutlineAdminPanelSettings, MdOutlineEmail } from "react-icons/md";
import { HiOutlineHome } from "react-icons/hi2";
import { Link, Navigate } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import Swal from "sweetalert2";
import useGetRole from "../../../Hooks/useGetRole";
import useCurrentOwner from "../../../Hooks/useCurrentOwner";


const DashNav = ({ toggleSidebar }) => {

    const { userSignOut, user, setUser } = useContext(AuthContext);
    const [userRole] = useGetRole()
    const [currentOwner] = useCurrentOwner()
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
                    Navigate("/");
                }, 500);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const defaultImg = "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1696786604~exp=1696787204~hmac=c10645727b8724eecda4984ef1d8fbfba92a9c9072a57b851c28c9b1d8d62b81";

    return (
        <div className="min-w-full bg-white shadow-md flex items-center justify-end  xl:justify-between pl-3 pr-4 ">
            <div className="hidden xl:flex">
                <button className="border p-1 bg-gray-100" onClick={toggleSidebar}>
                    {/* {isSidebarOpen ? <FaTimes></FaTimes> : <FaBars></FaBars>} */}
                    <FaBars></FaBars>
                </button>
            </div>
            <div className="dropdown dropdown-end">
                <div className="dropdown dropdown-end">
                    <div className="flex items-center">
                        <div className="flex flex-col items-end lg:mr-3 h-full">
                            <h3 className="capitalize poppins-font text-[16px] font-semibold">
                                {/* {user?.displayName} */}
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
                                    <Link to="/" className="text-[17px]"><span><HiOutlineHome></HiOutlineHome></span>Home</Link>
                                </li>
                                <li className="hover:bg-[#002172] transition-all ease-out duration-300 hover:text-white">
                                    <a href="https://rentify-admin.firebaseapp.com" target="blank" className="text-[17px]"><span><MdOutlineAdminPanelSettings></MdOutlineAdminPanelSettings></span>Admin Panel</a>
                                </li>
                                <li className="hover:bg-[#002172] transition-all ease-out duration-300 hover:text-white">
                                    <Link onClick={handleLogOut} className="text-[17px]"><span><TbLogout className="text-[#e33226]"></TbLogout></span>Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex xl:hidden">
                <button className="" onClick={toggleSidebar}>
                    {/* {isSidebarOpen ? <FaTimes></FaTimes> : <FaBars></FaBars>} */}
                    <FaBars></FaBars>
                </button>
            </div>
        </div>
    );
};

export default DashNav;