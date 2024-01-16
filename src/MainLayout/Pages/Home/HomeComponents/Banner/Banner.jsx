import { Link } from "react-router-dom";
import img1 from "../../../../../assets/home-2/hero-bg-1.jpg";
import img2 from "../../../../../assets/home-2/property-14.jpg";
import img3 from "../../../../../assets/home-2/house.png";

const Banner = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className=" mb-10 md:mb-20  ">
        <div className=" flex justify-center mx-auto flex-col lg:flex-row  gap-10">
          <div className="  w-full lg:w-1/2   ">

           <div>
           <img className="w-10" src={img3} alt="" />
           </div>

           <div>
            <h2 className="text-4xl">Find Your Freedom, <br />Without Leaving Home</h2>
           </div>


          </div>

          <div className="lg:w-1/2 w-full ">
            <div className="relative">
              <img className="rounded-lg w-[500px] h-[500px]" src={img1} />

              <div className="absolute right-0 -left-20  top-56  w-full h-full overflow-hidden bg-fixed">
                {/* <img className="" src={img2} /> */}

                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
                        <p className="ml-2 text-[#002172] font-normal">4.8 (400+ Review)</p>
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
