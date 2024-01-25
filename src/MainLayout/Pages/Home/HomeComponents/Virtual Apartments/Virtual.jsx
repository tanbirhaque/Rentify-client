import { FaPlay } from "react-icons/fa6";
import Button from "../../../../Shared/buttons/Button";
import { Link } from "react-router-dom";
import VideoModal from "./VideoModal";
const Virtual = () => {
  return (
    <div className="max-w-screen-2xl mx-auto bg-[#f9f9f9] p-20">
      <div
        className="hero min-h-[660px]"
        style={{
          backgroundImage: "url(https://i.ibb.co/nBCmKhn/promo-video-bg.jpg)",
        }}
      >
        <div className="flex gap-5">
          <div className="flex-1">
            <div className="p-20 hero-overlay bg-[#ffffffdb] text-black">
              <p className="text-[#ec3323] font-medium"> Open Video</p>
              <h2 className=" text-[40px] font-bold">
                Attend A Virtual Open Apartments
              </h2>
              <p className="my-5 text-[#666666] font-medium">
                Discover your next home without leaving yours! Our Virtual Open
                Apartments bring the house-hunting experience to your
                fingertips.
              </p>
              <Link>
                <Button
                  initialColor={"#ec3323"}
                  title={"Explore Properties"}
                  padding={"15px"}
                />
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="rounded-full flex flex-1 items-center justify-center bg-white">
              <button
                className="h-20 w-20 rounded-full border-white border-2 p-5"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                <FaPlay className="text-[#ec3323] text-3xl text-center"></FaPlay>
              </button>
              {/*  */}
              <VideoModal virtualLink={"https://www.youtube.com/embed/HvLWniBQA2o?si=plSRYGZdQ37SwU2x"} />
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Virtual;
