//component added by "Fahima"

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import SliderPartner from "../../Shared/Slider/SliderPartner";

const HowItWorks = () => {
  return (
    <>
    <Helmet>
        <title>Rentify | How It Works</title>
        
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
            How It Works
          </h2>
          <p className="text-white">
            <Link to="/" className="hover:text-[#ec3323] cursor-pointer">
              Home{" "}
            </Link>
            / <span className="text-[#ec3323]">How It Works</span>
          </p>
        </div>
      </div>
      <div className="p-16 bg-[#f9f9f9] flex-col md:flex-row text-center items-center justify-center space-y-7">
        <h1 className="text-2xl md:text-[40px] font-bold">Booking Your Home in 3 Simple Steps</h1>
        <p className="text-sm md:text-lg text-[#666666] text-center">
          Secure your dream home effortlessly in just 3 simple steps. Explore
          listings, <br />
          take virtual tours, and book with ease. Your new home journey starts
          here!
        </p>
        <div className="flex flex-col md:flex-row gap-20 ">
          {/* 1st */}
          <div className="flex flex-col items-center">
            <div
              className="hero h-[190px] w-[220px]"
              style={{
                backgroundImage: "url(https://i.ibb.co/9ydVR9B/hw-shape-1.png)",
              }}
            >
              <img src="https://i.ibb.co/z53SdvS/hw-1.png" />
              <span className="text-[#00000024] text-6xl ml-40 font-semibold mb-24">
                01
              </span>
            </div>
            <h1 className="font-bold text-2xl">Search & Select</h1>
            <p className="text-[#666666]">
              Find your perfect home in two simple steps: search and select.
              Start your journey to a new home today!
            </p>
          </div>
          {/* 2nd */}
          <div className="flex flex-col items-center">
            <div
              className="hero h-[190px] w-[220px]"
              style={{
                backgroundImage: "url(https://i.ibb.co/9ydVR9B/hw-shape-1.png)",
              }}
            >
              <img src="https://i.ibb.co/nsRV52d/hw-2.png" />
              <span className="text-[#00000024] text-6xl ml-40 font-semibold mb-24">
                02
              </span>
            </div>
            <h1 className="font-bold text-2xl">Reserve The Property</h1>
            <p className="text-[#666666]">
              Reserve your ideal property seamlessly. Explore, choose, and
              secure your dream home with ease.
            </p>
          </div>
          {/* 3rd */}
          <div className="flex flex-col items-center">
            <div
              className="hero h-[190px] w-[220px]"
              style={{
                backgroundImage: "url(https://i.ibb.co/9ydVR9B/hw-shape-1.png)",
              }}
            >
              <img src="https://i.ibb.co/ZgVK4dD/hw-3.png" />
              <span className="text-[#00000024] text-6xl ml-40 font-semibold mb-24">
                03
              </span>
            </div>
            <h1 className="font-bold text-2xl">Confirm Reservation</h1>
            <p className="text-[#666666]">
              Confirm your reservation effortlessly. Verify your details, secure
              your dream property, and get ready to move into your new home.
            </p>
          </div>
        </div>
      </div>
      {/* slider */}
     <SliderPartner/>
    </div>
    </>
  );
};

export default HowItWorks;
