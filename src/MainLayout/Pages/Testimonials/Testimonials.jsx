// This page make by Roknuzzaman sajib
// all fixed & full page created been responsive
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import { Helmet } from "react-helmet";
import PageBanner from "../../Shared/banner for pages/PageBanner";

const Testimonials = () => {
  const [testimonials, Settestimonials] = useState([]);
  // console.log(testimonials)

  // Done: make pagination
  const [currentPage, SetCurrentPage] = useState(0);
  // DO: blogs data pagination on page
  const count = testimonials?.length;
  // now this time itemper page static.after when we will do backed in then we will do it's daynamic
  const itemsPerPage = 6;
  const numberOfPages = Math.ceil(count / itemsPerPage);
  // console.log(numberOfPages)

  const pages = [];
  for (let i = 0; i < numberOfPages; i++) {
    pages.push(i);
  }

  //DO: CurrentPageItems..If you want currentPagesData be able to bring backend by pass through by currentPage and itemsPerPages after implement backend
  // Calculate the index range for the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // Slice the data to get the items for the current page
  const currentItems = testimonials.slice(startIndex, endIndex);

  useEffect(() => {
    fetch("/Testimonials.json")
      .then((res) => res.json())
      .then((data) => Settestimonials(data));
  }, []);

  const handleChangePage = (page) => {
    SetCurrentPage(page);
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      SetCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      SetCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <Helmet>
        <title>Rentify | Testimonials</title>
      </Helmet>
      <div>
        {/* banner component added */}
        <PageBanner
          heading={"Testimonials"}
          title={"Testimonials"}
          img={"https://i.ibb.co/yqkYvBM/breadcrumb-3.jpg"}
        />
        {/* it's cart part */}
        <div className="max-w-screen-2xl mx-auto my-14">
          <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {currentItems?.map((item, index) => (
              <div key={index}>
                <div className="w-full ">
                  <div className=" flex flex-col items-center justify-center">
                    <img
                      className="h-60 rounded-full"
                      src={item.img}
                      alt="Shoes"
                    />
                  </div>
                  <div className="p-8 mt-10 bg-base-200 md:h-[250px] h-[260px] rounded">
                    <p className=" space-y-2 mt-2">{item.description}</p>
                    <div className=" flex justify-between items-center mt-4">
                      <h2 className=" text-3xl font-bold">{item.name}</h2>
                      <div className=" flex items-center gap-2 font-bold">
                        <p>
                          <FaStar className=" text-yellow-400"></FaStar>
                        </p>
                        <p className="text-black text-xl">{item.rating}</p>
                      </div>
                    </div>
                    <h3 className=" text-xl mt-2">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center items-center mt-10">
            <div className="join">
              <div className=" flex items-center">
                <button
                  className="mr-5 items-center flex justify-center btn-circle text-gray-400 hover:bg-[#EC3323]"
                  onClick={handlePrev}
                >
                  <FaArrowLeft></FaArrowLeft>
                </button>
                {pages.map((page) => (
                  <button
                    key={page}
                    onClick={() => handleChangePage(page)}
                    className={
                      currentPage == page
                        ? " btn btn-circle bg-[#EC3323] mr-5"
                        : "btn btn-circle hover:bg-[#EC3323] mr-5"
                    }
                  >
                    {page}
                  </button>
                ))}
                <button
                  className="ml-5 btn-circle items-center flex justify-center hover:bg-[#EC3323] text-gray-400"
                  onClick={handleNext}
                >
                  <FaArrowRight></FaArrowRight>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
