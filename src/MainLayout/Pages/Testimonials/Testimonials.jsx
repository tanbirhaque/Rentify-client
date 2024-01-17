import { NavLink } from "react-router-dom";
import './Testimonials.css'
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
    const [testimonials, Settestimonials] = useState();
    console.log(testimonials)

    useEffect(() => {
        fetch('/Testimonials.json')
            .then(res => res.json())
            .then(data => Settestimonials(data))
    }, [])

    return (
        <div>
            <div className="testbgimg">
                <div className=" bg-[#000000B2]">
                    <div className=" max-w-screen-2xl mx-auto py-24">
                        <h2 className="text-6xl font-bold text-white font-serif">Bog Grid</h2>
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
                        testimonials?.map((item, index) => <div key={index}>
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
            </div>
        </div>
    );
};

export default Testimonials;