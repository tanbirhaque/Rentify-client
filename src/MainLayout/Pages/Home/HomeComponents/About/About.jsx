// This about section is created and structured by "Konika Khan"
// Updated with responsive design and animation by "Tanbir"

import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import CommonHeading from "../../../../Shared/CommonHeading/CommonHeading";
import "./About.css"
const About = () => {
    return (
        <div className="bg-[#f9f9f9] pt-[100px] pb-[250px]">
            <div className='max-w-[1296px] mx-auto flex justify-between gap-[170px]'>
                <div className='relative '>
                    <img className='min-w-[504px] min-h-[504px] rounded-[5px] z-10' src="https://i.ibb.co/sgQWNHX/download.jpg" alt="" />
                    <div className='absolute left-[225px] top-[305px] min-w-[400px] min-h-[350px]'>
                        <img className="min-w-full min-h-full rounded-[5px]" src="https://i.ibb.co/CPXqSN1/download.jpg" alt="" />
                    </div>
                    {/* Added by Tanbir */}
                    <div className="absolute left-16 -bottom-38">
                        <img className="rotate-anim" src="https://i.ibb.co/THwCWwB/shape-1-1.png" alt="Red cube png for rotating animation" />
                    </div>
                    <div className="absolute top-12 -right-16 z-0">
                        <img className="upnd-anim" src="https://i.ibb.co/VN6ZhGC/shape-2.png" alt="Red cube png for rotating animation" />
                    </div>
                </div>
                <div className="pt-[80px]">
                    <CommonHeading
                        small={'About Us'}
                        big={'Enjoy Our Property For A Weekend Longer Stay'}
                        pos={'text-left'}
                    >
                    </CommonHeading>
                    <p className="text-[17px] text-[#666666] my-6">Best Strategic planning dolor sit amet consectetur adipiscing elit. Scel erus isque ametus odio velit auctor nam elit nulla eget sodales dui pulvinar. Best strategic planning dolor sit sectetur morethe.</p>
                    <ul className="text-black font-semibold flex flex-col gap-4">
                        <li className="flex items-center gap-2 text-[16px]"><IoMdCheckmarkCircleOutline className="text-[#e33226]" />We have a strong customer support in 24/7 days</li>
                        <li className="flex items-center gap-2 text-[16px]"><IoMdCheckmarkCircleOutline className="text-[#e33226]" />We offer wonderful homes with furnitures.</li>
                        <li className="flex items-center gap-2 text-[16px]"><IoMdCheckmarkCircleOutline className="text-[#e33226]" />Private balconies with stunning views</li>
                        <li className="flex items-center gap-2 text-[16px]"><IoMdCheckmarkCircleOutline className="text-[#e33226]" />Smart Home Design & Beautiful Scene Around</li>
                    </ul>
                </div>
            </div>
        </div>
        
    );
};

export default About;