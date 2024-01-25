import { NavLink } from "react-router-dom";


const SavedProperties = () => {
    return (
        <div>
            <div className="savedbgimg">
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
        </div>
    );
};

export default SavedProperties;
