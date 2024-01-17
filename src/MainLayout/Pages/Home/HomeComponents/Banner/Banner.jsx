import img1 from "../../../../../assets/home-2/hero-bg-1.jpg";
import img2 from "../../../../../assets/home-2/property-14.jpg";
import img3 from "../../../../../assets/home-2/house.png";
import img4 from "../../../../../assets/Template_files/client-1.jpg";
import img5 from "../../../../../assets/Template_files/client-2.jpg";
import img6 from "../../../../../assets/Template_files/client-3.jpg";
import img7 from "../../../../../assets/Template_files/client-4.jpg";
// import './Banner.css'

const Banner = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className=" mb-10 md:mb-20  mt-10">
                <div className=" flex justify-center mx-auto flex-col md:flex-row  gap-10">
                    <div className="   w-full lg:w-1/2   ">
                        <div className="flex justify-evenly md:justify-between banner">
                            <img className="w-10 " src={img3} alt="" />
                            <img
                                className="floating"
                                src="https://i.ibb.co/TYpJMmw/413824751-1821545304957822-2518450752563921897-n.png"
                                alt=""
                            />
                        </div>

                        <div>
                            <h2 className="lg:text-5xl md:text-2xl text-xl my-4 lg:font-bold text-black lg:leading-normal leading-7 ml-32 md:ml-0">
                                Find Your Freedom, <br />
                                Without Leaving <br /> Home
                            </h2>
                        </div>

                        <p className="mb-5 text-gray-700 lg:text-base text-xs lg:font-medium leading-7 ml-16 md:ml-0">
                            Discover seamless living with Rebtify – your premier <br />
                            destination for hassle-free online rentals. Browse <br /> a
                            curated selection of top-quality homes, apartments, <br />
                            and more. Elevate your living experience <br />
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

                    <div className="lg:w-1/2 w-full ">
                        <div className="relative mx-auto">
                            <img
                                className="rounded-lg lg:w-[450px] lg:h-[550px] md:w-[400px] mx-auto"
                                src={img1}
                            />

                            <div className="absolute lg:right-0 md:-left-20 -left-25  top-36   w-full h-full overflow-hidden bg-fixed ">
                                {/* <img className="" src={img2} /> */}

                                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:w-[300px] lg:w-[400px]">
                                    <a href="#">
                                        <img className="rounded-t-lg" src={img2} alt />
                                    </a>
                                    <div className="p-5">
                                        <a href="#">
                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                Manhatton Villa
                                            </h5>

                                            <p className="text-sm text-gray-700 font-normal">
                                                This villa is located in Manhattan New York.It is so
                                                Beautiful and Luxurious.{" "}
                                            </p>

                                            <div className="rating rating-sm mt-3 flex  items-center">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
