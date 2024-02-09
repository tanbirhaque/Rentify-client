import { useEffect, useState } from "react";
import useOwnerRent from "../../../Hooks/useOwnerRent";
import RentRequestCard from "./RentRequestCard";
import { FaUser } from "react-icons/fa";

const RentRequest = () => {
    const [ownerRent, refetch] = useOwnerRent();
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selectedSortOption, setSelectedSortOption] = useState(null);
    const [filteredRent, setFilteredRent] = useState(ownerRent);

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownVisible(prevState => !prevState);
    };
    const handleSortBy = (option) => {
        setSelectedSortOption(option);
        // Implement sorting logic based on the selected option
        let sortedRent = [...ownerRent]; // Create a copy of the original array
        if (option === "Pending") {
            sortedRent = sortedRent.filter(item => item.requestStatus === "Pending");
        } else if (option === "Accept") {
            sortedRent = sortedRent.filter(item => item.requestStatus === "Accepted");
        } else if (option === "Reject") {
            sortedRent = sortedRent.filter(item => item.requestStatus === "Rejected");
        }
        setFilteredRent(sortedRent);
    };

    useEffect(() => {
        // Update the filteredRent whenever ownerRent changes
        setFilteredRent(ownerRent);
    }, [ownerRent]);

    return (
        <>
            {/* <div className="ml-10 mt-10">
                <div className="flex bg-slate-300 py-10 px-5 items-center gap-6 w-56">
                    <div>
                        <h1>245</h1>
                        <h1>Total Customers</h1>
                    </div>
                    <div className="bg-red-100 rounded-xl p-4">
                    <FaUser/>
                    </div>
                </div>
            </div> */}

            <div className="overflow-x-auto">
                <table className="table table-zebra">
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
                        {ownerRent.map(item => (
                            <RentRequestCard key={item._id} refetch={refetch} items={item} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default RentRequest;
