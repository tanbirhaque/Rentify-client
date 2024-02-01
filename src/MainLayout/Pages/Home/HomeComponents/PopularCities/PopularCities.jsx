// This section is initially created by Sadia Afrin
// Fully developed and made responsive by Tanbir
// Remaining task: Dynamic content


import { Link } from "react-router-dom";
import img1 from "../../../../../assets/Template_files/city-1.jpg";
import img2 from "../../../../../assets/Template_files/city-2.jpg";
import img3 from "../../../../../assets/Template_files/city-3.jpg";
import img4 from "../../../../../assets/Template_files/city-4.jpg";
import img5 from "../../../../../assets/Template_files/city-5.jpg";
import img6 from "../../../../../assets/Template_files/city-6.jpg";
import img7 from "../../../../../assets/Template_files/city-7.jpg";
import img8 from "../../../../../assets/Template_files/city-8.jpg";
import CommonHeading from "../../../../Shared/CommonHeading/CommonHeading";
import "./Popular.css";
import useProperties from "../../../../../Hooks/useProperties";

const PopularCities = () => {

  const [properties] = useProperties();
  // console.log(properties.city);
  const { city } = properties;


  return (
    <>
      <div className="bg-[#f9f9f9] pt-[100px] pb-[75px]"
        style={{
          background: "url('https://angular.hibootstrap.com/enuf/assets/img/shape-2.png')",
          backgroundColor: "#f9f9f9",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div className="mt-10 mb-20 max-w-screen-2xl mx-auto lg:px-[30px] xl:px-[108px]">
          <CommonHeading small={'Choose A Popular City'} big={"Our Hottest Nearby Cities"}></CommonHeading>
          <div className="card-container grid md:grid-cols-2 lg:grid-cols-4 justify-items-center lg:gap-x-[25px] gap-y-[25px] mt-[40px]">
            {/* Each cards */}

            <div className="pop-card min-h-[324px] max-w-[306px] rounded-xl relative overflow-hidden">
              <div
                className="background-image"
                style={{
                  backgroundImage: `url(${img1})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
              </div>
              {/* overlay over the image */}
              <Link to={`/newyork/${city}`}>
                <div className="pop-overlay absolute top-0 left-0 min-w-full min-h-full bg-black bg-opacity-50 hover:bg-opacity-60 transition duration-500 rounded-xl">
                  <div className="pop-text p-5 min-h-full">
                    <div className="relative top-[230px]">
                      <h2 className="pop-h2 text-white poppins-font font-bold text-[22px]">New York City</h2>
                      <p className="text-white font-medium text-[17px] ">+5231 properties</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="pop-card min-h-[324px] max-w-[306px] rounded-xl relative overflow-hidden">
              <div
                className="background-image"
                style={{
                  backgroundImage: `url(${img2})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
              </div>
              {/* overlay over the image */}
              <Link to={`/Prauge/${city}`}>
                <div className="pop-overlay absolute top-0 left-0 min-w-full min-h-full bg-black bg-opacity-50 hover:bg-opacity-60 transition duration-500 rounded-xl">
                  <div className="pop-text p-5 min-h-full">
                    <div className="relative top-[230px]">
                      <h2 className="pop-h2 text-white poppins-font font-bold text-[22px]">Prauge</h2>
                      <p className="text-white font-medium text-[17px] ">+121 properties</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="pop-card min-h-[324px] max-w-[306px] rounded-xl relative overflow-hidden">
              <div
                className="background-image"
                style={{
                  backgroundImage: `url(${img3})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
              </div>
              {/* overlay over the image */}
              <Link to={`/Florida/${city}`}>
                <div className="pop-overlay absolute top-0 left-0 min-w-full min-h-full bg-black bg-opacity-50 hover:bg-opacity-60 transition duration-500 rounded-xl">
                  <div className="pop-text p-5 min-h-full">
                    <div className="relative top-[230px]">
                      <h2 className="pop-h2 text-white poppins-font font-bold text-[22px]">Florida</h2>
                      <p className="text-white font-medium text-[17px] ">+432 properties</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="pop-card min-h-[324px] max-w-[306px] rounded-xl relative overflow-hidden">
              <div
                className="background-image"
                style={{
                  backgroundImage: `url(${img4})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
              </div>
              {/* overlay over the image */}
              <Link to={`/SanFransisco/${city}`}>
                <div className="pop-overlay absolute top-0 left-0 min-w-full min-h-full bg-black bg-opacity-50 hover:bg-opacity-60 transition duration-500 rounded-xl">
                  <div className="pop-text p-5 min-h-full">
                    <div className="relative top-[230px]">
                      <h2 className="pop-h2 text-white poppins-font font-bold text-[22px]">San Fransisco</h2>
                      <p className="text-white font-medium text-[17px] ">+231 properties</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="pop-card min-h-[324px] max-w-[306px] rounded-xl relative overflow-hidden">
              <div
                className="background-image"
                style={{
                  backgroundImage: `url(${img5})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
              </div>
              {/* overlay over the image */}
              <Link to={`/TorentoCity/${city}`}>
                <div className="pop-overlay absolute top-0 left-0 min-w-full min-h-full bg-black bg-opacity-50 hover:bg-opacity-60 transition duration-500 rounded-xl">
                  <div className="pop-text p-5 min-h-full">
                    <div className="relative top-[230px]">
                      <h2 className="pop-h2 text-white poppins-font font-bold text-[22px]">Torento City</h2>
                      <p className="text-white font-medium text-[17px] ">+1222 properties</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="pop-card min-h-[324px] max-w-[306px] rounded-xl relative overflow-hidden">
              <div
                className="background-image"
                style={{
                  backgroundImage: `url(${img6})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
              </div>
              {/* overlay over the image */}
              <Link to={`/VancuverCity/${city}`}>
                <div className="pop-overlay absolute top-0 left-0 min-w-full min-h-full bg-black bg-opacity-50 hover:bg-opacity-60 transition duration-500 rounded-xl">
                  <div className="pop-text p-5 min-h-full">
                    <div className="relative top-[230px]">
                      <h2 className="pop-h2 text-white poppins-font font-bold text-[22px]">Vancuver City</h2>
                      <p className="text-white font-medium text-[17px] ">+151 properties</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="pop-card min-h-[324px] max-w-[306px] rounded-xl relative overflow-hidden">
              <div
                className="background-image"
                style={{
                  backgroundImage: `url(${img7})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
              </div>
              {/* overlay over the image */}
              <Link to={`/MontrealCity/${city}`}>
                <div className="pop-overlay absolute top-0 left-0 min-w-full min-h-full bg-black bg-opacity-50 hover:bg-opacity-60 transition duration-500 rounded-xl">
                  <div className="pop-text p-5 min-h-full">
                    <div className="relative top-[230px]">
                      <h2 className="pop-h2 text-white poppins-font font-bold text-[22px]">Montreal City</h2>
                      <p className="text-white font-medium text-[17px] ">+232 properties</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="pop-card min-h-[324px] max-w-[306px] rounded-xl relative overflow-hidden">
              <div
                className="background-image"
                style={{
                  backgroundImage: `url(${img8})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
              </div>
              {/* overlay over the image */}
              <Link to={`/LosAngeles/${city}`}>
                <div className="pop-overlay absolute top-0 left-0 min-w-full min-h-full bg-black bg-opacity-50 hover:bg-opacity-60 transition duration-500 rounded-xl">
                  <div className="pop-text p-5 min-h-full">
                    <div className="relative top-[230px]">
                      <h2 className="pop-h2 text-white poppins-font font-bold text-[22px]">Los Angeles</h2>
                      <p className="text-white font-medium text-[17px] ">+1211 properties</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularCities;
