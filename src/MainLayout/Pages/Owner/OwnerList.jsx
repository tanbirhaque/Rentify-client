//component added by "Fahima"

import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const OwnerList = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div
        className="hero min-h-56"
        style={{
          backgroundImage: "url(https://i.ibb.co/Zdk0mLj/breadcrumb-4.jpg)",
        }}
      >
        <div className="hero-overlay bg-[#000000c2] p-28">
          <h2 className="mb-5 text-[40px] font-bold text-white">
          Owner List
          </h2>
          <p className="text-white">
            <Link to="/" className="hover:text-[#ec3323] cursor-pointer">
              Home{" "}
            </Link>
            / <span className="text-[#ec3323]"> Owners</span>
          </p>
        </div>
      </div>
      <div className="p-20 grid grid-rows-1 md:grid-cols-3 gap-8">
        {/* agent-1 */}
        <div className="card w-96 bg-base-100 shadow-xl hover:-mt-1 hover:border-b-8 hover:border-blue-700">
          <figure>
            <img src="https://i.ibb.co/KbLv3yq/agent-1.jpg" alt="Agent-1" />
          </figure>
          <div className="flex flex-col text-center p-7 items-center space-y-3">
            <h2 className="text-[#002172] hover:text-[#ec3323] text-2xl font-bold">
              Erik Ondricka
            </h2>
            <p className="text-[#666666]">Real Estate Agent</p>
            {/* icons div */}
            <div className="flex gap-3">
              {/* facebook */}
              <div className="btn btn-circle text-lg bg-white text-[#002172] shadow-xl hover:text-white hover:bg-[#ec3323] hover:-mt-1">
                <FaFacebookF />
              </div>
              {/* twitter */}
              <div className="btn btn-circle text-lg bg-white text-[#002172] shadow-xl hover:text-white hover:bg-[#ec3323] hover:-mt-1">
                <FaTwitter />
              </div>
              {/* insta */}
              <div className="btn btn-circle text-lg bg-white text-[#002172] shadow-xl hover:text-white hover:bg-[#ec3323] hover:-mt-1">
                <FaInstagram />
              </div>
              {/* linkedin */}
              <div className="btn btn-circle text-lg bg-white text-[#002172] shadow-xl hover:text-white hover:bg-[#ec3323] hover:-mt-1">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
        {/* agent-2*/}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/6Y0vmJN/agent-2.jpg" alt="Agent-2" />
          </figure>
          <div className="flex flex-col text-center p-7 items-center space-y-3">
            <h2 className="text-[#002172] hover:text-[#ec3323] text-2xl font-bold">
              Mossie Ullrich
            </h2>
            <p className="text-[#666666]">Property Consultant</p>
            {/* icons div */}
            <div className="flex gap-3">
              {/* facebook */}
              <div className="btn btn-circle text-lg bg-white text-[#002172] shadow-xl hover:text-white hover:bg-[#ec3323] hover:-mt-1">
                <FaFacebookF />
              </div>
              {/* twitter */}
              <div className="btn btn-circle text-lg bg-white text-[#002172] shadow-xl hover:text-white hover:bg-[#ec3323] hover:-mt-1">
                <FaTwitter />
              </div>
              {/* insta */}
              <div className="btn btn-circle text-lg bg-white text-[#002172] shadow-xl hover:text-white hover:bg-[#ec3323] hover:-mt-1">
                <FaInstagram />
              </div>
              {/* linkedin */}
              <div className="btn btn-circle text-lg bg-white text-[#002172] shadow-xl hover:text-white hover:bg-[#ec3323] hover:-mt-1">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
        {/* agent-3 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/ypbcyzj/agent-3.jpg" alt="Agent-3" />
          </figure>
          <div className="flex flex-col text-center p-7 items-center space-y-3">
            <h2 className="text-[#002172] hover:text-[#ec3323] text-2xl font-bold">
              Jackie Schmeler
            </h2>
            <p className="text-[#666666]">Marketing Manager</p>
            {/* icons div */}
            <div className="flex gap-3">
              {/* facebook */}
              <div className="btn btn-circle text-lg bg-white text-[#002172] shadow-xl hover:text-white hover:bg-[#ec3323] hover:-mt-1">
                <FaFacebookF />
              </div>
              {/* twitter */}
              <div className="btn btn-circle text-lg bg-white text-[#002172] shadow-xl hover:text-white hover:bg-[#ec3323] hover:-mt-1">
                <FaTwitter />
              </div>
              {/* insta */}
              <div className="btn btn-circle text-lg bg-white text-[#002172] shadow-xl hover:text-white hover:bg-[#ec3323] hover:-mt-1">
                <FaInstagram />
              </div>
              {/* linkedin */}
              <div className="btn btn-circle text-lg bg-white text-[#002172] shadow-xl hover:text-white hover:bg-[#ec3323] hover:-mt-1">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
        {/* agent-4*/}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/4SNHfT9/agent-4.jpg" alt="Agent-4" />
          </figure>
          <div className="flex flex-col text-center p-7 items-center space-y-3">
            <h2 className="text-[#002172] hover:text-[#ec3323] text-2xl font-bold">
              Benett Watson
            </h2>
            <p className="text-[#666666]">Real Estate Agent</p>
            {/* icons div */}
            <div className="flex gap-3">
              {/* facebook */}
              <div className="btn btn-circle text-lg bg-white text-[#002172] shadow-xl hover:text-white hover:bg-[#ec3323] hover:-mt-1">
                <FaFacebookF />
              </div>
              {/* twitter */}
              <div className="btn btn-circle text-lg bg-white text-[#002172] shadow-xl hover:text-white hover:bg-[#ec3323] hover:-mt-1">
                <FaTwitter />
              </div>
              {/* insta */}
              <div className="btn btn-circle text-lg bg-white text-[#002172] shadow-xl hover:text-white hover:bg-[#ec3323] hover:-mt-1">
                <FaInstagram />
              </div>
              {/* linkedin */}
              <div className="btn btn-circle text-lg bg-white text-[#002172] shadow-xl hover:text-white hover:bg-[#ec3323] hover:-mt-1">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
        {/* agent-5 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/fxnwkMQ/agent-5.jpg" alt="Agent-5" />
          </figure>
          <div className="flex flex-col text-center p-7 items-center space-y-3">
            <h2 className="text-[#002172] hover:text-[#ec3323] text-2xl font-bold">
              Tom Ashley
            </h2>
            <p className="text-[#666666]">Property Consultant</p>
            {/* icons div */}
            <div className="flex gap-3">
              {/* facebook */}
              <div className="btn btn-circle text-lg bg-white text-[#002172] shadow-xl hover:text-white hover:bg-[#ec3323] hover:-mt-1">
                <FaFacebookF />
              </div>
              {/* twitter */}
              <div className="btn btn-circle text-lg bg-white text-[#002172] shadow-xl hover:text-white hover:bg-[#ec3323] hover:-mt-1">
                <FaTwitter />
              </div>
              {/* insta */}
              <div className="btn btn-circle text-lg bg-white text-[#002172] shadow-xl hover:text-white hover:bg-[#ec3323] hover:-mt-1">
                <FaInstagram />
              </div>
              {/* linkedin */}
              <div className="btn btn-circle text-lg bg-white text-[#002172] shadow-xl hover:text-white hover:bg-[#ec3323] hover:-mt-1">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
        {/* agent-6 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/JqqNCk5/agent-6.jpg" alt="Agent-6" />
          </figure>
          <div className="flex flex-col text-center p-7 items-center space-y-3">
            <h2 className="text-[#002172] hover:text-[#ec3323] text-2xl font-bold">
              Joe Kinston
            </h2>
            <p className="text-[#666666]">Senior Accountant</p>
            {/* icons div */}
            <div className="flex gap-3">
              {/* facebook */}
              <div className="btn btn-circle text-lg bg-white text-[#002172] shadow-xl hover:text-white hover:bg-[#ec3323] hover:-mt-1">
                <FaFacebookF />
              </div>
              {/* twitter */}
              <div className="btn btn-circle text-lg bg-white text-[#002172] shadow-xl hover:text-white hover:bg-[#ec3323] hover:-mt-1">
                <FaTwitter />
              </div>
              {/* insta */}
              <div className="btn btn-circle text-lg bg-white text-[#002172] shadow-xl hover:text-white hover:bg-[#ec3323] hover:-mt-1">
                <FaInstagram />
              </div>
              {/* linkedin */}
              <div className="btn btn-circle text-lg bg-white text-[#002172] shadow-xl hover:text-white hover:bg-[#ec3323] hover:-mt-1">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerList;
