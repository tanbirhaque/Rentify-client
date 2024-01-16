import { IoMdCheckmarkCircleOutline } from "react-icons/io";
const About = () => {
    return (
        <div className='flex  justify-evenly max-w-screen-2xl  mx-auto '>
            <div className='relative '>
                <img className='w-[450px] h-[500px]' src="https://i.ibb.co/sgQWNHX/download.jpg" alt="" />
                <div className='absolute -bottom-1/4 left-1/2 h-[600px] w-[600px]'>
                    <img className="" src="https://i.ibb.co/CPXqSN1/download.jpg" alt="" />

                </div>
            </div>
            <div>
                <h1 className='text-[#e33226] font-semibold'>About Us</h1>
                <p className="text-3xl font-bold mb-4">Enjoy Our Property For A <br /> Weekend Longer Stay</p>
                <p className="text-lg w-96">Best Strategic planning dolor sit amet consectetur adipiscing elit. Scel erus isque ametus odio velit auctor nam elit nulla eget sodales dui pulvinar. Best strategic planning dolor sit sectetur morethe</p>
                <ul className="text-lg">
                    <li className="flex items-center gap-2 "><IoMdCheckmarkCircleOutline className="text-[#e33226]" />We have a strong customer support in 24/7 days</li>
                    <li className="flex items-center gap-2"><IoMdCheckmarkCircleOutline className="text-[#e33226]" />We offer wonderful homes with furnitures.</li>
                    <li className="flex items-center gap-2"><IoMdCheckmarkCircleOutline className="text-[#e33226]" />Private balconies with stunning views</li>
                    <li className="flex items-center gap-2"><IoMdCheckmarkCircleOutline className="text-[#e33226]" />Smart Home Design & Beautiful Scene Around</li>
                </ul>
            </div>
        </div>
    );
};

export default About;