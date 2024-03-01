//component added by "Fahima"

import SliderPartner from "../../Shared/Slider/SliderPartner";
import PageBanner from "../../Shared/banner for pages/PageBanner";
import Journey from "../Home/HomeComponents/Journey/Journey";
import OurAdvantage from "../Home/HomeComponents/OurAdvantage/OurAdvantage";
import Story from "./Story";

const AboutUs = () => {
  return (
    <div>
      <PageBanner
        heading={"About Us"}
        title={"About"}
        img={"https://i.ibb.co/y46DtNC/breadcrumb-2.jpg"}
      />
      {/* other components */}
      <div className="space-y-5">
        <Story />
        <OurAdvantage />
        <Journey />
        <SliderPartner />
      </div>
    </div>
  );
};

export default AboutUs;
