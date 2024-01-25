import React from 'react';

const CommonHeading = ({small, big, pos}) => {
    return (
        <div>
            <p className={`lg:text-base md:text-sm text-xs font-medium mt-3 mb-[10px] text-[#e33226] ${pos? pos : 'text-center'}`} >
                {small}
            </p>
            <h2 className={`poppins-font text-black ${pos? pos : 'text-center'} text-4xl font-bold`}>
                {big}
            </h2>
        </div>
    );
};

export default CommonHeading;