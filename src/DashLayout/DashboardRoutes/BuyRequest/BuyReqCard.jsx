import { Link } from 'react-router-dom';
import { IoBedOutline } from "react-icons/io5";
import { PiBathtub } from "react-icons/pi";
import { LuTriangleRight } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";

const BuyReqCard = ({ items }) => {

    const { property, _id,  } = items
    return (
        <>
            
            <div className="card card-compact max-w-[414px] rounded-none bg-base-100 shadow-md mx-auto mb-1">
                <figure className="w-full h-[294px]">
                    <img className="w-full h-full" src={property?.owner_details.owner_img}  />

                </figure>
                <h1>{property?.owner_details.owner_name}</h1>
                <div className="card-body">
                    <div className="flex justify-between items-center mb-2">
                        <button className="bg-[#e33226] rounded-md btn-one py-[8px] px-[12px] text-white text-[16px] capitalize">
                            {}
                        </button>
                        <p className="text-right text-[#666666]">
                            <span className="text-[#002172] text-[16px] font-bold ">$78</span>
                            /month
                        </p>
                    </div>
                    <Link to={`/details/${_id}`}>
                        <h2 className="hover:text-[#e33226] text-[22px] poppins-font font-semibold truncate overflow-hidden">
                            {}
                        </h2>
                    </Link>
                    <p className="flex text-[16px] text-[#666666] items-center gap-2">
                        <CiLocationOn className="text-[#e33226]" />
                        <span className="truncate overflow-hidden">
                            {},{" "}
                            {},{" "}
                            {},{" "}
                            {}
                        </span>
                    </p>
                    <div className="card-actions text-md border-[#00000016]  border mt-5 text-md">
                        <p className="flex items-center justify-center gap-2 border-r-2 p-2 border-[#00000016]">
                            <IoBedOutline className="text-[#666666]" />
                            {}
                        </p>
                        <p className="flex items-center justify-center gap-2 border-r-2 p-2  border-[#00000016]">
                            <PiBathtub className="text-[#666666]" />
                            {}
                        </p>
                        <p className="flex items-center justify-center gap-2 p-2">
                            <LuTriangleRight className="text-[#666666]" />
                            {} sqft
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BuyReqCard;