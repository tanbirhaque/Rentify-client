//component added by "Fahima"

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import SliderPartner from "../../Shared/Slider/SliderPartner";
import Accordion from "./Accordion";

const Faq = () => {
  return (
    <>
      <Helmet>
        <title>Rentify | FAQ</title>
      </Helmet>
      <div>
        <div
          className="hero min-h-56"
          style={{
            backgroundImage: "url(https://i.ibb.co/sgWv0Bd/breadcrumb-1.jpg)",
          }}
        >
          <div className="hero-overlay bg-[#000000c2] p-20">
            <h2 className="mb-5 text-2xl md:text-[40px] font-bold text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-white">
              <Link to="/" className="hover:text-[#ec3323] cursor-pointer">
                Home{" "}
              </Link>
              / <span className="text-[#ec3323]"> FAQ</span>
            </p>
          </div>
        </div>
        <div className="flex p-5 md:p-20 bg-[#f9f9f9] flex-col lg:flex-row gap-5">
          <div className="flex-1 flex justify-center items-center">
            <img src="https://i.ibb.co/0GnDMfF/faq-img-2.png" />
          </div>
          <div className="flex-1">
            <p className="text-[#ec3323] font-medium mb-2">Have Questions?</p>
            <h2 className="text-2xl lg:text-[40px] font-bold">
              Frequently Asked Questions
            </h2>
            {/* accordion with component */}
            <Accordion />
          </div>
        </div>
        {/* slider */}
        <SliderPartner />
      </div>
    </>
  );
};

export default Faq;
