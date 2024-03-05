//component added by "Fahima"

import { useLoaderData, useParams } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import PageBanner from "../../Shared/banner for pages/PageBanner";
import OwnerProperty from "./OwnerProperty";
import useProperties from "../../../Hooks/useProperties";

const OwnerDetail = () => {
  const owners = useLoaderData();
  const [properties] = useProperties();
  const { id } = useParams();

  const owner = owners.find((owner) => owner._id == id);

  const ownerProperties = properties.filter(
    (item) => item.property_info.owner_details.owner_email === owner.ownerEmail
  );

  // console.log(ownerProperties);

  const {
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
      <PageBanner
        img={"https://i.ibb.co/Zdk0mLj/breadcrumb-4.jpg"}
        heading={"Owner Details"}
        title={"Owner Details"}
      />
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
                {/* instagram */}
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
          </div>
          {/* info */}
          <div className="mt-5 space-y-3">
            <h2 className="text-black text-2xl font-bold">
              About {firstName} {lastName}
            </h2>
            <p>{description}</p>
          </div>
          {/* properties */}
          <div className="">
            <p className="text-[#ec3323] font-semibold text-xl border-b-2 border-[#ec3323] w-fit my-5">
              Listed Properties
            </p>
            {ownerProperties.length <= 0 ? (
              <p className="text-red-700 text-4xl">No properties to show.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-3 xl:px-0">
                {ownerProperties.map((property) => (
                  <OwnerProperty
                    key={ownerProperties._id}
                    property={property}
                    owner={owner}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerDetail;
