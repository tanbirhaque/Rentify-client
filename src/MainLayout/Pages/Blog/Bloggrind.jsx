import { useEffect, useState } from "react";
import { FaComment, FaLongArrowAltRight, FaRegCalendarAlt } from "react-icons/fa";
import './styles.css'
import { Link, NavLink } from "react-router-dom";

const Bloggrind = () => {

    const [blogs, setBlogs] = useState([]);
    console.assert(blogs)

    useEffect(() => {
        fetch('/Blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div>
            <div className="gridbgimg">
                <div className=" bg-[#000000B2]">
                    <div className=" max-w-screen-2xl mx-auto py-24">
                        <h2 className="text-6xl font-bold text-white font-serif">Bog Grid</h2>
                        <div className="mt-2">
                            <NavLink to='/' className='navAfter relative font-medium text-base text-white mx-3'>Home</NavLink>
                            <NavLink to='/blogs' className='navAfter relative font-medium text-base text-white mx-3 '>Blogs</NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" max-w-screen-2xl mx-auto my-32">
                <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    {
                        blogs.map(item => <div key={item._id}>
                            <div className="cart bg-base-100 shadow-xl w-full h-[500px]">
                                <div className="image-container">
                                    <img className="imghover img" src={item.img} alt="Shoes" />
                                </div>
                                <div className="pl-5 mt-5">
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
                                    <h2 className=" text-3xl font-blod mt-4">{item.title}</h2>
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
            </div>
        </div>
    );
};

export default Bloggrind;