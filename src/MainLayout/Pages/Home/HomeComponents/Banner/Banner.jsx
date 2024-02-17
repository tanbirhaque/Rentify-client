// The banner is made by "Sadia Afrin" and updated with more responsive design by Tanbir
// swiper featuries impleamented by sojib
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from "../../../../../assets/home-2/hero-bg-1.jpg";
import img2 from "../../../../../assets/home-2/property-14.jpg";
import img3 from "../../../../../assets/home-2/house.png";
import img4 from "../../../../../assets/Template_files/client-1.jpg";
import img5 from "../../../../../assets/Template_files/client-2.jpg";
import img6 from "../../../../../assets/Template_files/client-3.jpg";
import img7 from "../../../../../assets/Template_files/client-4.jpg";
import { useRef } from 'react';
// for banner animation
import './BannerAnimation.css'
import useProperties from '../../../../../Hooks/useProperties';

const Banner = () => {
    const [properties] = useProperties();
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className="mb-10 md:mb-20">
                <div className="flex justify-center mx-auto flex-col md:flex-row  gap-10 px-8 xl:px-0">
                    <div className="   w-full lg:w-1/2 mt-[20px] md:mt-[100px]">
                        <div className="md:flex justify-evenly md:justify-between  hidden">
                            <img className="w-10 " src={img3} alt="" />
                            <div className="floatingImgArrow">
                                <img
                                    className="md:ml-60 xl:ml-[650px] lg:ml-96"
                                    src="https://i.ibb.co/TYpJMmw/413824751-1821545304957822-2518450752563921897-n.png"
                                    alt=""
                                />
                            </div>
                        </div>

                        <div>
                            <h2 className="poppins-font font-bold xl:text-[55px] lg:text-5xl md:text-2xl text-xl my-4 lg:font-bold text-black lg:leading-normal leading-7 md:ml-0 ">
                                Find Your Freedom Without Leaving Home
                            </h2>
                        </div>

                        <p className="mb-5 text-[#666666] lg:text-base text-xs lg:font-medium leading-7  md:ml-0">
                            Discover seamless living with Rebtify – your premier destination for hassle-free online rentals. Browse a
                            curated selection of top-quality homes, apartments,and more. Elevate your living experience
                            effortlessly with Rebtify.
                        </p>

                        <div>
                            <form className="lg:w-[470px] md:w-[300px] hidden sm:flex justify-center items-center   text-center ">
                                <input
                                    className="py-2.5 px-3 text-black rounded-l-lg md:w-[470px] border-gray-300 border"
                                    type="text"
                                    name="searchbar"
                                    placeholder="     Find your location..."
                                />

                                <button
                                    type="submit"
                                    className="focus:outline-none  text-white    bg-[#002172] hover:bg-[#e33226] focus:ring-purple-300  font-medium  text-sm px-5 py-3.5   rounded-r-lg border-none "
                                >
                                    Search
                                </button>
                            </form>
                        </div>

                        <div className="avatar-group -space-x-6 rtl:space-x-reverse my-5 ml-28 md:ml-0">
                            <div className="avatar">
                                <div className="w-12">
                                    <img src={img4} />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src={img5} />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src={img6} />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src={img7} />
                                </div>
                            </div>
                        </div>

                        <p className="md:ml-2 ml-32 text-[#e33226] text-base font-medium">
                            29k Positive Review
                        </p>
                    </div>

                    {/* Right side div */}
                    <div className="lg:w-1/2 w-full ">
                        <div className="relative mx-auto flex justify-end mt-12 lg:mt-0">
                            <img
                                className="rounded-lg lg:w-[650px] lg:h-[560px] xl:h-[650px] md:w-[400px]"
                                src={img1}
                            />
                            <div className="absolute top-20 md:top-28 xl:top-[200px] left-0 md:left-2 xl:left-0 w-full h-[325px] overflow-hidden bg-fixed px-3 gap-3 lg:gap-6 lg:px-0 shadow-md">
                                {/* This swiper code added by sojib */}
                                <Swiper
                                    breakpoints={{
                                        650: {
                                            width: 650,
                                            slidesPerView: 1,
                                        },
                                        800: {
                                            width: 800,
                                            slidesPerView: 2,
                                        },
                                    }}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                                    modules={[Autoplay]}
                                >
                                    <div>
                                        {/* This swiper dynamic by sojib and added img height*/}
                                        {
                                            properties.slice(0, 5)?.map(item =>
                                                <div key={item._id}>
                                                    <SwiperSlide>
                                                        <div className="max-w-[300px] max-h-[380px] bg-white border-[2px] border-white rounded-[5px] dark:bg-gray-800 dark:border-gray-700 md:w-[300px] lg:w-[400px]">
                                                            <a href="#">
                                                                <img className="rounded-t-[5px] h-[167px] w-full" src={item.property_info.property_img} alt />
                                                            </a>
                                                            <div className="p-5">
                                                                <a href="#">
                                                                    <h5 className="mb-1 font-bold tracking-tight text-gray-900 dark:text-white">
                                                                        {item.property_info.property_title.slice(0, 50)}
                                                                    </h5>
                                                                    <p className="text-sm text-gray-700 font-normal">
                                                                        {item.property_info.property_description.slice(0, 90)}.{" "}
                                                                    </p>
                                                                    <div className="rating rating-sm mt-1 flex  items-center">
                                                                        <input
                                                                            type="radio"
                                                                            name="rating-5"
                                                                            className="mask mask-star-2 bg-orange-400"
                                                                        />
                                                                        <p className="ml-2 text-[#002172] font-normal ">
                                                                            4.8 (400+ Review)
                                                                        </p>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="autoplay-progress" slot="container-end">
                                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                                            <circle cx="24" cy="24" r="20"></circle>
                                        </svg>
                                        <span ref={progressContent}></span>
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
