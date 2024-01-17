import img1 from "../../../../../assets/Template_files/city-1.jpg";
import img2 from "../../../../../assets/Template_files/city-2.jpg";
import img3 from "../../../../../assets/Template_files/city-3.jpg";
import img4 from "../../../../../assets/Template_files/city-4.jpg";
import img5 from "../../../../../assets/Template_files/city-5.jpg";
import img6 from "../../../../../assets/Template_files/city-6.jpg";
import img7 from "../../../../../assets/Template_files/city-7.jpg";
// import img8 from "../../../../../assets/Template_files/city-8.jpg";
import "./Popular.css";

const PopularCities = () => {
  return (
    <div className="mt-10 mb-20 max-w-screen-2xl mx-auto">
      <p className="lg:text-base md:text-sm text-xs font-medium mt-3 text-[#e33226] text-center">
        Choose A Popular City
      </p>
      <h2 className="text-center md:text-3xl text-xl font-bold mt-5 mb-5 text-black">
        Our Hottest Nearby Cities
      </h2>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 px-4">
            {/* img1 */}
        <div className="relative  popular">
            <div className="under"></div>
          <div className="overlay  flex items-end rounded-lg transition duration-300 ease-in-out bg-black bg-opacity-50   hover:bg-opacity-60  absolute  ">

            <div className="z-10 p-5 text-white font-medium text-base ">
              <h2 className="">New York City</h2>
              <p>+5231 properties</p>
            </div>
          </div>
        </div>

        {/* img2 */}
        <div className="relative  populartwo">
            <div className="under"></div>
          <div className="overlay  flex items-end rounded-lg transition duration-300 ease-in-out bg-black bg-opacity-50   hover:bg-opacity-60  absolute  ">

            <div className="z-10 p-5 text-white font-medium text-base ">
              <h2 className="">New York City</h2>
              <p>+5231 properties</p>
            </div>
          </div>
        </div>

        {/* img3 */}
        <div className="relative  popularthree">
            <div className="under"></div>
          <div className="overlay  flex items-end rounded-lg transition duration-300 ease-in-out bg-black bg-opacity-50   hover:bg-opacity-60  absolute  ">

            <div className="z-10 p-5 text-white font-medium text-base ">
              <h2 className="">New York City</h2>
              <p>+5231 properties</p>
            </div>
          </div>
        </div>

        {/* img4 */}
        {/* <div className="relative  popularfour">
            <div className="under"></div>
          <div className="overlay  flex items-end rounded-lg transition duration-300 ease-in-out bg-black bg-opacity-50   hover:bg-opacity-60  absolute  ">

            <div className="z-10 p-5 text-white font-medium text-base ">
              <h2 className="">New York City</h2>
              <p>+5231 properties</p>
            </div>
          </div>
        </div> */}

        <div>
          <img className="w-full h-full rounded-lg" src={img2} alt="" />
        </div>
        {/* <div>
          <img className="w-full h-full rounded-lg" src={img3} alt="" />
        </div> */}
        {/* <div>
          <img className="w-full h-full rounded-lg" src={img4} alt="" />
        </div> */}
        {/* <div>
          <img className="w-full h-full rounded-lg" src={img5} alt="" />
        </div> */}
        {/* <div>
          <img className="w-full h-full rounded-lg" src={img6} alt="" />
        </div> */}
        {/* <div>
          <img className="w-full h-full rounded-lg" src={img7} alt="" />
        </div> */}
        {/* <div>
          <img className="w-full h-full rounded-lg" src={img8} alt="" />
        </div> */}


      </div>
    </div>
  );
};

export default PopularCities;
