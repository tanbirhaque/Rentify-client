import { useEffect, useState } from "react";
import useOwnerRent from "../../../Hooks/useOwnerRent";
import RentRequestCard from "./RentRequestCard";

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
             <div className="flex items-center justify-end">
                <h1>Sort by:</h1>
                <div className="dropdown">
                    {/* Click button */}
                    <div tabIndex={0} role="button" className="border-2 rounded-lg px-4 py-2 m-1" onClick={toggleDropdown}>Status</div>
                    {/* Dropdown content */}
                    <ul tabIndex={0} className={`dropdown-content ${dropdownVisible ? 'show' : ''} z-[1] menu p-2 shadow bg-base-100 rounded-box w-52`}>
                        <li><a onClick={() => handleSortBy("Pending")}>Pending</a></li>
                        <li><a onClick={() => handleSortBy("Accept")}>Accept</a></li>
                        <li><a onClick={() => handleSortBy("Reject")}>Reject</a></li>
                    </ul>
                </div>
            </div>

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
