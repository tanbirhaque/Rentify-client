//component added by "Fahima"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useEffect, useState } from "react";

const SliderPartner = () => {
  //
  // code for responsive slides
  const [slidesPerView, setSlidesPerView] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSlidesPerView(4);
      } else if (window.innerWidth >= 576) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 400) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  //
  //

  //
  const images = [
    {
      id: 1,
      src: "https://i.ibb.co/JR4FJDp/partner-1.png",
    },
    {
      id: 2,
      src: "https://i.ibb.co/3RrTwFv/partner-2.png",
    },
    {
      id: 3,
      src: "https://i.ibb.co/68z9RZ7/partner-3.png",
    },
    {
      id: 4,
      src: "https://i.ibb.co/cDhb0Pg/partner-4.png",
    },
    {
      id: 5,
      src: "https://i.ibb.co/PzsKKjs/partner-5.png",
    },
    {
      id: 6,
      src: "https://i.ibb.co/TYxQwsZ/partner-6.png",
    },
  ];
  //

  return (
    <>
      <div className="h-60 flex items-center mx-auto pl-20">
        {/* <div className="p-16"> */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={slidesPerView}
          //   slidesPerView={4}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <img
                className="grayscale hover:grayscale-0"
                src={image.src}
                alt={`slides no ${image.id}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SliderPartner;
