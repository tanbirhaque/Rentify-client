import React from 'react';

const CommonHeading = ({small, big}) => {
    return (
        <div>
            <p className="lg:text-base md:text-sm text-xs font-medium mt-3 mb-[10px] text-[#e33226] text-center">
                {small}
            </p>
            <h2 className="poppins-font text-center text-4xl font-bold">
                {big}
            </h2>
        </div>
    );
};

export default CommonHeading;