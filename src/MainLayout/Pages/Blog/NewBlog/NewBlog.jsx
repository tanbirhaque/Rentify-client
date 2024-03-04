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
import { Link, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import PageBanner from "../../../Shared/banner for pages/PageBanner";
import useBlogs from "../../../../Hooks/useBlogs";
import { IoIosArrowForward } from "react-icons/io";
import { MdDateRange } from "react-icons/md";

const NewBLog = () => {
    const [blogs] = useBlogs();
    const [currentPage, SetCurrentPage] = useState(0);
    // console.logo(blogs)
    // TODO: blogs data pagination on page
    const count = blogs?.length;
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
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-7">
                        {currentItems.map((item) => (
                            <div key={item._id}>
                                {/* animation bg fixed */}
                                {/* card class, image-container, imgHover & img is import by styles.css*/}
                                <div className="group relative h-fit hover:-mt-[5px] overflow-hidden bg-white dark:bg-slate-900 rounded-xl shadow dark:shadow-gray-700 transition-all duration-500">
                                    <div className="relative overflow-hidden">
                                        <img
                                            className=" h-[230px] w-full"
                                            src={item.img}
                                            alt=""
                                        />
                                    </div>
                                    <div className="relative p-6">
                                        <div className="">
                                            <div className="flex justify-between mb-4">
                                                <span className="text-slate-400 text-sm flex items-center gap-1">
                                                    <span className=" text-slate-900">
                                                        <MdDateRange />
                                                    </span>
                                                    {item.date}
                                                </span>
                                                <span className="text-slate-400 text-sm ms-3 flex items-center gap-1">
                                                    <span>
                                                        <FaComment></FaComment>
                                                    </span>
                                                    {item.comment} Comment
                                                </span>
                                            </div>
                                            <a
                                                className="title text-xl font-medium hover:text-[#002172] duration-500 ease-in-out"
                                                href="/blog-detail/1"
                                            >
                                                {item.title}
                                            </a>
                                            <div className="mt-3">
                                                <div className=" overflow-hidden">
                                                    <Link to={`/blogs/${item._id}`}>
                                                        <div className="hover:text-[#002172] after:bg-[#002172] duration-500 ease-in-out flex items-center blogAfter">
                                                            <p>Read more</p>
                                                            <p>
                                                                <IoIosArrowForward />
                                                            </p>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
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

export default NewBLog;
