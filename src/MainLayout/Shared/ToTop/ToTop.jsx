import React, { useEffect, useState } from 'react';
import { FaArrowUp } from "react-icons/fa";

const ToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    const handleTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    const listentToScroll = () => {
        let heightToHidden = 250;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop

        if (winScroll > heightToHidden) {
            setIsVisible(true)
        }
        else {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", listentToScroll)
        return () => window.removeEventListener("scroll", listentToScroll)
    }, [])


    return (
        <>
            {
                isVisible ?
                    <div onClick={handleTop}>
                        <button className={`font-semibold rounded-full text-3xl px-2 py-2 text-center bg-[#002172] text-white relative overflow-hidden group z-10 hover:text-white duration-700`}>
                            <span className="absolute bg-[#Ec3323] w-12 h-12 left-1/2 -translate-x-1/2  top-1/2 -translate-y-2/4 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-900 duration-500 origin-center transform transition-all"></span>
                            <FaArrowUp className='relative'></FaArrowUp>
                        </button>
                    </div>
                    :
                    <></>
            }
        </>
    );
};

export default ToTop;