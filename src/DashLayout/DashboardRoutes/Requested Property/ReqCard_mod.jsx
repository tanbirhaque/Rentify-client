// Requested Property card designed and implemented by Tanbir

import { CiLocationOn } from "react-icons/ci";
// import { IoBedOutline } from "react-icons/io5";
// import { LuTriangleRight } from "react-icons/lu";
// import { PiBathtub } from "react-icons/pi";
import { Link, useParams } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import ButtonBlue from "../../../MainLayout/Shared/buttons/Blue/ButtonBlue";
import { useState } from "react";
import useProperties from "../../../Hooks/useProperties";
import Modal from "./Modal";

const ReqCard_mod = ({ requestedProperties }) => {
    // console.log(requestedProperties);
    const { _id, property, requestStatus, propertyID } = requestedProperties || {};
    const { owner_img, owner_name, owner_email, owner_phone } = property.owner_details || {}
    const { address } = property.property_location || {}
    // console.log(address);
    const { property_img, property_title,property_category,property_for, property_details, ownership_duration } = property || {}
    // console.log(requestedProperties);
    // console.log(property_category);
    const { property_status } = property_details || {}
    // console.log('This prop', property_status);

  const defaultImg =
    "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1696786604~exp=1696787204~hmac=c10645727b8724eecda4984ef1d8fbfba92a9c9072a57b851c28c9b1d8d62b81";

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const properties = useProperties()
  const { id } = useParams();
const item = properties.find((item) => item._id == id);

const { property_info } = item || {};
const {
  owner_details,
} = property_info || {};

  return (
    <>
      <div className="bg-white mb-6 rounded-lg border">
        <div className="hover:shadow-md mx-auto flex rounded-lg">
          {/* Property details */}
          <div className="rounded-l-lg w-3/4 flex h-80">
            <figure className="min-w-1/2 h-full rounded-l-lg">
              <img
                className="w-full h-full rounded-l-lg"
                src={property_img}
                alt={property_img}
              />
            </figure>
            <div className="h-80 py-5 pl-5">
              <Scrollbars style={{ width: 470 }}>
                <div className="mr-5">
                  <div className="flex justify-between items-center mb-2">
                    <button className="bg-[#e33226] rounded-md btn-one py-[8px] px-[12px] text-white text-[16px] capitalize">
                      {property_for}
                    </button>
                    <p className="text-right text-[#666666]">
                      <span className="text-[#002172] text-[22px] font-bold ">
                        ${property_details?.property_price} /{" "}
                        <span className="text-gray-500">
                          {ownership_duration}
                        </span>
                      </span>
                    </p>
                  </div>
                  <Link to={`/details/${_id}`}>
                    <h2 className="hover:text-[#e33226] text-[26px] poppins-font font-semibold ">
                      {property_title}
                    </h2>
                  </Link>
                  <p className="flex text-[16px] text-[#666666] items-center gap-2">
                    <CiLocationOn className="text-[#e33226]" />
                    <span className="truncate overflow-hidden">
                      {address?.street}, {address?.city}, {address?.state},{" "}
                      {address?.country}
                    </span>
                  </p>
                  {/* <div className="border max-h-44 rounded-lg mt-3 pl-4 pt-4 overflow-y-scroll"> */}
                  <p className="text-wrap text-[18px] font-semibold mt-3">
                    Description:{" "}
                    <span className="inline-block w-full break-words font-normal text-[16px]">
                      Indulge in the epitome of urban sophistication with our
                      Stylish Urban Loft, a captivating space meticulously
                      curated to embody the essence of Industrial Chic Vibes.
                      This loft is a harmonious fusion of contemporary allure
                      and industrial aesthetics, where every element is
                      carefully chosen to create an environment that is not only
                      stylish but also exceptionally comfortable. As you enter,
                      be greeted by the alluring play of textures - exposed
                      brick walls that tell a story of the building&#39;s
                      history, polished concrete floors providing a sleek
                      foundation, and strategically placed metal accents that
                      add an industrial edge to the overall design. The open
                      layout enhances the loft&#39;s spacious feel, inviting you
                      to explore each carefully appointed corner. The carefully
                      selected furnishings and decor seamlessly integrate modern
                      elegance with industrial elements. Statement pieces, such
                      as artisanal light fixtures and bespoke furniture, elevate
                      the space, offering both functionality and aesthetic
                      appeal. The color palette, a blend of muted tones and bold
                      contrasts, complements the loft&#39;s overall ambiance,
                      creating a cozy yet stylish retreat.
                    </span>
                  </p>
                  {/* </div> */}
                </div>
              </Scrollbars>
            </div>
          </div>
          <div className="min-h-full min-w-[1px] max-w-[1px] bg-gray-300"></div>
          {/* Owner details */}
          <div className="min-w-1/4 flex-grow pt-3">
            <div className="flex flex-col justify-center">
              <div className="relative flex justify-center">
                <div className="min-h-16 min-w-16 max-w-16 border rounded-full mb-2">
                  <img
                    className="rounded-full h-16 min-w-16 mx-auto "
                    src={owner_img ? owner_img : defaultImg}
                    alt="requester-image"
                  />
                </div>
                <div className="badge badge-primary badge-outline absolute top-0 right-2">
                  Owner
                </div>
              </div>
              <div className="text-center">
                <h2 className="text-black text-lg font-bold">{owner_name}</h2>
                <p className="text-[#666666] truncate">{owner_email}</p>
                <p className="text-[#666666] text-sm">{owner_phone}</p>
              </div>
            </div>
            {/* btn code modified by sadia */}
            {/* previous code */}
            {/* <div className="flex justify-center my-4">
                            <ButtonBlue
                                titleBlue={"Contact with owner"}
                                padX={"px-8"}
                                padY={"py-3"}
                            ></ButtonBlue>
                        </div> */}
            {/* btn with modal by sadia */}

            {/* <div className="flex justify-center my-4">
                            <ButtonBlue
                                titleBlue={"Contact with owner"}
                                padX={"px-8"}
                                padY={"py-3"}
                                onClick={openModal}
                            ></ButtonBlue>
                        </div> */}

                  

   
            <div className="flex justify-center my-4">
              <button className="bg-[#002172] py-3 px-6 hover:bg-[#e33226] text-white rounded-md" onClick={openModal}>
                Contact with owner
              </button>
            </div>

            {isModalOpen && (
              <dialog id="my_modal_1" className="modal" open>
                <div className="modal-box">
                 <Modal owner={owner_details}></Modal>
                  <div className="modal-action">
                    <form method="dialog" onSubmit={closeModal}>
                     
                      <div className="-mt-20">
                      <button type="submit" className=" bg-[#e33226] py-3  px-8  hover:bg-[#002172] text-white w-full rounded  ">
                        Close
                      </button>
                      </div>
                    </form>
                  </div>
                </div>
              </dialog>
            )}

            <hr />
            <div className="mt-[6px]">
              <div className="flex justify-between px-2">
                <p className="text-[18px] font-semibold">Request Status:</p>
                <span
                  className={`capitalize text-[18px] font-semibold 
                                ${
                                  requestStatus == "pending"
                                    ? "text-purple-600"
                                    : ""
                                }
                                ${
                                  requestStatus == "accepted"
                                    ? "text-green-600"
                                    : ""
                                }
                                ${
                                  requestStatus == "rejected"
                                    ? "text-red-500"
                                    : ""
                                }
                                `}
                >
                  {requestStatus}
                </span>
              </div>
              <div className="flex justify-center">
                {/* <button className="w-full text-center bg-[#002172] text-white py-3 mt-[23px] rounded-br-md">
                                    Pay Now
                                </button> */}
                                <Link to={`/dashboard/payment?price=${property_details?.property_price}&requestId=${_id}&propertyId=${propertyID}&owner=${owner_email}&property_status=${property_for == 'sale' ? 'Sold' : 'Rented'}&property_img=${property_img}&property_title=${property_title}&property_location=${address}&property_category=${property_category}`}
                                    className={`w-full text-center text-white py-3 mt-[24px] rounded-br-md hover:text-green-500 transition-all duration-300 font-bold
                                ${requestStatus == 'pending' ? 'bg-gray-400 btn-disabled' : 'bg-[#002172]'} 
                                ${requestStatus == 'rejected' ? 'bg-gray-400 btn-disabled' : 'bg-[#002172]'} 
                                `}
                >
                  <button>Pay Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReqCard_mod;
