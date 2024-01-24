import { IoMdCheckmarkCircleOutline } from "react-icons/io";
const About = () => {
    return (
        
        <div className="bg-[#f9f9f9] mt-20 pb-60 pt-32 ">
            <div className='flex max-w-screen-2xl justify-center gap-28 items-center mx-auto '>
            <div className='relative  '>
                <img className='min-w-[504px] rounded-md min-h-[504px]' src="https://i.ibb.co/sgQWNHX/download.jpg" alt="" />
                
                    <img className="rounded-md absolute  top-[340px]  left-[250px] min-h-[350px] min-w-[400px]" src="https://i.ibb.co/CPXqSN1/download.jpg" alt="" />

                
            </div>
            <div className="w-[624px]">
                <h1 className='text-[#e33226]  font-semibold'>About Us</h1>
                <p className="text-3xl font-bold mb-4">Enjoy Our Property For A <br /> Weekend Longer Stay</p>
                <div className="">
                <p className="text-lg text-gray-500">Best Strategic planning dolor sit amet consectetur adipiscing elit. Scel erus isque ametus odio velit auctor nam elit nulla eget sodales dui pulvinar. Best strategic planning dolor sit sectetur morethe</p>

                </div>
                <ul className="text-lg font-semibold text-gray-900 mt-5">
                    <li className="flex items-center gap-2 "><IoMdCheckmarkCircleOutline className="text-[#e33226]" />We have a strong customer support in 24/7 days</li>
                    <li className="flex items-center gap-2"><IoMdCheckmarkCircleOutline className="text-[#e33226]" />We offer wonderful homes with furnitures.</li>
                    <li className="flex items-center gap-2"><IoMdCheckmarkCircleOutline className="text-[#e33226]" />Private balconies with stunning views</li>
                    <li className="flex items-center gap-2"><IoMdCheckmarkCircleOutline className="text-[#e33226]" />Smart Home Design & Beautiful Scene Around</li>
                </ul>
            </div>
        </div>
        </div>
    );
};

export default About;