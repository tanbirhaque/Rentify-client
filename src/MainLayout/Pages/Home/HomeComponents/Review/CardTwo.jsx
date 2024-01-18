import img4 from "../../../../../assets/testimonials/client-4.jpg"
import img5 from "../../../../../assets/testimonials/client-5.jpg"
import img6 from "../../../../../assets/testimonials/client-6.jpg"

const CardTwo = () => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-3">

        {/* card 4 */}
      <div className="max-w-sm  rounded-lg  ">
        <div className="mx-auto  rounded-full w-[250px] ">
          <img
            className=" mt-6 rounded-full  w-[250px] overflow-x-hidden  hover:scale-105 scale-100 ease-in-out duration-300"
            src={img4}
            alt=""
          />
        </div>
        <div className="p-5 mt-5 bg-base-200">
          <p className="mb-3 font-medium text-gray-600 dark:text-gray-400 ">
          "Rentify has been a game-changer for our events. We regularly rent audio equipment, projectors, and even furniture for our company functions. The platform is user-friendly, and the pricing is transparent. It saves us time and money compared to buying items we only need occasionally. Highly satisfied with Rentify!"
          </p>
          <div className="flex justify-between items-center">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Robert Muller
            </h5>
            <div className="rating rating-sm  flex items-center  ">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400 ml-3 self-center"
              />
              <p className="mx-auto text-[#002172] text-base font-medium ml-2">
                4.9
              </p>
            </div>
          </div>
          <p className="font-medium text-base text-gray-600 pb-6">MD, ITec</p>
        </div>
      </div>

      {/* card 5 */}
      <div className="max-w-sm  rounded-lg  ">
        <div className="mx-auto  rounded-full w-[250px] ">
          <img
            className=" mt-6 rounded-full  w-[250px] overflow-x-hidden  hover:scale-105 scale-100 ease-in-out duration-300"
            src={img5}
            alt=""
          />
        </div>
        <div className="p-5 mt-5 bg-base-200">
          <p className="mb-3 font-medium text-gray-600 dark:text-gray-400 ">
          "Rentify made finding the perfect rental a breeze! The website's user-friendly interface allowed me to browse through a wide selection of properties, and the entire rental process was seamless. The detailed property listings and helpful filters made it easy to narrow down my choices. Highly recommend!"
          </p>
          <div className="flex justify-between items-center">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Mark Owen
            </h5>
            <div className="rating rating-sm  flex items-center  ">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400 ml-3 self-center"
              />
              <p className="mx-auto text-[#002172] text-base font-medium ml-2">
                4.7
              </p>
            </div>
          </div>
          <p className="font-medium text-base text-gray-600 pb-6">Civil Engineer, Olleo</p>
        </div>
      </div>

      {/* card 6 */}
      <div className="max-w-sm  rounded-lg  ">
        <div className="mx-auto  rounded-full w-[250px] ">
          <img
            className=" mt-6 rounded-full  w-[250px] overflow-x-hidden  hover:scale-105 scale-100 ease-in-out duration-300"
            src={img6}
            alt=""
          />
        </div>
        <div className="p-5 mt-5 bg-base-200">
          <p className="mb-3 font-medium text-gray-600 dark:text-gray-400 ">
          "Using Rentify gave me confidence in the security of my transactions. The platform is reliable, and the payment process was straightforward. Rentify's attention to security details made my renting experience worry-free. Additionally, the timely notifications and updates kept me informed at every step."
          </p>
          <div className="flex justify-between items-center">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Alexandar Mason
            </h5>
            <div className="rating rating-sm  flex items-center  ">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400 ml-3 self-center"
              />
              <p className="mx-auto text-[#002172] text-base font-medium ml-2">
                4.9
              </p>
            </div>
          </div>
          <p className="font-medium text-base text-gray-600 pb-6">Managing Director, IBAC</p>
        </div>
      </div>
    </div>
    );
};

export default CardTwo;