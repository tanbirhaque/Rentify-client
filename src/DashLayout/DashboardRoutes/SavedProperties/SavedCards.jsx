import { useRef } from "react";
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


import BookBuy from "./BookBuy";
import swal from "sweetalert";




const SavedCards = ({ items }) => {

  

  const modalRef = useRef(null);

  const handleBookOrBuy = () => {
    // Open the modal using the showModal() method- Sadia
 
    modalRef.current.showModal();

  };

  





  const { property } = items;
  return (
    <div>
      <div className="w-full max-w-[26rem] shadow-lg">
        <div className="bg-blue-gray relative rounded-xl">
          <img
            src={property.property_info.property_img}
            alt="ui/ux review check"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/60" />
          <button className="absolute top-4 right-4 text-red-500 rounded-full">
            <FaHeart className="h-6 w-6" />
          </button>
        </div>
        <div className="p-6">
          <div className="mb-3 flex items-center justify-between">
            <h5 className="text-[#002172] font-semibold truncate">
              {property.property_info.property_title}
            </h5>
            <div className="flex items-center gap-1.5 text-blue-gray">
              <FaStar className="-mt-0.5 h-5 w-5 text-yellow-700" />3
            </div>
          </div>
          <p className="text-gray-500">
            Indulge in the epitome of urban sophistication with our Stylish
            Urban Loft, a captivating space meticulously curated to embody the
            essence of Industrial Chic Vibes.
          </p>
          <div className="flex justify-between mt-2">
            <h1>
              <span className="text-[#e33226] font-bold">Price:</span>{" "}
              {property.property_info.property_details.property_price}
            </h1>
            <h1>
              <span className="text-[#e33226] font-bold">Duration:</span>{" "}
              {property.property_info.ownership_duration}
            </h1>
          </div>
          <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 hover:text-[#e33226] transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <FaDollarSign className="h-5 w-5" />
            </span>
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 hover:text-[#e33226] transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <FaWifi className="h-5 w-5" />
            </span>
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 hover:text-[#e33226] transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <FaBed className="h-5 w-5" />
            </span>
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 hover:text-[#e33226] transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <FaTv className="h-5 w-5" />
            </span>
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 hover:text-[#e33226] transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <FaFire className="h-5 w-5" />
            </span>
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 hover:text-[#e33226] transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <FaPlus />
            </span>
          </div>
        </div>

        {/* button code */}
        {/* previous code */}
        {/* <div className=" ">
        {
             property?.property_info?.property_for === 'rent' ?<>
            
            <button className=" bg-[#002172] py-3 px-6  hover:bg-[#e33226] text-white  w-full">Booked Now</button>
             
           
            </>
          :<button className=" bg-[#002172] py-3 px-6 hover:bg-[#e33226] text-white  w-full">Buy Now</button>
          }
        
        </div> */}
        
        {/* code modified by Sadia */}
        <div className="">

          {property?.property_info?.property_for === "rent" ? (
            <>
              <button

                className="bg-[#002172] py-3 px-6 hover:bg-[#e33226] text-white w-full"
                onClick={handleBookOrBuy}
              >
                Book Now
              </button>
            </>
          ) : (
            <button
              className="bg-[#002172] py-3 px-6 hover:bg-[#e33226] text-white w-full"
              onClick={handleBookOrBuy}
            >
              Buy Now
            </button>
          )}

          {/* Modal */}
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
            ref={modalRef}
          >
            <div className="modal-box">
              {/* <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click the button below to close
              </p> */}
              <BookBuy items={items}></BookBuy>
              {/* <div className="modal-action">
                <form method="dialog">
              
                  <button
                    className=""
                    onClick={() => modalRef.current.close()}
                  >
                  

           <div className="flex justify-start items-start -ml-72">
           {property?.property_info?.property_for === "rent" ? (
            <>
            <div className="flex justify-start items-start">
            <button
                className="bg-[#002172] py-3 px-6 hover:bg-[#e33226] text-white w-full"
                onClick={handleBookOrBuy}
              >
                Book Now
              </button>
            </div>
            </>
          ) : (
           <div className="flex justify-start items-start"> 
            <button
           className="bg-[#002172] py-3 px-6 hover:bg-[#e33226] text-white w-full"
           onClick={handleBookOrBuy}
         >
           Buy Now
         </button></div>
      
          )}
           </div>
           
                  </button>
                </form>
              </div> */}
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default SavedCards;
