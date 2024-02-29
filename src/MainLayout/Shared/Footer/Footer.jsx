// this is entirely made by Sadia
import "./Footer.css";
import logo from "../../../assets/Template_files/logo twoo.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-[#002172]">
      <div
        style={{
          background:
            "url('https://angular.hibootstrap.com/enuf/assets/img/shape-2.png')",
          // backgroundColor: "#002172",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: 1000,
        }}
      >
        <footer
          className="text-white body-font px-[40px] xl:px-0 xl:w-[1320px] mx-auto"
          style={{
            background:
              "url('https://angular.hibootstrap.com/enuf/assets/img/shape-2.png')",
            // backgroundColor: "#002172",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            zIndex: 1000,
          }}
        >
          {/* <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col"> */}
          <div className="grid md:grid-cols-3 xl:grid-cols-4 pt-[75px] mx-auto">
            <div className="w-full">
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-white-900">
                <img src={logo} alt="" />
                <span className="font-bold text-white poppins-font text-[38px]">
                  Renti<span className="">fy</span>
                </span>
              </a>
              <p className="mt-2 text-[16px] text-[#FFFFFFCC] py-5">
                Experience the future of real estate with Rentify: trusted, dynamic, and community-focused. Elevate your property journey with our innovative platform.
              </p>
              <h2 className="pt-5 text-2xl font-bold">Language</h2>
              <details className="dropdown py-3">
                <summary className="m-1 btn bg-blue-900 text-white border-none text-base hover:bg-blue-900">
                  English <IoIosArrowDown className="text-base" />
                </summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  <li>
                    <a className="text-black"> 简体中文 </a>
                  </li>
                  <li>
                    <a className="  text-black  "> العربيّة </a>
                  </li>
                </ul>
              </details>
            </div>
            {/* popular cities */}
            <div className="w-full px-4 grid md:justify-end">
              <h2 className="font-bold text-white text-[22px] mb-3">
                Popular Cities
              </h2>
              <div className="bg-white w-14 h-[2px]"></div>
              <nav className="list-none mb-10 pt-3 ">
                <li className="items-center flex py-2 gap-3">
                  {" "}
                  <IoIosArrowForward className="text-[16px] text-[#e33226] font-bold" />
                  <a className="text-[#FFFFFFCC] hover:text-[#e33226] text-[16px]  font-medium cursor-pointer">
                    New York City
                  </a>
                </li>
                <li className="items-center flex py-2 gap-3">
                  {" "}
                  <IoIosArrowForward className="text-[16px] text-[#e33226] font-bold" />
                  <a className="text-[#FFFFFFCC] hover:text-[#e33226] text-[16px]  font-medium cursor-pointer">
                    Prague
                  </a>
                </li>
                <li className="items-center flex py-2 gap-3">
                  {" "}
                  <IoIosArrowForward className="text-[16px] text-[#e33226] font-bold" />
                  <a className="text-[#FFFFFFCC] hover:text-[#e33226] text-[16px]  font-medium cursor-pointer">
                    San Francisco
                  </a>
                </li>
                <li className="items-center flex py-2 gap-3">
                  {" "}
                  <IoIosArrowForward className="text-[16px] text-[#e33226] font-bold" />
                  <a className="text-[#FFFFFFCC] hover:text-[#e33226] text-[16px]  font-medium cursor-pointer">
                    Florida
                  </a>
                </li>
                <li className="items-center flex py-2 gap-3">
                  {" "}
                  <IoIosArrowForward className="text-[16px] text-[#e33226] font-bold" />
                  <a className="text-[#FFFFFFCC] hover:text-[#e33226] text-[16px]  font-medium cursor-pointer">
                    Los Angles
                  </a>
                </li>
                <li className="items-center flex py-2 gap-3">
                  {" "}
                  <IoIosArrowForward className="text-[16px] text-[#e33226] font-bold" />
                  <a className="text-[#FFFFFFCC] hover:text-[#e33226] text-[16px]  font-medium cursor-pointer">
                    Toronto City
                  </a>
                </li>
              </nav>
            </div>
            {/* Quick links */}
            <div className="w-full px-4 grid md:justify-center">
              <h2 className="font-bold text-white text-[22px] mb-3">
                Quick Links
              </h2>
              <div className="bg-white w-14 h-[2px]"></div>
              <nav className="list-none mb-10 pt-3 ">
                <li className="items-center flex py-2 gap-3">
                  {" "}
                  <IoIosArrowForward className="text-[16px] text-[#e33226] font-bold" />
                  <a className="text-[#FFFFFFCC] hover:text-[#e33226] text-[16px]  font-medium cursor-pointer">
                    About Us
                  </a>
                </li>
                <li className="items-center flex py-2 gap-3">
                  {" "}
                  <IoIosArrowForward className="text-[16px] text-[#e33226] font-bold" />
                  <a className="text-[#FFFFFFCC] hover:text-[#e33226] text-[16px]  font-medium cursor-pointer">
                    Agents
                  </a>
                </li>
                <li className="items-center flex py-2 gap-3">
                  {" "}
                  <IoIosArrowForward className="text-[16px] text-[#e33226] font-bold" />
                  <a className="text-[#FFFFFFCC] hover:text-[#e33226] text-[16px]  font-medium cursor-pointer">
                    Latest News
                  </a>
                </li>
                <li className="items-center flex py-2 gap-3">
                  {" "}
                  <IoIosArrowForward className="text-[16px] text-[#e33226] font-bold" />
                  <a className="text-[#FFFFFFCC] hover:text-[#e33226] text-[16px]  font-medium cursor-pointer">
                    Contact Us
                  </a>
                </li>
                <li className="items-center flex py-2 gap-3">
                  {" "}
                  <IoIosArrowForward className="text-[16px] text-[#e33226] font-bold" />
                  <a className="text-[#FFFFFFCC] hover:text-[#e33226] text-[16px]  font-medium cursor-pointer">
                    Privacy Policy
                  </a>
                </li>
                <li className="items-center flex py-2 gap-3">
                  {" "}
                  <IoIosArrowForward className="text-[16px] text-[#e33226] font-bold" />
                  <a className="text-[#FFFFFFCC] hover:text-[#e33226] text-[16px]  font-medium cursor-pointer">
                    Terms & Conditions
                  </a>
                </li>
              </nav>
            </div>
            {/* map */}
            <div className="md:col-span-3 xl:col-span-1 w-full md:px-4">
              <iframe
                className="md:w-[310px] min-w-full h-[285px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7305.626951493346!2d90.4127511113167!3d23.71835406441302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8539c8e1dd7%3A0xf454a7a2dc22ba5!2sWari%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1708683809251!5m2!1sen!2sbd"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          {/* </div> */}
          <hr className="container  mx-auto mt-8" />
          <div className="bg-white-100 py-3">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <p className="text-[#FFFFFFCC] text-[16px] text-center">
                © 2024 Rentify —
                <a
                  href="https://twitter.com/knyttneve"
                  rel="noopener noreferrer"
                  className="ml-1"
                  target="_blank"
                >
                  All rights reserved at{" "}
                  <span className="text-[#EC3323]">
                    @rentify.com
                  </span>
                </a>
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start gap-2">
                <a className="hover:bg-[#EC3323] rounded-full h-[30px] w-[30px] flex justify-center items-center" href="https://www.facebook.com" target=" ">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a
                  className="hover:bg-[#EC3323] rounded-full h-[30px] w-[30px] flex justify-center items-center"
                  href="https://twitter.com/home?lang=en"
                  target=" "
                >
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a
                  className="hover:bg-[#EC3323] rounded-full h-[30px] w-[30px] flex justify-center items-center"
                  href="https://www.instagram.com"
                  target=" "
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                  </svg>
                </a>
                <a
                  className="hover:bg-[#EC3323] rounded-full h-[30px] w-[30px] flex justify-center items-center"
                  href="https://www.linkedin.com/feed"
                  target=" "
                >
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={0}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    />
                    <circle cx={4} cy={4} r={2} stroke="none" />
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
