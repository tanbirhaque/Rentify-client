// This page make by Roknuzzaman sajib
// all fixed & full page created been responsive
import { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaComment,
  FaLongArrowAltRight,
  FaRegCalendarAlt,
} from "react-icons/fa";
import "./styles.css";
import { Link, NavLink } from "react-router-dom";
import useBlogs from "../../../Hooks/useBlogs";
import { Helmet } from "react-helmet";
import PageBanner from "../../Shared/banner for pages/PageBanner";

const Bloggrid = () => {
  const [blogs] = useBlogs();
  const [currentPage, SetCurrentPage] = useState(0);
  // console.logo(blogs)
  // TODO: blogs data pagination on page
  const count = blogs?.length;
  // now this time temper page static.after when we will do backed in then we will do it's dynamic
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
  const currentItems = blogs.slice(startIndex, endIndex);

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
        <title>Rentify | Blogs</title>
      </Helmet>

      <div>
        <PageBanner
          heading={"Blog Grid"}
          title={"Blogs"}
          img={"https://i.ibb.co/M6r72CP/breadcrumb-4.jpg"}
        />
        <div className=" max-w-screen-2xl mx-auto my-32">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
            {currentItems.map((item) => (
              <div key={item._id}>
                {/* animation bg fixed */}
                {/* card class, image-container, imghover & img is import by styles.css*/}
                <div className="cart bg-base-100 shadow-md md:w-full w-11/12  h-[500px] md:mx-0 mx-auto rounded">
                  <div className="image-container">
                    <img
                      className="imghover img hover:shadow-2xl"
                      src={item.img}
                      alt="blog-image"
                    />
                  </div>
                  <div className="pl-6 mt-5">
                    <div className="flex items-center justify-start gap-7">
                      <p className=" text-xl flex items-center justify-center gap-2">
                        <FaRegCalendarAlt className=" text-red-500"/>
                        <span className=" hover:text-red-500">{item.date}</span>
                      </p>
                      <p className=" text-xl flex justify-center items-center gap-2">
                        <FaComment className=" text-red-500"/>
                        <span className=" hover:text-red-500">
                          {item.comment} Comment
                        </span>
                      </p>
                    </div>
                    <h2 className=" text-3xl font-bold mt-4">{item.title}</h2>
                    <Link to={`/blogs/${item._id}`}>
                      <button className=" text-2xl font-bold text-red-500 flex items-center gap-2 navAfter mt-4">
                        Read more
                        <FaLongArrowAltRight />
                      </button>
                    </Link>
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
                  <FaArrowLeft />
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
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bloggrid;
