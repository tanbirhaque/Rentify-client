import { Link } from "react-router-dom";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtub } from "react-icons/pi";
import { LuTriangleRight } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";

const PropertyCard = ({ img, title, location, price }) => {
    return (
        <>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                <figure><img src="https://i.ibb.co/PcrrNTV/pexels-photo-1029599.jpg" alt="Shoes" /></figure>
                <div className="card-body p-5">
                    <div className="flex justify-between ">
                        <button className="bg-[#e33226] rounded-md btn-one p-2 text-white">For Sale</button>
                        <p className="text-right"><span className="text-[#002172] text-md font-semibold ">$78</span>/month</p>
                    </div>
                    <h2 className="card-title hover:text-[#e33226]">{title}Dreamy Penthouse</h2>
                    <p className="flex text-lg items-center gap-2 "><CiLocationOn className="text-[#e33226]" />{location}4890 Grey Fox Fam Road, Houston</p>
                    <div className="card-actions text-md border-gray-400  border-2 mb-5 text-md">
                        <p className="flex items-center gap-2 border-r-2 p-2 border-gray-400"><IoBedOutline className="text-[#002172]" />60</p>
                        <p className="flex items-center gap-2 border-r-2 p-2  border-gray-400"><PiBathtub className="text-[#002172]" />608</p>
                        <p className="flex items-center gap-2 p-2"> <LuTriangleRight className="text-[#002172]" />608</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PropertyCard;