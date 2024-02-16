import { useRef } from "react";
import BookBuy from "./BookBuy";
import swal from "sweetalert";
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

const SavedCards = ({ item }) => {
  const { property } = item;
  const modalRef = useRef(null);

  const handleBookOrBuy = () => {
    // Open the modal using the showModal() method- Sadia

    modalRef.current.showModal();
  };

  return (
    <div>
      <div className="w-full max-w-[24rem] shadow-lg">
        <div className="bg-blue-gray relative rounded-xl">
          <img
            src={property.property_info.property_img}
            alt="ui/ux review check"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/60" />
          <button className="absolute top-4 left-4 text-red-500 rounded-full">
            <FaHeart className="h-6 w-6" />
          </button>
          {/* <button className="absolute top-4 right-4 text-red-500 font-bold text-xl rounded-full">
            <div className="rating flex gap-1">
              <input type="radio" name="rating-1" className="mask mask-star bg-[#fbbd38]" />
              <span>3</span>


            </div>
          </button> */}

          <div className="absolute bottom-4 right-4  ">
            {property?.property_info?.property_for === "rent" ? (
              <>
                <button className=" bg-[#002172]  py-2 px-4 text-sm  hover:bg-[#e33226] text-white">
                  Rent Now
                </button>
              </>
            ) : (
              <button className="bg-[#002172] py-2 px-4 text-sm  hover:bg-[#e33226] text-white">
                Buy Now
              </button>
            )}
          </div>
        </div>
        <div className="p-6">
          <div className="mb-3 flex items-center justify-between">
            <h1 className="text-[#002172] text-xl font-semibold ">
              {property.property_info.property_title}
            </h1>
          </div>
          {/* <p className="text-gray-500">
          Indulge in the epitome of urban sophistication with our Stylish Urban Loft, a captivating space meticulously curated to embody the essence of Industrial Chic Vibes.
          </p> */}
          <div className="card-actions text-lg flex items-center justify-center border-t-2 border-b-2 py-4 gap-10 border-[#00000016]   mt-5 text-md">
            <p className="flex items-center justify-center gap-2 ">
              <IoBedOutline className="text-[#666666]" />
              {property.property_info.property_details?.bedroom}
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
                <button onClick={handleBookOrBuy} className=" bg-[#002172] py-3 px-6 hover:bg-[#e33226] text-white w-full">
                  Book Now
                </button>
              </>
            ) : (
              <button onClick={handleBookOrBuy} className="bg-[#002172] py-3 px-6 hover:bg-[#e33226] text-white w-full">
                Buy Now
              </button>
            )}
            {/* <>
              <button
                className="bg-[#002172] py-3 px-6 hover:bg-[#e33226] text-white w-full"
                onClick={handleBookOrBuy}
              >
                Book Now
              </button>
            </> */}
            {/* Modal */}
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
