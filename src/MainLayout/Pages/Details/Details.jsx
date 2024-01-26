import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import { IoMdPlay } from "react-icons/io";
import VideoModal from "../Home/HomeComponents/Virtual Apartments/VideoModal";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Swal from "sweetalert2";
import { FaRegBookmark, } from "react-icons/fa";
import BookingForm from "./BookingForm.jsx";
import useAuth from "../../../Hooks/useAuth.jsx";
import ReviewForm from "./ReviewForm.jsx";
import useAxiosPublic from "../../../Hooks/useAxiosPublic.jsx";

const Details = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const properties = useLoaderData();
  const { id } = useParams();
  const item = properties.find((item) => item._id == id);

  //destructure
  const { property_info } = item;
  const {
    property_details,
    property_for,
    property_img,
    property_title,
    property_location,
    property_category,
  } = property_info;
  const {
    property_tags,
    property_features,
    property_id,
    property_price,
    property_type,
    property_status,
    built,
    bedroom,
    bath,
    balcony,
    garages,
  } = property_details || {};
  //destructure

  //save property feature added by Fahima
  const handleSaveProperty = () => {
    if (user) {
      //for saving property data to backend
      const savedProperties = {
        property: item,
        savedUserEmail: user.email,
      };
      axiosPublic.post("/saved-properties", savedProperties).then((res) => {
        console.log(res.data);
        Swal.fire({
          title: `Added to saved properties.`,
          timer: 2000,
          color: "#002172",
          showConfirmButton: false,
          icon: "success",
        });
      });
      console.log(savedProperties);
      // reset();
      //for saving property data to backend
    } else {
      // this login will allow user to save their desired property only if the are user
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Looks like you're not logged in!",
        footer: `<a href='/login' className='font-bold underline'>Please Log In</a>`,
        showConfirmButton: false,
      });
    }
  };
  // const

  return (
    <div>
      <div className="gridbgimg">
        <div className=" bg-[#000000B2]">
          <div className=" max-w-screen-2xl mx-auto p-24">
            <h2 className="text-6xl font-bold text-white font-serif">
              Property Details
            </h2>
            <div className="mt-2">
              <NavLink
                to="/"
                className="navAfter relative font-medium text-base text-white mx-3"
              >
                Home
              </NavLink>
              <NavLink
                to="/blogs"
                className="navAfter relative font-medium text-base text-white mx-3"
              >
                Blogs
              </NavLink>
              {/* <NavLink to={`/blogs/${blog._id}`} className='navAfter relative font-medium text-base text-white mx-3 '>Blogs details no slider</NavLink> */}
            </div>
          </div>
        </div>
      </div>
      {/* details sections starts */}
      <div className="max-w-7xl mx-auto mt-16 p-10">
        <div className="flex gap-6">
          <div className="main_details w-2/3">
            <div className="mb-16">
              <div className="flex justify-between">
                <h2 className="text-3xl poppins-font mb-[12px] font-semibold text-black">
                  {property_title}
                </h2>
                <p className="text-[#ec3323] inline-block text-lg font-bold">
                  ${property_price}
                </p>
              </div>
              <div className="flex justify-between text-[#666666]">
                <p className="flex text-base items-center gap-2 ">
                  <CiLocationOn className="text-[#e33226]" />
                  {property_location?.address?.street},{" "}
                  {property_location?.address?.city},{" "}
                  {property_location?.address?.state},{" "}
                  {property_location?.address?.country}
                </p>
                {/* wishlist icon */}
                <button onClick={handleSaveProperty}>
                  <FaRegBookmark className="text-xl" />
                </button>
              </div>
            </div>
            <div>
              <span className="btn bg-[#ec3323] border-none text-white w-fit h-fit relative ml-7 text-lg">
                {property_for}
              </span>
              <img
                className="rounded-md w-full h-auto static -mt-20"
                src={property_img}
                alt={property_title}
              />
            </div>
            {/* Description section */}
            <div>
              <h3 className="poppins-font text-[24px] font-semibold my-6">
                Description
              </h3>
              <p className="text-[#666666] text-[16px]">
                Cras ultricies ligula sed magna dictum porta. Nulla quis lorem
                ut libero malesuada feugiat. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Quisque velit nisi, pretium ut
                lacinia in, elementum id enim. Vestibulum ante ipsum primis in
                faucibus orci luctus et ultrices posuere cubilia Curae; Donec
                velit neque, auctor sit amet aliquam vel, ullamcorper sit amet
                ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat
                accumsan id imperdiet et, porttitor at sem. Curabitur arcu erat
                accumsan id imperdiet et porttitor.
                <br />
                <br />
                Curabitur non nulla sit amet nisl tempus convallis quis ac
                lectus. Donec sollicitudin molestie malesuada. Nulla porttitor
                accumsan tincidunt. Praesent sapien massa, convallis a
                pellentesque nec, egestas non nisi. Curabitur arcu erat,
                accumsan id imperdiet et, porttitor at sem. Curabitur non nulla
                sit amet nisl tempus convallis quis ac lectus. Proin eget tortor
                risus. Donec rutrum congue leo eget malesuada. Pellentesque in
                ipsum id orci porta dapibus.
              </p>
            </div>
            {/* Property specification/details section */}
            <div>
              <h3 className="poppins-font text-[24px] font-semibold my-6">
                Property Details
              </h3>
              <ul className="grid grid-cols-3 gap-3">
                <li className="text-[16px] font-bold text-black">
                  Property ID:{" "}
                  <span className="text-[#666666]">{property_id}</span>
                </li>
                <li className="text-[16px] font-bold text-black">
                  Property Type:{" "}
                  <span className="text-[#666666]">{property_category}</span>
                </li>
                <li className="text-[16px] font-bold text-black">
                  Property Status:{" "}
                  <span className="text-[#666666]">{property_for}</span>
                </li>
                <li className="text-[16px] font-bold text-black">
                  Property Price:{" "}
                  <span className="text-[#666666]">${property_price}</span>
                </li>
                <li className="text-[16px] font-bold text-black">
                  Rooms: <span className="text-[#666666]">6</span>
                </li>
                <li className="text-[16px] font-bold text-black">
                  Bedrooms: <span className="text-[#666666]">{bedroom}</span>
                </li>
                <li className="text-[16px] font-bold text-black">
                  Bath: <span className="text-[#666666]">{bath}</span>
                </li>
                <li className="text-[16px] font-bold text-black">
                  Garages: <span className="text-[#666666]">{garages}</span>
                </li>
                <li className="text-[16px] font-bold text-black">
                  Year Built: <span className="text-[#666666]">{built}</span>
                </li>
              </ul>
            </div>
            {/* Property Floor plans */}
            <div>
              <h3 className="poppins-font text-[24px] font-semibold my-6">
                Floor Plans
              </h3>
              <div className="p-[50px] bg-[#f9f9f9]">
                <img
                  src="https://angular.hibootstrap.com/enuf/assets/img/property/floor-plan.png"
                  // src={item?.property_info.floor_plans}
                  alt="Floor plan image"
                />
              </div>
            </div>
            {/* Property features */}
            <div>
              <h3 className="poppins-font text-[24px] font-semibold my-6">
                Property Features
              </h3>
              <ul className="grid grid-cols-3 gap-3">
                {property_features.map((feature) => (
                  <li
                    key={feature}
                    className="text-[#666666] flex items-center gap-2"
                  >
                    <span>
                      <RiCheckboxMultipleLine className="text-[#eb3323]" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            {/* Property Video section */}
            <div>
              <h3 className="poppins-font text-[24px] font-semibold my-6">
                Property Video
              </h3>
              <div className="relative">
                <div>
                  <img
                    className="rounded-md"
                    src="https://angular.hibootstrap.com/enuf/assets/img/property/single-property-2.jpg"
                    alt="The video section image"
                  />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-6 rounded-full">
                  <IoMdPlay
                    className="text-[#eb3323] text-[34px]"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  />
                  <VideoModal
                    virtualLink={
                      "https://www.youtube.com/embed/B4o8PvcqHC4?si=_KSnfXaSAJltBM0G"
                    }
                  />
                </div>
              </div>
            </div>
            {/* Property Review section */}
            <div>
              <h3 className="poppins-font text-[24px] font-semibold my-6">
                3 Reviews
              </h3>
              <div>
                <div className="flex gap-5">
                  <div className="min-w-[100px]">
                    <img
                      className="rounded-full w-[100px] h-[100px]"
                      src="https://angular.hibootstrap.com/enuf/assets/img/clients/client-1.jpg"
                      alt="Reviewer image"
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="poppins-font text-[18px] font-semibold">
                        Josef Haris
                      </h3>
                      <div>
                        <Rating
                          style={{ maxWidth: 80 }}
                          value={5}
                          // onChange={setRating}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-[14px] text-[#666666] mt-[12px] mb-[8px]">
                        15/04/2024
                      </p>
                      <p className="text-[#666666]">
                        Nulla porttitor accumsan tincidunt. Praesent sapien
                        massa, convallis a pellentesque nec, egestas non nisi.
                        Cras ultricies ligula sed magna dictum porta. Vestibulum
                        ante ipsum primis in faucibus orci luctus et ultrices
                        posuere cubilia Curae; Donec velit neque, auctor sit
                        amet aliquam vel.
                      </p>
                    </div>
                    <div className="flex gap-5 mt-6">
                      <div>
                        <img
                          className="rounded-md"
                          src="https://angular.hibootstrap.com/enuf/assets/img/property/property-1.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          className="rounded-md"
                          src="https://angular.hibootstrap.com/enuf/assets/img/property/property-2.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="mt-5" />
              </div>
            </div>
            {/* Review submition form starts */}
            <div>
              <h3 className="poppins-font text-[24px] font-semibold my-6">
                Add your review
              </h3>
              {/* review form designed by Sojib modified by Fahima */}
              <ReviewForm />
            </div>
            {/* similar property section starts */}
            {/* <div>
              <h3 className="poppins-font text-[24px] font-semibold my-6">
                Similar Properties
              </h3>
              <div className="flex gap-6">
                <PropertyCard
                  img={
                    "https://angular.hibootstrap.com/enuf/assets/img/property/property-10.jpg"
                  }
                ></PropertyCard>
                <PropertyCard
                  img={
                    "https://angular.hibootstrap.com/enuf/assets/img/property/property-2.jpg"
                  }
                ></PropertyCard>
              </div>
            </div> */}
          </div>
          <div className="shadow-2xl w-1/3 h-fit p-5">
          {/* booking form designed by Sojib modified by Fahima */}
            <BookingForm item={item} />
          </div>
        </div>
        {/* popular tags */}
        <div className="shadow-2xl w-fit h-fit p-5">
          <div>
            <h2 className="text-3xl font-bold my-5">Popular Tags</h2>
            <div className="grid grid-cols-3 gap-2">
              {property_tags.map((tag) => (
                <button
                  key={tag}
                  className="btn btn-square p-3 mx-2 w-fit h-fit bg-transparent hover:bg-[#ec3323] hover:text-white"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
