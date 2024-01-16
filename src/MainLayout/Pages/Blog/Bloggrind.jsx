import { useEffect, useState } from "react";
import './styles.css'
import { NavLink } from "react-router-dom";

const Bloggrind = () => {
    const [blogs, setBlogs] = useState([]);
    console.assert(blogs)
    useEffect(() => {
        fetch('Blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div>
            <div className="gridbgimg">
                <div className=" bg-[#000000B2]">
                    <div className=" md:w-1/2 w-full lg:ml-20 ml-0 py-24 ">
                        <h2 className="text-6xl font-bold text-white font-serif">Bog Grid</h2>
                        <NavLink to='/' className='navAfter mt-2 relative font-medium text-base text-white mx-3'>Home</NavLink>
                        <NavLink to='/blogs' className='navAfter relative font-medium text-base text-white mx-3 '>Blogs</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bloggrind;