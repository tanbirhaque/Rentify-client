import { useRef } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure.jsx";
import BookBuy from "./BookBuy";
import Swal from "sweetalert2";
import {
  FaHeart,
  FaStar,
  FaDollarSign,
  FaWifi,
  FaBed,
  FaTv,
  FaFire,
  FaPlus,
} from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { LuTriangleRight } from "react-icons/lu";
import { PiBathtub } from "react-icons/pi";

const SavedCards = ({ item, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const { property } = item || {};
  const modalRef = useRef(null);

  const handleBookOrBuy = () => {
    // Open the modal using the showModal() method- Sadia
    modalRef.current.showModal();
  };

  //unsave button added by Fahima
  const handleUnSave = (id) => {
    console.log(id);
    axiosSecure.delete(`/saved-properties/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        refetch();
        Swal.fire({
          title: `Removed from saved properties.`,
          timer: 2000,
          color: "#002172",
          showConfirmButton: false,
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <div className="min-w-full shadow-lg bg-white">
        <div className="bg-blue-gray relative rounded-xl">
          <div className="min-w-full h-[294px]">
            <img
              src={property.property_info.property_img}
              alt="property image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/60" />
          <button className="absolute top-4 left-4 text-red-500 rounded-full">
            <FaHeart
              onClick={() => handleUnSave(item._id)}
              className="h-6 w-6"
            />
          </button>
          <div className="absolute bottom-4 right-4  ">
            {property?.property_info?.property_for === "rent" ? (
              <>
                <button className=" bg-[#002172]  py-2 px-4 text-sm  hover:bg-[#e33226] text-white">
                  For Rent
                </button>
              </>
            ) : (
              <button className="bg-[#002172] py-2 px-4 text-sm  hover:bg-[#e33226] text-white">
                For Buy
              </button>
            )}
          </div>
        </div>
        <div className="p-6">
          <div className="mb-3 flex items-center justify-between">
            <h1 className="text-[#002172] text-xl font-semibold line-clamp-1">
              <abbr title={property?.property_info?.property_title} className="no-underline">
                {property?.property_info?.property_title}
              </abbr>
            </h1>
          </div>
          <div className="card-actions text-lg flex items-center justify-center border-t-2 border-b-2 py-4 gap-10 border-[#00000016]   mt-5 text-md">
            <p className="flex items-center justify-center gap-2 ">
              <IoBedOutline className="text-[#666666]" />
              {property?.property_info?.property_details?.bedroom}
            </p>
            <p className="flex items-center justify-center gap-2 ">
              <PiBathtub className="text-[#666666]" />
              {property.property_info.property_details?.bath}
            </p>
            <p className="flex items-center justify-center gap-2 ">
              <LuTriangleRight className="text-[#666666]" />
              {property.property_info.property_details?.sqf} sqft
            </p>
          </div>
          <div className="flex justify-between py-3 items-center mt-2">
            <h1>
              <span className="text-[#e33226] text-xl font-bold">Price: </span>{" "}
              {property.property_info.property_details.property_price}
            </h1>
            <h1>
              <span className="text-[#e33226] text-xl font-bold">Review: </span>
              3
            </h1>
          </div>
          {/* code modified by Sadia */}
          <div className="">
            {property?.property_info?.property_for === "rent" ? (
              <>
                <button
                  onClick={handleBookOrBuy}
                  className=" bg-[#002172] py-3 px-6 hover:bg-[#e33226] text-white w-full"
                >
                  Book Now
                </button>
              </>
            ) : (
              <button
                onClick={handleBookOrBuy}
                className="bg-[#002172] py-3 px-6 hover:bg-[#e33226] text-white w-full"
              >
                Buy Now
              </button>
            )}
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
              ref={modalRef}
            >
              <div className="modal-box">
                <BookBuy item={item}></BookBuy>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedCards;
