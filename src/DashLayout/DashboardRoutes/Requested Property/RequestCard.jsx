import { CiLocationOn } from "react-icons/ci";
// import { IoBedOutline } from "react-icons/io5";
// import { LuTriangleRight } from "react-icons/lu";
// import { PiBathtub } from "react-icons/pi";
import { Link } from "react-router-dom";

const RequestCard = ({ requestedProperties }) => {
  const { _id, property, requestStatus, propertyID } = requestedProperties || {};
  const {
    property_img,
    property_title, 
    property_location,
    property_details,
    property_for,
    owner_details,
  } = property || {};

  const price = property_details.property_price;
  
  const requestId = _id;
  const propertyId = propertyID;

  const { owner_name, owner_img, owner_phone, owner_email } =
    owner_details || {};
    const owner = owner_email;

  return (
    <div>
      <div className="card card-compact max-w-[414px] rounded-none bg-base-100 shadow-md mx-auto mb-1">
        <figure className="w-full h-[294px]">
          <img
            className="w-full h-full"
            src={property_img}
            alt={property_title}
          />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center mb-2">
            <button className="bg-[#e33226] rounded-md btn-one py-[8px] px-[12px] text-white text-[16px] capitalize">
              {property_for}
            </button>
            <p className="text-right text-[#666666]">
              <span className="text-[#002172] text-[16px] font-bold ">
                ${property_details?.property_price}
              </span>
            </p>
          </div>
          <Link to={`/details/${_id}`}>
            <h2 className="hover:text-[#e33226] text-[22px] poppins-font font-semibold truncate overflow-hidden">
              {property_title}
            </h2>
          </Link>
          <p className="flex text-[16px] text-[#666666] items-center gap-2">
            <CiLocationOn className="text-[#e33226]" />
            <span className="truncate overflow-hidden">
              {property_location?.address?.street},{" "}
              {property_location?.address?.city},{" "}
              {property_location?.address?.state},{" "}
              {property_location?.address?.country}
            </span>
          </p>
          <hr />
          {/* requester details */}
          <h2 className="text-xl font-bold text-center underline">
            Owner Details
          </h2>
          <div className="flex gap-4 p-3 my-1">
            <img
              className="rounded-full h-16 w-16"
              src={owner_img}
              alt="requester-image"
            />
            <div className="flex flex-col">
              <h2 className="text-black text-lg font-bold">{owner_name} </h2>
              <p className="text-[#666666] text-sm">{owner_email} </p>
              <p className="text-[#666666] text-sm">{owner_phone} </p>
            </div>
          </div>
          <hr />
          <button
            className="rounded p-4 bg-[#002172] text-white w-full mt-3"
            disabled
          >
            Request <span className=" uppercase">{requestStatus}</span>
          </button>
          {requestStatus == "accepted" ?
            <Link to={`/dashboard/payment?price=${price}&requestId=${requestId}&propertyId=${propertyId}&owner=${owner}`}>
              <button
              className="rounded p-4 bg-[#2797a1] text-white w-1/3 mx-auto mt-3 font-bold"
            >Pay</button>
            </Link>
            : ""}
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
