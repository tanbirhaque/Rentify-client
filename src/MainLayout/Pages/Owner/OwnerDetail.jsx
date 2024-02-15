import { Link, useLoaderData, useParams } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import PropertyCard from "../../Shared/PropertyCards/PropertyCard";

const OwnerDetail = () => {
  const owners = useLoaderData();
  const { id } = useParams();

  const owner = owners.find((owner) => owner._id == id);

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
    <div className="max-w-screen-2xl mx-auto">
      <div
        className="hero min-h-56"
        style={{
          backgroundImage: "url(https://i.ibb.co/Zdk0mLj/breadcrumb-4.jpg)",
        }}
      >
        <div className="hero-overlay bg-[#000000c2] p-28">
          <h2 className="mb-5 text-[40px] font-bold text-white">
            Owner Details
          </h2>
          <p className="text-white">
            <Link to="/" className="hover:text-[#ec3323] cursor-pointer">
              Home{" "}
            </Link>
            / <span className="text-[#ec3323]"> Owner Details</span>
          </p>
        </div>
      </div>
      <div className="p-24">
        <div className="shadow-2xl p-14 ">
          <div className="flex flex-col md:flex-row">
            <figure className="flex-1">
              <img
                className="rounded-lg w-[484px] h-[513px]"
                src={ownerImg}
                alt={`image of ${firstName}`}
              />
            </figure>
            <div className="flex-1 p-7 space-y-5">
              <h2 className="text-black text-4xl font-bold">
                {firstName} {lastName}{" "}
              </h2>
              <p className="text-[#666666]">{profession}</p>
              <hr />
              <div className="space-y-5">
                <p>
                  {" "}
                  <span className="text-lg items-center font-bold inline-block">
                    Experience:
                  </span>{" "}
                  5years
                </p>
                <p>
                  {" "}
                  <span className="text-lg items-center font-bold inline-block">
                    Address:
                  </span>{" "}
                  {address}
                </p>
                <p>
                  {" "}
                  <span className="text-lg items-center font-bold inline-block">
                    {" "}
                    Phone:
                  </span>{" "}
                  {number}
                </p>
                <p>
                  {" "}
                  <span className="text-lg items-center font-bold inline-block">
                    Email:
                  </span>{" "}
                  {ownerEmail}
                </p>
                <p>
                  {" "}
                  <span className="text-lg items-center font-bold inline-block">
                    Fax:
                  </span>{" "}
                  +2 329-504-1984
                </p>
              </div>
              <hr />
              {/* icons div */}
              <div className="flex gap-3">
                <h1 className="text-lg flex items-center font-bold">
                  Follow On :
                </h1>
                {/* facebook */}
                <div className="btn btn-circle text-lg bg-[#f9f9f9] text-[#002172] shadow-xl hover:text-white hover:bg-[#ec3323] hover:-mt-1">
                  <a href={facebook}>
                    <FaFacebookF />
                  </a>
                </div>
                {/* twitter */}
                <div className="btn btn-circle text-lg bg-[#f9f9f9] text-[#002172] shadow-xl hover:text-white hover:bg-[#ec3323] hover:-mt-1">
                  <a href={twitter}>
                    <FaTwitter />
                  </a>
                </div>
                {/* insta */}
                <div className="btn btn-circle text-lg bg-[#f9f9f9] text-[#002172] shadow-xl hover:text-white hover:bg-[#ec3323] hover:-mt-1">
                  <FaInstagram />
                </div>
                {/* linkedin */}
                <div className="btn btn-circle text-lg bg-[#f9f9f9] text-[#002172] shadow-xl hover:text-white hover:bg-[#ec3323] hover:-mt-1">
                  <a href={linkedin}>
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* info */}
          <div className="mt-5 space-y-3">
            <h2 className="text-black text-2xl font-bold">
              About {firstName} {lastName}
            </h2>
            <p>
            {description}
            </p>
          </div>
          {/* properties */}
          <div className="">
            <p className="text-[#ec3323] font-semibold text-xl border-b-2 border-[#ec3323] w-fit my-5">
              Listed Properties
            </p>
            <p className="text-red-700 text-4xl">Not added yet</p>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-3 xl:px-0">
              <PropertyCard
                img={"https://i.ibb.co/7bRXHhS/property-2.jpg"}
                details_path={"/details"}
              />
              <PropertyCard
                img={"https://i.ibb.co/1LKG3cv/property-3.jpg"}
                details_path={"/details"}
              />
              <PropertyCard
                img={"https://i.ibb.co/QcDcJjZ/property-4.jpg"}
                details_path={"/details"}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerDetail;
