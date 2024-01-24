import React from 'react';

const OurAdvantage = () => {
    return (
        <>

            <div className='text-center mt-32 mx-auto max-w-screen-2xl'>
                <h1 className='text-[#e33226]  font-semibold'>Advantages</h1>
                <h1 className='text-2xl xl:text-5xl  font-bold mb-10'>Our Best Advantages</h1>
                <div className='flex flex-col  md:flex-row xl:flex p-4 justify-center items-center '>
                    <div className='text-center items-center flex flex-col '>
                        <img className='xl:w-[300px] md:w-[150px] md:h-[100px] xl:h-[280px]' src="https://i.ibb.co/3WSGgxP/download-1-removebg-preview-1.png" alt="" />
                        <h1 className='text-xl font-semibold'>Smart Home Design</h1>
                        <p className=''>Lorem ipsum dolor sit amet, cons ectetur adip isci ngelit, sed do eiusmod tem.</p>
                    </div>
                    <div className=' text-center items-center flex flex-col'>
                        <img className='xl:w-[310px] xl:h-[280px] md:w-[150px] md:h-[100px]' src="https://i.ibb.co/TvzRwLV/download-removebg-preview-1.png" alt="" />
                        <h1 className='text-xl font-semibold'>Beautiful Scene Around</h1>
                        <p>Lorem ipsum dolor sit amet, cons ectetur adip isci ngelit, sed do eiusmod tem.</p>
                    </div>
                    <div className=' text-center items-center flex flex-col'>
                        <img className='xl:w-[300px] xl:h-[280px] md:w-[150px] md:h-[100px]' src="https://i.ibb.co/wdj5Sjb/download-removebg-preview-2-1.png" alt="" />
                        <h1 className='text-xl font-semibold'>Complete 24/7 Support</h1>
                        <p>Lorem ipsum dolor sit amet, cons ectetur adip isci ngelit, sed do eiusmod tem.</p>
                    </div>

                </div>
                <button className='bg-[#002172] text-white text-lg mt-8 btn hover:bg-[#e33226]'>Explore Properties</button>
            </div>


        </>
    );
};

export default OurAdvantage;