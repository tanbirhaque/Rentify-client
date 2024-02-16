//component by "Fahima"

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const OwnerCard = ({ owner }) => {
  const {
    _id,
    firstName,
    lastName,
    number,
    ownerEmail,
    ownerImg,
    profession,
    facebook,
    twitter,
    linkedin,
    description,
    address,
  } = owner || {};
  return (
    <div className="card w-96 bg-base-100 shadow-xl hover:-mt-1 hover:border-b-8 hover:border-blue-700">
      <figure>
        <img className="h-[410px]" src={ownerImg} alt={firstName} />
      </figure>
      <div className="flex flex-col text-center p-7 items-center space-y-3">
        <h2 className="text-[#002172] hover:text-[#ec3323] text-2xl font-bold">
          <Link className="cursor-pointer" to={`/owner-details/${_id}`}>
            {firstName} {lastName}
          </Link>
        </h2>
        <p className="text-[#666666]">{profession}</p>
        {/* icons div */}
        <div className="flex gap-3">
          {/* facebook */}
          <div className="btn btn-circle text-lg bg-white text-[#002172] shadow-xl hover:text-white hover:bg-[#ec3323] hover:-mt-1">
            <a href={facebook}>
              <FaFacebookF />
            </a>
          </div>
          {/* twitter */}
          <div className="btn btn-circle text-lg bg-white text-[#002172] shadow-xl hover:text-white hover:bg-[#ec3323] hover:-mt-1">
            <a href={twitter}>
              <FaTwitter />
            </a>
          </div>
          {/* instagram */}
          <div className="btn btn-circle text-lg bg-white text-[#002172] shadow-xl hover:text-white hover:bg-[#ec3323] hover:-mt-1">
            <FaInstagram />
          </div>
          {/* linkedin */}
          <div className="btn btn-circle text-lg bg-white text-[#002172] shadow-xl hover:text-white hover:bg-[#ec3323] hover:-mt-1">
            <a href={linkedin}>
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerCard;
