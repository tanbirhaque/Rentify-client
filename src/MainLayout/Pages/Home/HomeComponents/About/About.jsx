// This about section is created and structured by "Konika Khan"
// Updated with responsive design and animation by "Tanbir"

import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import CommonHeading from "../../../../Shared/CommonHeading/CommonHeading";
import "./About.css"
import ButtonBlue from "../../../../Shared/buttons/Blue/ButtonBlue";
const About = () => {
    return (
        <div className="bg-[#f9f9f9] pt-[100px] pb-[100px] lg:pb-[150px] xl:pb-[250px] px-8 xl:px-0">
            <div className='max-w-[1296px] mx-auto flex flex-col lg:flex-row lg:justify-center xl:justify-between gap-[170px]'>
                <div className='relative px-3 md:px-8 lg:px-0'>
                    <img className='lg:max-w-[361px] md:min-w-[574px] lg:min-w-[324px] xl:min-w-[504px] xl:min-h-[504px] rounded-[5px] z-10' src="https://i.ibb.co/sgQWNHX/download.jpg" alt="" />
                    <div className='absolute left-[180px] top-[250px] md:left-[325px] md:top-[380px] lg:left-[200px] lg:top-[250px] xl:left-[225px]  xl:top-[305px] min-w-[160px] lg:min-w-[300px] xl:min-w-[400px] min-h-[350px]'>
                        <img className="min-w-full min-h-full rounded-[5px]" src="https://i.ibb.co/CPXqSN1/download.jpg" alt="" />
                    </div>
                    {/* Added by Tanbir */}
                    <div className="absolute left-16 -bottom-38">
                        <img className="rotate-anim" src="https://i.ibb.co/THwCWwB/shape-1-1.png" alt="Red cube png for rotating animation" />
                    </div>
                    {/* <div className="absolute top-12 -right-16 z-0">
                        <img className="upnd-anim" src="https://i.ibb.co/VN6ZhGC/shape-2.png" alt="Red cube png for rotating animation" />
                    </div> */}
                </div>
                <div className="xl:pt-[80px]">
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
                    <div className="mt-8">
                        <ButtonBlue
                            titleBlue={"Know more"}
                            padX={"px-16"}
                            padY={"py-5"}
                        ></ButtonBlue>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;