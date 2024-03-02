import CommonHeading from "../../../../Shared/CommonHeading/CommonHeading";
import ButtonBlue from "../../../../Shared/buttons/Blue/ButtonBlue";
import { Link } from "react-router-dom";

const OurAdvantage = () => {
  return (
    <>
      <div className="text-center max-w-screen-xl mx-auto my-5">
        <CommonHeading
          small={"Advantages"}
          big={"Our Best Advantages"}
        ></CommonHeading>
        <div className="grid grid-rows-1 md:grid-cols-3 self-center justify-center items-center py-8 md:px-4 xl:px-0">
          {/* <div className="flex flex-col md:flex-row self-center justify-center items-center py-8 md:px-4 xl:px-0"> */}
          <div className="text-center px-3 ">
            <img
              className="mx-auto h-[233px]"
              src="https://i.ibb.co/3WSGgxP/download-1-removebg-preview-1.png"
              alt=""
            />
            <h1 className="text-[22px] poppins-font font-semibold text-black mt-5 mb-3">
              Smart Home Design
            </h1>
            <p className="leading-7 text-[#666666]">
              Smart Home Design offers remote control of appliances, energy
              optimization, and advanced security, ensuring convenience,
              efficiency, and peace of mind through personalized AI integration.
            </p>
          </div>
          <div className="text-center px-3">
            <img
              className="mx-auto h-[233px]"
              src="https://i.ibb.co/TvzRwLV/download-removebg-preview-1.png"
              alt=""
            />
            <h1 className="text-[22px] poppins-font font-semibold text-black mt-5 mb-3">
              Beautiful Scene Around
            </h1>
            <p className="leading-7 text-[#666666]">
              The sun gently sets, casting hues of orange and pink across the
              sky. A serene lake reflects the majestic mountains, while birdsong
              fills the air, creating a harmonious symphony of nature&#39;s
              beauty.
            </p>
          </div>
          <div className="text-center px-3">
            <img
              className="mx-auto h-[233px]"
              src="https://i.ibb.co/wdj5Sjb/download-removebg-preview-2-1.png"
              alt=""
            />
            <h1 className="text-[22px] poppins-font font-semibold text-black mt-5 mb-3">
              Complete 24/7 Support
            </h1>
            <p className="leading-7 text-[#666666]">
              Our 24/7 support guarantees round-the-clock assistance, ensuring
              prompt resolution of inquiries or issues, providing continuous
              peace of mind and support whenever needed.
            </p>
          </div>
        </div>
        <Link to="/all">
          <ButtonBlue
            titleBlue={"Explore Properties"}
            padX={"px-8"}
            padY={"py-[16px]"}
            textSize={"text-[16px]"}
          ></ButtonBlue>
        </Link>
      </div>
    </>
  );
};

export default OurAdvantage;
