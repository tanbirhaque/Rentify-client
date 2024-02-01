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
                    <img className="w-20 h-20" src="https://cdn.discordapp.com/attachments/1195470404463108217/1197440796870316182/authenticity.png?ex=65bb46a5&is=65a8d1a5&hm=95b6dd0cf4a6abff057af39dadc79c71d603ea3bbe79585a05c49916a82e8c97&" alt="" />
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
                    <img className="w-20 h-20  text-[#002172]" src="https://cdn.discordapp.com/attachments/1195470404463108217/1197440797059063889/apartment.png?ex=65bb46a5&is=65a8d1a5&hm=cb19f04b3d2ebe5dc17e5c525b17297d9f66706c92a47df1938f251fd74e8b03&" alt="" />
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
                    <img className="w-20 h-20 text-[#002172]" src="https://cdn.discordapp.com/attachments/1195470404463108217/1197440796639637584/office-building.png?ex=65bb46a5&is=65a8d1a5&hm=8aab3388d364b8e8fadb0c6a5e973b19106b35eaacb1bab24f19979076f1a46c&" alt="" />
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
                    <img className="w-20 h-20 text-[#002172]" src="https://cdn.discordapp.com/attachments/1195470404463108217/1197440796408946688/real-estate.png?ex=65bb46a5&is=65a8d1a5&hm=f7ae3bd5a73bbc9256e289d580d98c2dd7b6e9afeab7725500b2819f84ae7774&" alt="" />
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