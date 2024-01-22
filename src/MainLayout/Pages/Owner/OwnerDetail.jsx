import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import PropertyCard from "../../Shared/PropertyCards/PropertyCard";

const OwnerDetail = () => {
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
          <div className="flex">
            <figure className="flex-1">
              <img
                className="rounded-lg"
                src="https://i.ibb.co/KbLv3yq/agent-1.jpg"
                alt="Agent-1"
              />
            </figure>
            <div className="flex-1 p-7 space-y-5">
              <h2 className="text-black text-4xl font-bold">Erik Ondricka</h2>
              <p className="text-[#666666]">Real Estate Agent</p>
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
                  77 Morris St. Ridgewood, NJ 67655
                </p>
                <p>
                  {" "}
                  <span className="text-lg items-center font-bold inline-block">
                    {" "}
                    Phone:
                  </span>{" "}
                  +1 719-504-1984
                </p>
                <p>
                  {" "}
                  <span className="text-lg items-center font-bold inline-block">
                    Email:
                  </span>{" "}
                  info@erik.com
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
                  <FaFacebookF />
                </div>
                {/* twitter */}
                <div className="btn btn-circle text-lg bg-[#f9f9f9] text-[#002172] shadow-xl hover:text-white hover:bg-[#ec3323] hover:-mt-1">
                  <FaTwitter />
                </div>
                {/* insta */}
                <div className="btn btn-circle text-lg bg-[#f9f9f9] text-[#002172] shadow-xl hover:text-white hover:bg-[#ec3323] hover:-mt-1">
                  <FaInstagram />
                </div>
                {/* linkedin */}
                <div className="btn btn-circle text-lg bg-[#f9f9f9] text-[#002172] shadow-xl hover:text-white hover:bg-[#ec3323] hover:-mt-1">
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
          </div>{" "}
          {/* info */}
          <div className="mt-5 space-y-3">
            <h2 className="text-black text-2xl font-bold">
              About Erik Ondricka
            </h2>
            <p>
              {" "}
              Erik Ondricka is a real estate professional boasting a rich and
              diverse background with a commendable five years of experience in
              the industry. Currently calling New Jersey home, Erik has honed
              his expertise in various facets of real estate, from assisting
              clients in the intricacies of property transactions to navigating
              the complexities of the rental market. As a dedicated real estate
              agent, Erik&lsquo;s comprehensive understanding of the dynamic New
              Jersey real estate landscape positions him as a reliable source of
              knowledge and guidance for his clients.
            </p>
          </div>
          {/* properties */}
          <div className="">
            <p className="text-[#ec3323] font-semibold text-xl border-b-2 border-[#ec3323] w-fit my-5">
              Listed Properties
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-3 xl:px-0">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerDetail;
