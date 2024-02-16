// This page make by Roknuzzaman sajib
// all fixed & full page created been responsive 
import { NavLink } from "react-router-dom";
import './Testimonials.css'
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Testimonials = () => {
    const [testimonials, Settestimonials] = useState([]);
    // console.log(testimonials)

    // Done: make pagination 
    const [currentpage, Setcurrentpage] = useState(0);
    // DO: blogs data pagination on page 
    const count = testimonials?.length;
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
    const currentItems = testimonials.slice(startIndex, endIndex);

    useEffect(() => {
        fetch('/Testimonials.json')
            .then(res => res.json())
            .then(data => Settestimonials(data))
    }, [])

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
        <title>Rentify | Testimonials</title>
        
    </Helmet>
        <div>
            <div className="testbgimg">
                <div className=" bg-[#000000B2]">
                    <div className=" max-w-screen-2xl mx-auto py-24">
                        <h2 className="md:text-6xl text-2xl font-bold text-white font-serif">Testimonials</h2>
                        <div className="mt-2">
                            <NavLink to='/' className='navAfter relative font-medium text-base text-white mx-3'>Home</NavLink>
                            <NavLink to='/testimonials' className='navAfter relative font-medium text-base text-white mx-3 '>Testimonials</NavLink>
                        </div>
                    </div>
                </div>
            </div>

            {/* it's cart part */}
            <div className="max-w-screen-2xl mx-auto my-32">
                <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                    {
                        currentItems?.map((item, index) => <div key={index}>
                            <div className="w-full ">
                                <div className=" flex flex-col items-center justify-center">
                                    <img className="h-60 rounded-full" src={item.img} alt="Shoes" />
                                </div>
                                <div className="p-8 mt-10 bg-base-200 md:h-[250px] h-[260px] rounded">
                                    <p className=" space-y-2 mt-2">{item.description}</p>
                                    <div className=" flex justify-between items-center mt-4">
                                        <h2 className=" text-3xl font-bold">{item.name}</h2>
                                        <div className=" flex items-center gap-2 font-bold">
                                            <p><FaStar className=" text-yellow-400"></FaStar></p>
                                            <p className="text-black text-xl">{item.rating}</p>
                                        </div>
                                    </div>
                                    <h3 className=" text-xl mt-2">{item.title}</h3>
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

export default Testimonials;