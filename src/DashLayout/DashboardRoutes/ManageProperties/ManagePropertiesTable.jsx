import { useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";

const ManagePropertiesTable = ({ property, refetch }) => {
  const { property_info, _id } = property || {};
  // console.log(_id)
  const {
    property_details,
    property_img,
    property_title,
    property_location,
    property_category,
    property_for,
    ownership_duration,
    owner_details,
    verify_status,
  } = property_info || {};
  const [, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible((prevState) => !prevState);
  };
  // const [delProperty, setDelProperty] = useState();

  //   for delete a product code by sadia
const handleDelete = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`http://localhost:5000/properties/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            console.log(data);
            Swal.fire(
              "Deleted!",
              "Your posted property has been deleted.",
              "success"
            );

            // const remaining = delProperty.filter((item) => item._id !== id);
            // setDelProperty(remaining);
            refetch()
          }
        });
    }
  });
};

  return (
    <>
      <td className="w-[18rem]">
          <div className="flex gap-4 items-center w-auto">
          <div><img className="w-[100px] h-[75px] rounded" src={property_img} alt="" /></div>
          <h2 className="w-36">{property_title}</h2>
          </div>       
      </td>
      <td>{property_location?.address?.city}</td>
      <td>{property_category}</td>
      <td className="capitalize">{property_for}</td>
      <td>
        <span className="text-base">$</span>
        {property_details?.property_price}
      </td>
      <td>{ownership_duration}</td>
      <td>{owner_details?.owner_email}</td>
      <td>{verify_status ? "True" : "False"}</td>
      {/* from this line to last line is done by [ sadia ] */}
      {verify_status == "verified" ? (
        <td>
          {/* Dropdown button */}
          <div className="dropdown">
            <button onClick={toggleDropdown} className="dropbtn">
              <HiOutlineDotsHorizontal className="text-xl" />
            </button>
            {/* Dropdown content */}
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box -ml-6">
              <li>
                <Link
                  to={`/dashboard/update-property/${_id}`}
                  className="text-green-500 text-sm font-semibold"
                >
                  Update
                </Link>
              </li>
              <li>
                <button onClick={() => handleDelete(property._id)} className="text-red-500 font-semibold text-sm">
                  Delete
                </button>
              </li>
            </ul>
          </div>
        </td>
      ) : (
        <></>
      )}
    </>
  );
};

export default ManagePropertiesTable;
