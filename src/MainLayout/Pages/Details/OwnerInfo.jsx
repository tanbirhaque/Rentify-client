//component added and designed by "Fahima"
import { CiLocationOn } from "react-icons/ci";
import { HiOutlinePhone } from "react-icons/hi2";
import { RiMailSendLine } from "react-icons/ri";

const OwnerInfo = ({ owner }) => {
  const {
    owner_name,
    owner_img,
    owner_phone,
    owner_email,
    owner_profession,
    owner_address,
  } = owner || {};

  return (
    <>
      <h2 className="text-3xl font-bold my-5">Agent Information</h2>
      {/* owner information */}
      <div className="flex gap-4 my-3">
        <img
          className="rounded-full h-[70px] w-[70px]"
          src={owner_img}
          alt="owner-image"
        />
        <div className="flex flex-col ">
          <h2 className="text-black text-lg font-bold">{owner_name} </h2>
          <p className="text-[#666666] text-sm">{owner_profession} </p>
        </div>
      </div>
      <hr />
      {/* contact information */}
      <div className="my-3 space-y-4">
        <p className="flex gap-2 text-base">
          <CiLocationOn className="text-[#ec3323] text-base" />
          {owner_address}
        </p>
        <p className="flex gap-2 text-base">
          <HiOutlinePhone className="text-[#ec3323] text-base" />
          {owner_phone}
        </p>
        <p className="flex gap-2 text-base">
          <RiMailSendLine className="text-[#ec3323] text-base" />
          {owner_email}
        </p>
      </div>
      <hr />
      {/* form */}
      <div className="my-3">
        <form
          className="mx-auto"
        >
          <input
            placeholder="Full Name"
            className=" w-full py-5 bg-[#F9F9F9] rounded-md px-2 my-4"
          />
          <input
            placeholder="Phone number"
            className="py-5 bg-[#F9F9F9] rounded-md px-2 mb-4 w-full"
          />
          <input
            placeholder="Email Address"
            className="py-5 bg-[#F9F9F9] rounded-md px-2 w-full"
          />
          <textarea
            className="textarea h-32 rounded-md px-2 w-full my-4 py-5 bg-[#F9F9F9]"
            placeholder="Enter you message"
          ></textarea>
          <button
            className="rounded p-4 bg-[#002172] hover:bg-[#EC3323] text-white mb-4 w-full"
          >
            Contact Request
          </button>
        </form>
      </div>
    </>
  );
};

export default OwnerInfo;
