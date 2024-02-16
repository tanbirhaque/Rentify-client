// This page make by Roknuzzaman sajib
// all fixed & full page created been responsive 
import { NavLink } from "react-router-dom";
import { LuCopyCheck } from "react-icons/lu";
import './privacy.css'
import { Helmet } from "react-helmet";

const Privacy = () => {
    return (
       <>
       <Helmet>
        <title>Rentify | Privacy</title>
        
    </Helmet>
        <div>
            <div className="privacybgimg">
                <div className=" bg-[#000000B2]">
                    <div className=" max-w-screen-2xl mx-auto py-24">
                        <h2 className="md:text-6xl text-2xl font-bold text-white font-serif">Our Privacy</h2>
                        <div className="mt-2">
                            <NavLink to='/' className='navAfter relative font-medium text-base text-white mx-3'>Home</NavLink>
                            <NavLink to='/privacy' className='navAfter relative font-medium text-base text-white mx-3 '>Privacy Policy</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:max-w-screen-2xl w-11/12 mx-auto my-32">
                <div>
                    {/* Informaion Collection */}
                    <h3 className=" text-3xl font-bold mb-6">Information Collection</h3>
                    <p className="text-xl space-y-5 text-gray-500"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nulla minus quasi. Voluptatem, company name saepe ullam autem magni quod sint tempore, eius molestias aliquam debitis. Neque saepe dignissimos repudiandae fuga.
                        <br /> <br />
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eveniet quas dignissimos activities ea pariatur corrupti rerum deserunt, ipsum, ipsa eos veniam aspernatur fuga, optio soluta? Libero neque reiciendis cupiditate dolores nam. Earum eius similique sapiente. Iure, sit non. At fuga ipsam veniam.
                    </p>
                    {/* Cookies section */}
                    <h2 className=" text-3xl font-bold my-6">How We Use Cookies</h2>
                    <p className=" text-xl space-y-4 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eveniet quas dignissimos doloribus ea pariatur corrupti rerum deserunt, ipsum, ipsa eos veniam aspernatur fuga, optio soluta? Libero neque reiciendis cupiditate dolores nam. Earum eius similique sapiente. Iure, sit non. At fuga ipsam veniam.
                    </p>
                    <div className=" mt-6 text-xl space-y-4 text-gray-500">
                        <li className=" flex items-center justify-start gap-3 mb-6">
                            <LuCopyCheck className=" text-red-500"></LuCopyCheck>
                            <p>Lorem ipsum dolor, sit amet.</p>
                        </li>
                        <li className=" flex items-center justify-start gap-3 mb-6">
                            <LuCopyCheck className=" text-red-500"></LuCopyCheck>
                            <p>Amet consectetur adipisicing elit. Officia, odit!.</p>
                        </li>
                        <li className=" flex items-center justify-start gap-3 mb-6">
                            <LuCopyCheck className=" text-red-500"></LuCopyCheck>
                            <p>Lorem, ipsum dolor sit amet consectetur adipi.</p>
                        </li>
                        <li className=" flex items-center justify-start gap-3 mb-6">
                            <LuCopyCheck className=" text-red-500"></LuCopyCheck>
                            <p>Consectetur adipisicing elit. Voluptatibus, dignissimos.</p>
                        </li>
                        <li className=" flex items-center justify-start gap-3 mb-6">
                            <LuCopyCheck className=" text-red-500"></LuCopyCheck>
                            <p>Highly professional administration. </p>
                        </li>
                        <li className=" flex items-center justify-start gap-3 mb-6">
                            <LuCopyCheck className=" text-red-500"></LuCopyCheck>
                            <p>Aquaerat ipsa quis possimus..</p>
                        </li>
                    </div>
                    {/* Collection, Process, and Use of Personal Data section */}
                    <h2 className=" text-3xl font-bold my-6">The Collection, Process, and Use of Personal Data</h2>
                    <p className=" text-xl space-y-4 text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nulla minus quasi. Voluptatem, facilis saepe ullam autem magni quod sint tempore, eius molestias aliquam debitis. Neque saepe dignissimos repudiandae fuga.
                    </p>
                    {/* Protection section */}
                    <h2 className=" my-6 text-3xl font-bold">Data Protection</h2>
                    <p className="text-xl space-y-4 text-gray-500">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nulla minus quasi. Voluptatem, company name saepe ullam autem magni quod sint tempore, eius molestias aliquam debitis. Neque saepe dignissimos repudiandae fuga.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eveniet quas dignissimos aspernatur ea pariatur corrupti rerum deserunt, ipsum, ipsa eos veniam aspernatur fuga, optio soluta? Libero neque reiciendis cupiditate dolores nam. Earum eius similique sapiente. Iure, sit non. At fuga ipsam veniam.
                    </p>
                    {/* The Collection, Process and Use of Personal Data secttion */}
                    <h2 className=" text-3xl font-bold my-5">The Collection, Process and Use of Personal Data</h2>
                    <p className=" text-xl space-y-4 text-gray-500">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, quod. Ratione ex delectus quis tenetur odio non alias numquam official ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, laborum.
                    </p>
                    <div className="my-6 text-xl space-y-4 text-gray-500">
                        <p className=" mb-6">1.
                            Mauris ut in vestibulum hasellus ultrices fusce nibh justo, venenatis, amet. Lectus quam in lobortis.
                        </p>
                        <p className=" mb-6"> 2.
                            Consectetur phasellus ultrices fusce nibh justo, venenatis, amet. Lectus quam in lobortis justo venenatis amet.
                        </p>
                        <p className=" mb-6">3.
                            Lectus quam there are two thing is very important in Consectetur phasellus ultrices fusce nibh justo, venenatis, amet in lobortis.
                        </p>
                        <p className=" mb-6">4.
                            Web Development very creative to do something , mauris ut in vestibulum.
                        </p>
                    </div>
                    {/* Policy For Age sectrion */}
                    <h2 className=" my-6 text-3xl font-bold">Our Policy For Age Under 18</h2>
                    <p className=" text-xl space-y-4 text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nulla minus quasi. Voluptatem, facilis saepe ullam autem magni quod sint tempore, eius molestias aliquam debitis. Neque saepe dignissimos repudiandae fuga.</p>
                </div>
            </div>
        </div>
       </>
    );
};

export default Privacy;