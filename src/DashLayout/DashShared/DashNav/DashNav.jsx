import { FaBars } from "react-icons/fa";


const DashNav = ({ toggleSidebar }) => {
    return (
        <div className="min-w-full h-14 bg-white shadow-md flex items-center justify-between px-3">
            <div>
                <button className="" onClick={toggleSidebar}>
                    {/* {isSidebarOpen ? <FaTimes></FaTimes> : <FaBars></FaBars>} */}
                    <FaBars></FaBars>
                </button>
            </div>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    );
};

export default DashNav;