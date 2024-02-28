//component added by "Fahima"

import { Link } from "react-router-dom";

const PageBanner = ({ img, heading, title }) => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero-overlay bg-[#000000c2] p-20">
        <h2 className="mb-5 text-2xl sm:text-[40px] font-bold text-white">
          {heading}
        </h2>
        <div className="text-white cursor-pointer">
          <Link to="/" className="hover:text-[#ec3323] ">
            Home {""}
          </Link>
          /<span className="text-[#ec3323] navAfter"> {title}</span>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
