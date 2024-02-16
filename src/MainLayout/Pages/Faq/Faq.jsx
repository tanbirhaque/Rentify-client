//component added by "Fahima"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Faq = () => {
 
  return (
    <>
     <Helmet>
        <title>Rentify | FAQ</title>
        
    </Helmet>
    <div className="max-w-screen-2xl mx-auto">
      <div
        className="hero min-h-56"
        style={{
          backgroundImage: "url(https://i.ibb.co/sgWv0Bd/breadcrumb-1.jpg)",
        }}
      >
        <div className="hero-overlay bg-[#000000c2] p-28">
          <h2 className="mb-5 text-[40px] font-bold text-white">
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
      <div className="flex p-28 bg-[#f9f9f9] flex-col md:flex-row">
        <div className="flex-1">
          <img src="https://i.ibb.co/0GnDMfF/faq-img-2.png" />
        </div>
        <div className="flex-1">
          <p className="text-[#ec3323] font-medium">Have Questions?</p>
          <h2 className=" text-[40px] font-bold">
            Frequently Asked <br />
            Questions
          </h2>
          {/* accordion */}
          <div className="my-5 w-full">
            {/* question-1  */}
            <div className="mb-5 bg-white">
              <details className="collapse">
                <summary className="collapse-title text-xl font-medium">
                  How do I search for available rental properties on your
                  website?
                </summary>
                <div className="collapse-content">
                  <p>
                    You can easily search for rental properties on our website
                    by using the search bar and applying filters such as
                    location, price range, number of bedrooms, and other
                    preferences. Our user-friendly interface makes it simple to
                    find the perfect home for your needs.
                  </p>
                </div>
              </details>
            </div>
            {/* question-2  */}
            <div className="mb-5 bg-white">
              <details className="collapse ">
                <summary className="collapse-title text-xl font-medium">
                  What information is typically included in property listings?
                </summary>
                <div className="collapse-content">
                  <p>
                    Property listings on our website include essential
                    information such as the property's address, rental price,
                    number of bedrooms and bathrooms, amenities, and a detailed
                    description. You'll also find high-quality photos to give
                    you a comprehensive view of the property.
                  </p>
                </div>
              </details>
            </div>
            {/* question-3  */}
            <div className="mb-5 bg-white">
              <details className="collapse ">
                <summary className="collapse-title text-xl font-medium">
                  How can I schedule a viewing of a rental property?
                </summary>
                <div className="collapse-content">
                  <p>
                    To schedule a viewing, simply navigate to the property
                    listing you are interested in and use the provided contact
                    information to get in touch with the property manager or
                    owner. They will assist you in arranging a convenient time
                    for a viewing.
                  </p>
                </div>
              </details>
            </div>
            {/* question-4  */}
            <div className="mb-5 bg-white">
              <details className="collapse ">
                <summary className="collapse-title text-xl font-medium">
                  Are utilities included in the rental price, or are they
                  separate?
                </summary>
                <div className="collapse-content">
                  <p>
                    The inclusion of utilities varies from property to property.
                    Some rentals may include certain utilities in the monthly
                    rent, while others may require tenants to pay for utilities
                    separately. Check the individual property listings for
                    detailed information on what is covered in the rental
                    agreement.
                  </p>
                </div>
              </details>
            </div>
          </div>
        
        </div>
      </div>
      {/* slider */}
      <div className="p-20">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="grayscale hover:grayscale-0"
              src="https://i.ibb.co/JR4FJDp/partner-1.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" grayscale hover:grayscale-0"
              src="https://i.ibb.co/3RrTwFv/partner-2.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" grayscale hover:grayscale-0"
              src="https://i.ibb.co/68z9RZ7/partner-3.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" grayscale hover:grayscale-0"
              src="https://i.ibb.co/PzsKKjs/partner-5.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" grayscale hover:grayscale-0"
              src="https://i.ibb.co/TYxQwsZ/partner-6.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" grayscale hover:grayscale-0"
              src="https://i.ibb.co/cDhb0Pg/partner-4.png"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    </>
  );
};

export default Faq;
