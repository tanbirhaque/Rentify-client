import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import "./Review.css"





import { Pagination } from 'swiper/modules';
import Card from './Card';

const EditReview = () => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">'  + '</span>';
        },
      };

    return (
        <div className='bgtwo mt-10 mb-20 max-w-screen-2xl mx-auto py-10 px-5'>
         <p className="lg:text-base md:text-sm text-xs font-medium mt-3 text-[#e33226] text-center">
         See Our Reviews
         </p>
         <h2 className="text-center md:text-3xl text-xl mb-6 font-bold mt-5  text-black">
         What Our Users Say About Us
         </h2>
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
          spaceBetween={30}
      slidesPerView={1}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
        >
          <SwiperSlide><Card></Card></SwiperSlide>
          <SwiperSlide><Card></Card></SwiperSlide>
          
        </Swiper>
      </div>
    );
};

export default EditReview;