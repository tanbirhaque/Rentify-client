import img1 from "../../../../../assets/testimonials/client-1.jpg"
import img2 from "../../../../../assets/testimonials/client-2.jpg"
import img3 from "../../../../../assets/testimonials/client-3.jpg"



const Card = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-3">

        {/* card 1 */}
      <div className="max-w-sm  rounded-lg  ">
        <div className="mx-auto  rounded-full w-[250px] ">
          <img
            className=" mt-6 rounded-full  w-[250px] overflow-x-hidden  hover:scale-105 scale-100 ease-in-out duration-300"
            src={img1}
            alt=""
          />
        </div>
        <div className="p-5 mt-5 bg-base-200">
          <p className="mb-3 font-medium text-gray-600 dark:text-gray-400">
            "I absolutely love Rentify! The process of renting items is so
            smooth, and the variety of products available is impressive. The
            customer support team is incredibly helpful and responsive. I've
            used Rentify for multiple occasions, and it's always been a
            fantastic experience. Highly recommended"
          </p>
          <div className="flex justify-between items-center">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              David Watson
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
          <p className="font-medium text-base text-gray-600 pb-6">Director, BAT</p>
        </div>
      </div>

      {/* card 2 */}
      <div className="max-w-sm  rounded-lg  ">
        <div className="mx-auto  rounded-full w-[250px] ">
          <img
            className=" mt-6 rounded-full  w-[250px] overflow-x-hidden  hover:scale-105 scale-100 ease-in-out duration-300"
            src={img2}
            alt=""
          />
        </div>
        <div className="p-5 mt-5 bg-base-200">
          <p className="mb-3 font-medium text-gray-600 dark:text-gray-400 ">
          "Rentify has made my life so much easier. From party supplies to camping gear, I've found everything I needed without the hassle of buying. The quality of the items is top-notch, and the delivery and pickup process is super convenient. Rentify is now my go-to for all my temporary needs."
          </p>
          <div className="flex justify-between items-center">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Tom Haris
            </h5>
            <div className="rating rating-sm  flex items-center  ">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400 ml-3 self-center"
              />
              <p className="mx-auto text-[#002172] text-base font-medium ml-2">
                4.8
              </p>
            </div>
          </div>
          <p className="font-medium text-base text-gray-600 pb-6">Civil Engineer, Olleo</p>
        </div>
      </div>

      {/* card 3 */}
      <div className="max-w-sm  rounded-lg  ">
        <div className="mx-auto  rounded-full w-[250px] ">
          <img
            className=" mt-6 rounded-full  w-[250px] overflow-x-hidden  hover:scale-105 scale-100 ease-in-out duration-300"
            src={img3}
            alt=""
          />
        </div>
        <div className="p-5 mt-5 bg-base-200">
          <p className="mb-3 font-medium text-gray-600 dark:text-gray-400 ">
          "As a frequent traveler, Rentify has been a lifesaver. Instead of lugging bulky items, I can easily rent them at my destination. The website is intuitive, and by it simple to find what I need.  The renting process is hassle-free. Thank you, Rentify, for making my travels more convenient!"
          </p>
          <div className="flex justify-between items-center">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Chris Jackson
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
          <p className="font-medium text-base text-gray-600 pb-6">Enterpreneur</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
