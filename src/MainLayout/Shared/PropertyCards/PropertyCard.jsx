// List card is developed by "Konika khan", Design Improvement by "Tanbir" & data fetch and adding using tanStack query by "Fahima"
import { Link } from "react-router-dom";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtub } from "react-icons/pi";
import { LuTriangleRight } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import "./PropertyCards.css";

const PropertyCard = ({ property, details_path }) => {
  const { property_info, _id } = property || {};
  const { property_img, property_title, property_location, property_details, property_for, ownership_duration } =
    property_info || {};


  return (
    <>
      <Link to={`/details/${_id}`}>
        <div className="card card-compact max-w-[414px] rounded-none bg-base-100 shadow-md mx-auto mb-1">
          <figure className="w-full h-[294px]">
            <img className="w-full h-full" src={property_img} alt={property_title} />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-center mb-2">
              <button className="bg-[#e33226] rounded-md btn-one py-[8px] px-[12px] text-white text-[16px] capitalize">
                For {property_for}
              </button>
              <p className="text-right text-[#666666]">
                <span className="text-[#002172] text-[16px] font-bold ">{property_info?.property_details?.property_price}</span>
                /{ownership_duration}
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
            <div className="card-actions text-md border-[#00000016]  border mt-5 text-md">
              <p className="flex items-center justify-center gap-2 border-r-2 p-2 border-[#00000016]">
                <IoBedOutline className="text-[#666666]" />
                {property_details?.bedroom}
              </p>
              <p className="flex items-center justify-center gap-2 border-r-2 p-2  border-[#00000016]">
                <PiBathtub className="text-[#666666]" />
                {property_details?.bath}
              </p>
              <p className="flex items-center justify-center gap-2 p-2">
                <LuTriangleRight className="text-[#666666]" />
                {property_details?.sqf} sqft
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PropertyCard;
