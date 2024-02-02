import React from 'react';
import CommonHeading from '../../../../Shared/CommonHeading/CommonHeading';
import ButtonBlue from '../../../../Shared/buttons/Blue/ButtonBlue';

const OurAdvantage = () => {
    return (
        <>
            <div className='text-center max-w-screen-xl mx-auto my-[80px]'>
                <CommonHeading small={'Advantages'} big={"Our Best Advantages"}></CommonHeading>
                <div className='flex flex-col md:flex-row self-center justify-center items-center py-8 md:px-4 xl:px-0'>
                    <div className=' text-center px-3 '>
                        <img className='mx-auto h-[233px]' src="https://i.ibb.co/3WSGgxP/download-1-removebg-preview-1.png" alt="" />
                        <h1 className='text-[22px] poppins-font font-semibold text-black mt-5 mb-3'>Smart Home Design</h1>
                        <p className='leading-7 text-[#666666]'>Lorem ipsum dolor sit amet, cons ectetur adip isci ngelit, sed do eiusmod tem.</p>
                    </div>
                    <div className=' text-center px-3'>
                        <img className='mx-auto h-[233px]' src="https://i.ibb.co/TvzRwLV/download-removebg-preview-1.png" alt="" />
                        <h1 className='text-[22px] poppins-font font-semibold text-black mt-5 mb-3'>Beautiful Scene Around</h1>
                        <p className='leading-7 text-[#666666]'>Lorem ipsum dolor sit amet, cons ectetur adip isci ngelit, sed do eiusmod tem.</p>
                    </div>
                    <div className=' text-center px-3'>
                        <img className='mx-auto h-[233px]' src="https://i.ibb.co/wdj5Sjb/download-removebg-preview-2-1.png" alt="" />
                        <h1 className='text-[22px] poppins-font font-semibold text-black mt-5 mb-3'>Complete 24/7 Support</h1>
                        <p className='leading-7 text-[#666666]'>Lorem ipsum dolor sit amet, cons ectetur adip isci ngelit, sed do eiusmod tem.</p>
                    </div>\
                </div>
                <ButtonBlue
                    titleBlue={"Explore Properties"}
                    padX={"px-8"}
                    padY={"py-[16px]"}
                    textSize={'text-[16px]'}
                ></ButtonBlue>
            </div>
        </>
    );
};

export default OurAdvantage;