import { CiLocationOn } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { LuTriangleRight } from "react-icons/lu";
import { PiBathtub } from "react-icons/pi";
import { Link } from "react-router-dom";
import { Scrollbars } from 'react-custom-scrollbars';
import ButtonBlue from "../../../MainLayout/Shared/buttons/Blue/ButtonBlue";

const ReqCard_mod = ({ requestedProperties }) => {
    console.log(requestedProperties);
    const { _id, property, requestStatus } = requestedProperties || {};
    const { owner_img, owner_name, owner_email, owner_phone } = property.owner_details || {}
    const { address } = property.property_location || {}
    const { property_img, property_title, property_for, property_details, ownership_duration } = property || {}
    console.log(requestedProperties);



    return (
        <>
            <div className="bg-white mb-5 rounded-lg border">
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
                                                ${property_details?.property_price} / <span className="text-gray-500">{ownership_duration}</span>
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
                                            {address?.street},{" "}
                                            {address?.city},{" "}
                                            {address?.state},{" "}
                                            {address?.country}
                                        </span>
                                    </p>
                                    {/* <div className="border max-h-44 rounded-lg mt-3 pl-4 pt-4 overflow-y-scroll"> */}
                                    <p className="text-wrap text-[18px] font-semibold mt-3">Description: <span className="inline-block w-full break-words font-normal text-[16px]">Indulge in the epitome of urban sophistication with our
                                        Stylish Urban Loft, a captivating space meticulously curated
                                        to embody the essence of Industrial Chic Vibes. This loft is
                                        a harmonious fusion of contemporary allure and industrial
                                        aesthetics, where every element is carefully chosen to
                                        create an environment that is not only stylish but also
                                        exceptionally comfortable. As you enter, be greeted by the
                                        alluring play of textures - exposed brick walls that tell a
                                        story of the building&#39;s history, polished concrete
                                        floors providing a sleek foundation, and strategically
                                        placed metal accents that add an industrial edge to the
                                        overall design. The open layout enhances the loft&#39;s
                                        spacious feel, inviting you to explore each carefully
                                        appointed corner. The carefully selected furnishings and
                                        decor seamlessly integrate modern elegance with industrial
                                        elements. Statement pieces, such as artisanal light fixtures
                                        and bespoke furniture, elevate the space, offering both
                                        functionality and aesthetic appeal. The color palette, a
                                        blend of muted tones and bold contrasts, complements the
                                        loft&#39;s overall ambiance, creating a cozy yet stylish
                                        retreat.</span></p>
                                    {/* </div> */}
                                </div>
                            </Scrollbars>
                        </div>
                    </div>
                    {/* <div className="divider divider-horizontal ml-0 mr-0"></div> */}
                    {/* Owner details */}
                    <div className="min-w-1/4 flex-grow pt-3">
                        <div className="flex flex-col justify-center">
                            <div className="relative h-16 min-w-16">
                                <img
                                    className="rounded-full h-16 min-w-16 mx-auto "
                                    src={owner_img}
                                    alt="requester-image"
                                />
                                <div className="badge badge-primary badge-outline absolute top-0 right-2">Owner</div>
                            </div>
                            <div className="text-center">
                                <h2 className="text-black text-lg font-bold">{owner_name}</h2>
                                <p className="text-[#666666] truncate">{owner_email}</p>
                                <p className="text-[#666666] text-sm">{owner_phone}</p>
                            </div>
                        </div>
                        <div className="flex justify-center my-4">
                            <ButtonBlue
                                titleBlue={"Contact with owner"}
                                padX={"px-8"}
                                padY={"py-3"}
                            ></ButtonBlue>
                        </div>
                        <hr />
                        <div className="">
                            <div className="flex justify-between">
                                <p>Request Status:</p>
                                <span>Accepted</span>
                            </div>
                            <div className="flex justify-center">
                                {/* <button className="w-full text-center bg-[#002172] text-white py-3 mt-[23px] rounded-br-md">
                                    Pay Now
                                </button> */}
                                <button className="w-full text-center bg-gray-400 text-white py-3 mt-[23px] rounded-br-md" disabled>
                                    Pay Now
                                </button>
                                {/* <ButtonBlue
                                    titleBlue={"Contact with owner"}
                                    padX={"px-8"}
                                    padY={"py-3"}
                                ></ButtonBlue> */}
                            </div>
                        </div>
                        {/* <div className="flex justify-center mt-3">
                            <ButtonBlue
                                titleBlue={"Pay Now"}
                                padX={"px-16"}
                                padY={"py-3"}
                                disabled={'disabled'}
                            ></ButtonBlue>
                        </div> */}
                        {/* <button
                            className="rounded p-4 bg-[#002172] text-white w-full mt-3"
                            disabled
                        >
                            Request <span className=" uppercase">{requestStatus}</span>
                        </button>
                        {requestStatus == "accepted" ?
                            <button
                                className="rounded p-4 bg-[#2797a1] text-white w-1/3 mx-auto mt-3 font-bold"
                                disabled
                            >Pay</button>
                            : ""} */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReqCard_mod;