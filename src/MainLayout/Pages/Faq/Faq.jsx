//component added by "Fahima"

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import SliderPartner from "../../Shared/Slider/SliderPartner";
import Accordion from "./Accordion";
import PageBanner from "../../Shared/banner for pages/PageBanner";

const Faq = () => {
  return (
    <>
      <Helmet>
        <title>Rentify | FAQ</title>
      </Helmet>
      <div>
        <PageBanner
          img={"https://i.ibb.co/sgWv0Bd/breadcrumb-1.jpg"}
          heading={"Frequently Asked Questions"}
          title={"FAQ"}
        />
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
