import React from 'react';

const CommonHeading = ({small, big, pos}) => {
    return (
        <div>
            <p className={`text-xs md:text-sm lg:text-base font-bold mt-3 mb-[10px] text-[#e33226] ${pos? pos : 'text-center'}`} >
                {small}
            </p>
            <h2 className={`poppins-font text-black ${pos? pos : 'text-center'} text-4xl lg:text-[40px] font-bold`}>
                {big}
            </h2>
        </div>
    );
};

export default CommonHeading;