import React, { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const TestLay = () => {
    // const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // const toggleSidebar = () => {
    //     setIsSidebarOpen(!isSidebarOpen);
    // };

    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
        console.log(isSidebarOpen)
    }

    return (
        <>
            <div className='flex'>
                <div className={`side_bar bg-gray-800 h-screen w-64 text-white transition-all duration-300 ${isSidebarOpen ? '' : '-ml-64'}`}>
                    <p>this is sidebar</p>
                </div>
                <div className='main_content'>
                    <p>This is main content</p>
                    <button
                        className='btn'
                        onClick={toggleSidebar}
                    >
                        {isSidebarOpen ? <FaTimes></FaTimes> : <FaBars></FaBars>}
                        {/* <FaBars></FaBars> */}
                    </button>
                </div>
            </div>
        </>


        // <div className="flex h-screen">
        //     {/* Sidebar */}
        //     <div className={`bg-gray-800 text-white w-64 p-4 transition-all duration-300 overflow-y-auto ${isSidebarOpen ? '' : '-ml-64'}`}>
        //         <p>Sidebar Content</p>
        //         <div className='bg-slate-600 h-[1320px]'>
        //             <h1>kjeoi</h1>
        //         </div>
        //     </div>

        //     {/* Main Content */}
        //     <div className="flex-1 p-4 relative">
        //         <button
        //             onClick={toggleSidebar}
        //             className="bg-gray-800 text-white p-2 rounded-md absolute top-4 left-4"
        //         >
        //             {/* {isSidebarOpen ? <FaTimes /> : <FaBars />} */}
        //             <FaBars />
        //         </button>
        //         {/* Your main content goes here */}
        //         <p>Main Content</p>
        //     </div>
        // </div>
    );
};

export default TestLay;
