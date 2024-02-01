

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";

import "swiper/css";
import "swiper/css/pagination";
import "./Review.css";

import { Pagination } from "swiper/modules";
import Card from "./Card";
import CardTwo from "./CardTwo";

const EditReview = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <div className="bgtwo max-w-screen-2xl mx-auto py-20 px-5">
      <p className="lg:text-base md:text-sm text-xs font-medium mt-3 text-[#e33226] text-center">
        See Our Reviews
      </p>
      <h2 className="text-center md:text-3xl text-xl mb-6 font-bold mt-5  text-black">
        What Our Users Say About Us
      </h2>
      <Swiper
        loop={true}
        pagination={pagination}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <Card></Card>
        </SwiperSlide>
        <SwiperSlide>
          <CardTwo></CardTwo>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default EditReview;
