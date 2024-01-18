// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
// import './Review.css'
// import Card from "./Card";

// const Review = () => {
//     return (
//       <div className="bgtwo">
//         <Card></Card>
//       </div>











      //   <div className="mt-10 mb-20 max-w-screen-2xl mx-auto bgtwo">
        
      //   <p className="lg:text-base md:text-sm text-xs font-medium mt-3 text-[#e33226] text-center">
      //   See Our Reviews
      //   </p>
      //   <h2 className="text-center md:text-3xl text-xl font-bold mt-5 mb-5 text-black">
      //   What Our Users Say About Us
      //   </h2>
  
      //   <Swiper
      //     navigation={true}
      //     modules={[Navigation]}
      //     className="mySwiper mt-4 mb-20"
      //   >
         
  
      //     <SwiperSlide> 
      //       <figure className="max-w-screen-md mx-auto text-center">
      //         <svg
      //           className="w-10 h-10 mx-auto mb-3 text-[#002172] dark:text-gray-600"
      //           aria-hidden="true"
      //           xmlns="http://www.w3.org/2000/svg"
      //           fill="currentColor"
      //           viewBox="0 0 18 14"
      //         >
      //           <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
      //         </svg>
      //         <blockquote>
      //           <p className="lg:text-2xl md:text-xl italic text-sm font-medium text-gray-900 dark:text-white">
      //             ""I absolutely love Rentify! The process of renting items is so smooth, and the variety of products available is impressive. The customer support team is incredibly helpful and responsive. I've used Rentify for multiple occasions, and it's always been a fantastic experience. Highly recommended"
      //           </p>
      //         </blockquote>
      //         <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
      //           <img
      //             className="w-12 h-12 rounded-full"
      //             src="https://i.ibb.co/FYTT19c/smiling-young-man-with-crossed-arms-outdoors.jpg"
      //             alt="profile picture"
      //           />
      //           <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
      //             <cite className="pe-3 font-medium text-[#002172] dark:text-white">
      //             Tony Yorke
      //             </cite>
      //             <div className="rating rating-sm    mx-auto">
      //                   <input
      //                     type="radio"
      //                     name="rating-5"
      //                     className="mask mask-star-2 bg-orange-400 ml-3 self-center"
      //                   />
      //                   <p className="mx-auto text-[#e33226] font-normal ml-2">
      //                     4.8 ratings
      //                   </p>
      //                 </div>
      //           </div>
               
      //         </figcaption>
              
      //       </figure>
      //       </SwiperSlide>
  
      //       <SwiperSlide>
      //       <figure className="max-w-screen-md mx-auto text-center">
      //         <svg
      //           className="w-12 h-12 mx-auto mb-3 text-[#002172] dark:text-gray-600"
      //           aria-hidden="true"
      //           xmlns="http://www.w3.org/2000/svg"
      //           fill="currentColor"
      //           viewBox="0 0 18 14"
      //         >
      //           <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
      //         </svg>
      //         <blockquote>
      //           <p className="lg:text-2xl md:text-xl text-sm italic font-medium text-gray-900 dark:text-white">
      //           "Rentify has made my life so much easier. From party supplies to camping gear, I've found everything I needed without the hassle of buying. The quality of the items is top-notch, and the delivery and pickup process is super convenient. Rentify is now my go-to for all my temporary needs."
      //           </p>
      //         </blockquote>
      //         <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
      //           <img
      //             className="w-10 h-10 rounded-full"
      //             src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
      //             alt="profile picture"
      //           />
      //           <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
      //             <cite className="pe-3 font-medium text-[#002172] dark:text-white">
      //               Michael Gough
      //             </cite>
      //             <div className="rating rating-sm    mx-auto">
      //                   <input
      //                     type="radio"
      //                     name="rating-5"
      //                     className="mask mask-star-2 bg-orange-400 ml-3 self-center"
      //                   />
      //                   <p className="mx-auto text-[#e33226] font-normal ml-2">
      //                     5 ratings
      //                   </p>
      //                 </div>
      //           </div>
      //         </figcaption>
      //       </figure>
      //     </SwiperSlide>
  
      //     <SwiperSlide> 
      //       <figure className="max-w-screen-md mx-auto text-center">
      //         <svg
      //           className="w-12 h-12 mx-auto mb-3 text-[#002172] dark:text-gray-600"
      //           aria-hidden="true"
      //           xmlns="http://www.w3.org/2000/svg"
      //           fill="currentColor"
      //           viewBox="0 0 18 14"
      //         >
      //           <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
      //         </svg>
      //         <blockquote>
      //           <p className="lg:text-2xl md:text-xl text-sm italic font-medium text-gray-900 dark:text-white">
      //           "As a frequent traveler, Rentify has been a lifesaver. Instead of lugging bulky items, I can easily rent them at my destination. The website is intuitive, and the search feature makes it simple to find what I need. The items are always in great condition, and the renting process is hassle-free. Thank you, Rentify, for making my travels more convenient!"
      //           </p>
      //         </blockquote>
      //         <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
      //           <img
      //             className="w-10 h-10 rounded-full"
      //             src="https://i.ibb.co/zGwPwtw/smiling-man-sitting-street-cafe-table-with-his-arms-crossed.jpg"
      //             alt="profile picture"
      //           />
      //           <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
      //             <cite className="pe-3 font-medium text-[#002172] dark:text-white">
      //             Dave Clark
      //             </cite>
      //             <div className="rating rating-sm    mx-auto">
      //                   <input
      //                     type="radio"
      //                     name="rating-5"
      //                     className="mask mask-star-2 bg-orange-400 ml-3 self-center"
      //                   />
      //                   <p className="mx-auto text-[#e33226] font-normal ml-2">
      //                     4.2 ratings
      //                   </p>
      //                 </div>
      //           </div>
      //         </figcaption>
      //       </figure></SwiperSlide>
      //     <SwiperSlide> 
      //       <figure className="max-w-screen-md mx-auto text-center">
      //         <svg
      //           className="w-12 h-12 mx-auto mb-3 text-[#002172] dark:text-gray-600"
      //           aria-hidden="true"
      //           xmlns="http://www.w3.org/2000/svg"
      //           fill="currentColor"
      //           viewBox="0 0 18 14"
      //         >
      //           <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
      //         </svg>
      //         <blockquote>
      //           <p className="lg:text-2xl md:text-xl text-sm italic font-medium text-gray-900 dark:text-white">
      //           "Rentify has been a game-changer for our events. We regularly rent audio equipment, projectors, and even furniture for our company functions. The platform is user-friendly, and the pricing is transparent. It saves us time and money compared to buying items we only need occasionally. Highly satisfied with Rentify!"
      //           </p>
      //         </blockquote>
      //         <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
      //           <img
      //             className="w-10 h-10 rounded-full"
      //             src="https://i.ibb.co/ZNqfZb3/portrait-smiling-blonde-woman.jpg"
      //             alt="profile picture"
      //           />
      //           <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
      //             <cite className="pe-3 font-medium text-[#002172] dark:text-white">
      //             Adrien Cabon
      //             </cite>
      //             <div className="rating rating-sm    mx-auto">
      //                   <input
      //                     type="radio"
      //                     name="rating-5"
      //                     className="mask mask-star-2 bg-orange-400 ml-3 self-center"
      //                   />
      //                   <p className="mx-auto text-[#e33226] font-normal ml-2">
      //                     4.6 ratings
      //                   </p>
      //                 </div>
      //           </div>
      //         </figcaption>
      //       </figure></SwiperSlide>
         
      //   </Swiper>
      // </div>
//     );
// };

// export default Review;