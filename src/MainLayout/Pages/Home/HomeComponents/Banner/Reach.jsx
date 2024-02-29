// Reach section created and structured by "Sadia Afrin"
// Added auto countup on scroll feature and responsive design by  "Tanbir"

import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


const Reach = () => {
    const [counterOn, setCounterOn] = useState(false)

    return (
        <div className="bg-[#f9f9f9] my-20 mt-28 poppins-font py-[60px]">
            <div className="max-w-screen-2xl mx-auto grid justify-items-center md:grid-cols-2 lg:grid-cols-4  grid-cols-1 gap-16 py-6 px-3">
                <div className="flex items-center justify-center gap-4 min-w-1/4">
                    <img className="w-20 h-20" src="https://i.ibb.co/LYmZLTR/authenticity.png" alt="" />
                    <div>
                        <h1 className="text-5xl font-bold lg:leading-normal leading-7 text-[#e33226]">
                            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                {
                                    counterOn && <CountUp start={0} end={25} duration={2} delay={0} />
                                }+
                            </ScrollTrigger>
                        </h1>
                        <p className="text-base font-normal  text-[#002172] ">Years Of Experience</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-4 min-w-1/4">
                    <img className="w-20 h-20  text-[#002172]" src="https://i.ibb.co/n686KTD/apartment.png" alt="" />
                    <div>
                        <h1 className="text-5xl font-bold  lg:leading-normal leading-7 text-[#e33226]">
                            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                {
                                    counterOn && <CountUp start={0} end={165} duration={2} delay={0} />
                                }k+
                            </ScrollTrigger>
                        </h1>
                        <p className="text-base font-normal  text-[#002172] ">Apartments Rent</p>
                    </div>

                </div>
                <div className="flex items-center justify-center gap-4 min-w-1/4">
                    <img className="w-20 h-20 text-[#002172]" src="https://i.ibb.co/Pg2n24q/office-building.png" alt="" />
                    <div>
                        <h1 className="text-5xl font-bold  lg:leading-normal leading-7 text-[#e33226]">
                            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                {
                                    counterOn && <CountUp start={0} end={239} duration={2} delay={0} />
                                }+
                            </ScrollTrigger>
                        </h1>
                        <p className="text-base font-normal  text-[#002172] ">Total Constructions</p>
                    </div>

                </div>
                <div className="flex items-center justify-center gap-4 min-w-1/4">
                    <img className="w-20 h-20 text-[#002172]" src="https://i.ibb.co/LvtdsM9/real-estate.png" alt="" />
                    <div>
                        <h1 className="text-5xl font-bold  lg:leading-normal leading-7 text-[#e33226]">
                            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                {
                                    counterOn && <CountUp start={0} end={449} duration={2} delay={0} />
                                }+
                            </ScrollTrigger>
                        </h1>
                        <p className="text-base font-normal  text-[#002172] ">Apartio Rooms</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Reach;