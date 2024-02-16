// This page make by Roknuzzaman sajib
// all fixed & full page created been responsive 
import { NavLink } from "react-router-dom";
import './condition.css'
import { LuCopyCheck } from "react-icons/lu";
import { Helmet } from "react-helmet";

const Condition = () => {
    return (
       <>
        <Helmet>
        <title>Rentify | Condition</title>
        
    </Helmet>
        <div>
            {/* Banner section */}
            <div className="conditiontbgimg">
                <div className=" bg-[#000000B2]">
                    <div className=" max-w-screen-2xl mx-auto py-24">
                        <h2 className="md:text-6xl text-2xl font-bold text-white font-serif">Our Terms and Condition</h2>
                        <div className="mt-2">
                            <NavLink to='/' className='navAfter relative font-medium text-base text-white mx-3'>Home</NavLink>
                            <NavLink to='/conditions' className='navAfter relative font-medium text-base text-white mx-3 '>Terms & Conditions</NavLink>
                        </div>
                    </div>
                </div>
            </div>

            {/* Text section */}

            <div className="lg:max-w-screen-2xl w-11/12 mx-auto my-32">
                <div>
                    <h2 className=" text-3xl font-bold mb-6">Legal Disclaimer: </h2>
                    <p className="text-xl space-y-5 text-gray-500">
                        We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, subscribe to the newsletter, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number, company name. We will collect personal identification information from Users only if they voluntarily consent such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.
                    </p>
                    <h2 className=" text-3xl font-bold my-6">Credit Reporting Terms of Service</h2>
                    <p className="text-xl space-y-5 text-gray-500">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, quod. Ratione ex delectus quis tenetur odio non alias numquam official ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, laborum.
                    </p>
                    <div className="my-6 ml-4 text-xl space-y-4 text-gray-500">
                        <p className=" mb-6">1.
                            Mauris ut in vestibulum hasellus ultrices fusce nibh justo, venenatis, amet. Lectus quam in lobortis.Mauris ut in vestibulum hasellus ultrices fusce nibh justo, venenatis, amet. Lectus quam in lobortis.
                        </p>
                        <p className=" mb-6"> 2.
                            Consectetur phasellus ultrices fusce nibh justo, venenatis, amet. Lectus quam in lobortis justo venenatis amet.
                        </p>
                        <p className=" mb-6">3.
                            Lectus quam there are two thing is very important in Consectetur phasellus ultrices fusce nibh justo, venenatis, amet in lobortis..
                        </p>
                        <p className=" mb-6">4.
                            Web Development very creative to do something , mauris ut in vestibulum. Consectetur phasellus ultrices fusce nibh justo, venenatis, amet to all design.
                        </p>
                    </div>
                    <h2 className="text-3xl font-bold my-7">Ownership of Site Agreement to Terms of Use</h2>
                    <p className="text-xl space-y-5 text-gray-500">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nulla minus quasi. Voluptatem, facilis saepe ullam autem magni quod sint tempore, eius molestias aliquam debitis. Neque saepe dignissimos repudiandae fuga.<br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eveniet quas dignissimos doloribus ea pariatur corrupti rerum deserunt, ipsum, ipsa eos veniam aspernatur fuga, optio soluta? Libero neque reiciendis cupiditate dolores nam. Earum eius similique sapiente. Iure, sit non. At fuga ipsam veniam.
                    </p>
                    <h2 className=" text-3xl font-bold my-7">Provision of Services</h2>
                    <p className=" text-xl space-y-3 text-gray-400">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eveniet quas dignissimos doloribus ea pariatur corrupti rerum deserunt, ipsum, ipsa eos veniam aspernatur fuga, optio soluta? Libero neque reiciendis cupiditate dolores nam. Earum eius similique sapiente. Iure, sit non. At fuga ipsam veniam.
                    </p>
                    <div className=" ml-4 mt-6 text-xl space-y-4 text-gray-500">
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
                    <h2 className=" text-3xl font-bold my-6">Limitation of Liability</h2>
                    <p className="text-xl space-y-3 text-gray-400">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nulla minus quasi. Voluptatem, facilis saepe ullam autem magni quod sint tempore, eius molestias aliquam debitis. Neque saepe dignissimos repudiandae fuga.
                    </p>
                    <h2 className=" text-3xl font-bold my-7">Accounts, Passwords and Security</h2>
                    <p className=" text-xl space-y-3 text-gray-400">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nulla minus quasi. Voluptatem, facilis saepe ullam autem magni quod sint tempore, eius molestias aliquam debitis. Neque saepe dignissimos repudiandae fuga.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eveniet quas dignissimos doloribus ea pariatur corrupti ullam autem magni quod sint tempore saepe ullam autem magni.
                    </p>
                </div>
            </div>
        </div>
       </>
    );
};

export default Condition;