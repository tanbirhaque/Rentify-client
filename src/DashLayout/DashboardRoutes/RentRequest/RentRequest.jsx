import { useEffect, useState } from "react";
import useOwnerRent from "../../../Hooks/useOwnerRent";
import RentRequestCard from "./RentRequestCard";
import { FaUser } from "react-icons/fa";
import { HiHomeModern } from "react-icons/hi2";
import { FcHome } from "react-icons/fc";

const RentRequest = () => {
    const [ownerRent, refetch] = useOwnerRent();
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [tableData, setTableData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const accepted = ownerRent.filter(
        (item) => item.requestStatus == "accepted"
    );
    const pending = ownerRent.filter(
        (item) => item.requestStatus == "pending"
    );
    const rejected = ownerRent.filter(
        (item) => item.requestStatus == "rejected"
    );



    useEffect(() => {
        setTableData(ownerRent);
        setFilteredData(ownerRent);
    }, [ownerRent]);

    const filterData = (status) => {
        switch (status) {
            case "accepted":
                setFilteredData(accepted);
                break;
            case "pending":
                setFilteredData(pending);
                break;
            case "rejected":
                setFilteredData(rejected);
                break;
            default:
                setFilteredData(ownerRent);
        }
    };

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownVisible(prevState => !prevState);
    };


    return (
        <>

            <div className=" flex gap-8 ml-10 mt-10">
                <div className="flex bg-slate-200 text-lg shadow-md  py-77 px-5 items-center justify-between gap-6 w-80 rounded-2xl">
                    <div>
                        <h1 className="font-bold">245</h1>
                        <h1>Total Customers</h1>
                    </div>
                    <div className="bg-[#002172] text-white rounded-xl p-4">
                        <FaUser />
                    </div>
                </div>
                <div className="flex bg-slate-200 shadow-md text-lg py-7 px-5 items-center justify-between gap-6 w-80 rounded-2xl">
                    <div className="">
                        <h1 className="font-bold">564</h1>
                        <h1>Total Transactions</h1>
                    </div>
                    <div className="bg-[#002172] text-white rounded-xl p-4">
                        <HiHomeModern />
                    </div>
                </div>
                <div className="flex bg-slate-200 py-7 shadow-md  px-10 items-center justify-between gap-20 w-[880px] rounded-2xl">
                    <div className="text-6xl">
                        <FcHome />
                    </div>
                    <div className="text-lg">
                        <h1 className="font-bold">INFORMATION</h1>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</h1>
                    </div>

                </div>
            </div>
            <div className="flex items-center justify-end mt-4 ">
                <h1>Sort by:</h1>
                <div className="dropdown">
                    {/* Click button */}
                    <div tabIndex={0} role="button" className="border-2 rounded-lg px-4 py-2 m-1" onClick={toggleDropdown}>Status</div>
                    {/* Dropdown content */}
                    <ul tabIndex={0} className={`dropdown-content  bg-white ${dropdownVisible ? 'show' : ''} z-[1] -left-32 menu p-2 shadow bg-base-100 rounded-box w-52`}>
                        <li><a onClick={() => filterData("pending")}>Pending</a></li>
                        <li><a onClick={() => filterData("accepted")}>Accept</a></li>
                        <li><a onClick={() => filterData("rejected")}>Reject</a></li>
                    </ul>
                </div>
            </div>
            <div className="">
                <table className="table table-zebra overflow-scroll">
                    {/* head */}
                    <thead className="font-semibold text-lg text-[#002172]">
                        <tr>
                            <th>Property Info.</th>
                            <th>Location</th>
                            <th>Customer Info</th>
                            <th>Price</th>
                            <th>Order-ID</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map(item => (
                            <RentRequestCard key={item._id} refetch={refetch} items={item} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default RentRequest;
