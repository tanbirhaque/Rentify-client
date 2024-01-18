import React from 'react';

const OurAdvantage = () => {
    return (
       <>
       <div className='text-center mx-auto'>
       <h1 className='text-5xl  font-bold my-10'>Our Best Advantages</h1>
        <div className='flex self-center justify-center items-center '> 
            <div className=' text-center '>
                <img className='mx-auto' src="https://i.ibb.co/3WSGgxP/download-1-removebg-preview-1.png" alt="" />
                <h1 className='text-xl font-semibold'>Smart Home Design</h1>
                <p>Lorem ipsum dolor sit amet, cons ectetur adip isci ngelit, sed do eiusmod tem.</p>
            </div>
            <div className=' text-center'>
                <img className='mx-auto' src="https://i.ibb.co/TvzRwLV/download-removebg-preview-1.png" alt="" />
                <h1 className='text-xl font-semibold'>Beautiful Scene Around</h1>
                <p>Lorem ipsum dolor sit amet, cons ectetur adip isci ngelit, sed do eiusmod tem.</p>
            </div>
            <div className=' text-center'>
                <img className='mx-auto' src="https://i.ibb.co/wdj5Sjb/download-removebg-preview-2-1.png" alt="" />
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