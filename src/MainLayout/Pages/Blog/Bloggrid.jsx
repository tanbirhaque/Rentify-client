// This page make by Roknuzzaman sajib
// all fixed & full page created been responsive 
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaComment, FaLongArrowAltRight, FaRegCalendarAlt } from "react-icons/fa";
import './styles.css'
import { Link, NavLink } from "react-router-dom";
import useBlogs from "../../../Hooks/useBlogs";
import { Helmet } from "react-helmet";

const Bloggrid = () => {
    const [blogs] = useBlogs() 
    const [currentpage, Setcurrentpage] = useState(0);
    // console.logo(blogs)
    // TODO: blogs data pagination on page 
    const count = blogs?.length;
    // now this time itemper page static.after when we will do backed in then we will do it's daynamic
    const itemsperPage = 6;
    const numberofPages = Math.ceil(count / itemsperPage)
    // console.log(numberofPages)

    const pages = [];
    for (let i = 0; i < numberofPages; i++) {
        pages.push(i);
    }
 
    //DO: CurentpageITems..If you want currentpagesdata be able to bring backedin by pass through by currentpage and itemsperPages after implement backedin 
    // Calculate the index range for the current page
    const startIndex = (currentpage) * itemsperPage;
    const endIndex = startIndex + itemsperPage;
    // Slice the data to get the items for the current page
    const currentItems = blogs.slice(startIndex, endIndex);

    const handlechangepage = (page) => {
        Setcurrentpage(page)
    }

    const handlePrev = () => {
        if (currentpage > 0) {
            Setcurrentpage(currentpage - 1)
        }
    }

    const handleNext = () => {
        if (currentpage < pages.length - 1) {
            Setcurrentpage(currentpage + 1)
        }
    }

    return (
        <>
        <Helmet>
        <title>Rentify | Blogs</title>
      
    </Helmet>
        
        <div>
            
            <div className="gridbgimg">
                <div className=" bg-[#000000B2]">
                    <div className=" max-w-screen-2xl mx-auto py-24">
                        <h2 className="text-6xl font-bold text-white font-serif">Blog Grid</h2>
                        <div className="mt-2">
                            <NavLink to='/' className='navAfter relative font-medium text-base text-white mx-3'>Home</NavLink>
                            <NavLink to='/blogs' className='navAfter relative font-medium text-base text-white mx-3 '>Blogs</NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" max-w-screen-2xl mx-auto my-32">
                <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
                    {
                        currentItems.map(item => <div key={item._id}>
                            {/* animation bg fixed */}
                            {/* card class, image-container, imghover & img is import by styles.css*/}
                            <div className="cart bg-base-100 shadow-md md:w-full w-11/12  h-[500px] md:mx-0 mx-auto rounded">
                                <div className="image-container">
                                    <img className="imghover img hover:shadow-2xl" src={item.img} alt="Shoes" />
                                </div>
                                <div className="pl-6 mt-5">
                                    <div className="flex items-center justify-start gap-7">
                                        <p className=" text-xl flex items-center justify-center gap-2">
                                            <FaRegCalendarAlt className=" text-red-500"></FaRegCalendarAlt>
                                            <span className=" hover:text-red-500">{item.date}</span>
                                        </p>
                                        <p className=" text-xl flex justify-center items-center gap-2">
                                            <FaComment className=" text-red-500"></FaComment>
                                            <span className=" hover:text-red-500">{item.comment} Comment</span>
                                        </p>
                                    </div>
                                    <h2 className=" text-3xl font-bold mt-4">{item.title}</h2>
                                    <Link to={`/blogs/${item._id}`}>
                                        <button className=" text-2xl font-blod text-red-500 pop-h2 flex items-center gap-2 navAfter mt-4">
                                            <span>Read more</span>
                                            <span><FaLongArrowAltRight></FaLongArrowAltRight></span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <div className="flex flex-col justify-center items-center mt-10">
                    <div className="join">
                        <div className=" flex items-center">
                            <button className="mr-5 items-center flex justify-center btn-circle text-gray-400 hover:bg-[#EC3323]" onClick={handlePrev}><FaArrowLeft></FaArrowLeft></button>
                            {
                                pages.map(page => <button
                                    key={page}
                                    onClick={() => handlechangepage(page)}
                                    className={currentpage == page ? " btn btn-circle bg-[#EC3323] mr-5" : "btn btn-circle hover:bg-[#EC3323] mr-5"}>{page}
                                </button>)
                            }
                            <button className="ml-5 btn-circle items-center flex justify-center hover:bg-[#EC3323] text-gray-400" onClick={handleNext}><FaArrowRight></FaArrowRight></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    );
};

export default Bloggrid;