//component added by "Fahima"

import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import useOwners from "../../../Hooks/useOwners";
import OwnerCard from "./OwnerCard";
import { Helmet } from "react-helmet";

const OwnerList = () => {
  //get owner data
  const [owners] = useOwners();
  console.log(owners);

  return (
   <>
   <Helmet>
        <title>Rentify | Owners</title>
        
    </Helmet>
    <div className="max-w-screen-2xl mx-auto">
      <div
        className="hero min-h-56"
        style={{
          backgroundImage: "url(https://i.ibb.co/Zdk0mLj/breadcrumb-4.jpg)",
        }}
      >
        <div className="hero-overlay bg-[#000000c2] p-28">
          <h2 className="mb-5 text-[40px] font-bold text-white">Owner List</h2>
          <p className="text-white">
            <Link to="/" className="hover:text-[#ec3323] cursor-pointer">
              Home{" "}
            </Link>
            / <span className="text-[#ec3323]"> Owners</span>
          </p>
        </div>
      </div>
      <div className="p-20 grid grid-rows-1 md:grid-cols-3 gap-8">
        {/* agents */}
        {owners.map((owner) => (
          <OwnerCard owner={owner} key={owner._id} />
        ))}
      </div>
    </div>
   </>
  );
};

export default OwnerList;
