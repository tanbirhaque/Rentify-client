// This page creat by kanika
// creat ful page and creat also responsive full page
import { Link, NavLink } from "react-router-dom";
import './contact.css'
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { Helmet } from "react-helmet";


const Contact = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
       <>
         <Helmet>
        <title>Rentify | Contact</title>
        
    </Helmet>
        <div>
            {/* banner background part */}
            <div className="contactbgimg">
                <div className=" bg-[#000000B2]">
                    <div className=" max-w-screen-2xl mx-auto py-24">
                        <h2 className="md:text-6xl text-2xl font-bold text-white font-serif">Contact With Us</h2>
                        <div className="mt-2">
                            <NavLink to='/' className='navAfter relative font-medium text-base text-white mx-3'>Home</NavLink>
                            <NavLink to='/contact' className='navAfter relative font-medium text-base text-white mx-3 '>Privacy Policy</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            {/* page section */}
            <div className="lg:max-w-screen-2xl w-11/12 mx-auto my-32">
                {/* use extra div for change any desgin or any problem */}
                <div>
                    <div className="mb-24 flex md:flex-row flex-col justify-center items-center gap-5">
                        <div className=" md:w-full w-11/12 mx-auto h-[200px] shadow-2xl flex flex-col justify-center items-center relative
                         py-10">
                            <p className=" bg-red-600 hover:bg-purple-900 h-20 w-20 rounded-full flex flex-col justify-center items-center absolute -top-9"><CiLocationOn className="text-5xl font-bold text-white"></CiLocationOn></p>
                            <h2 className=" text-2xl font-bold">Visit Us Anytime</h2>
                            <p className=" text-gray-500 text-center">
                                342/A Brooklyn St, Milson Avenue,<br />
                                New York, USA
                            </p>
                        </div>
                        <div className="md:w-full w-11/12 mx-auto h-[200px] shadow-2xl flex flex-col justify-center items-center relative">
                            <p className=" bg-red-600 hover:bg-purple-900 h-20 w-20 rounded-full flex flex-col justify-center items-center absolute -top-9"><MdOutlineEmail className="text-5xl font-bold text-white"></MdOutlineEmail></p>
                            <h2 className=" text-2xl font-bold">Visit Us Anytime</h2>
                            <p className=" text-gray-500 text-center">
                                342/A Brooklyn St, Milson Avenue,<br />
                                New York, USA
                            </p>
                        </div>
                        <div className=" md:w-full w-11/12 mx-auto h-[200px] shadow-2xl flex flex-col justify-center items-center relative">
                            <p className=" bg-red-600 hover:bg-purple-900 h-20 w-20 rounded-full flex flex-col justify-center items-center absolute -top-9"><LuPhoneCall className="text-5xl font-bold text-white"></LuPhoneCall></p>
                            <h2 className=" text-2xl font-bold">Visit Us Anytime</h2>
                            <p className=" text-gray-500 text-center">
                                342/A Brooklyn St, Milson Avenue,<br />
                                New York, USA
                            </p>
                        </div>
                    </div>
                    <div className=" flex justify-around items-center gap-5">
                        <div className=" w-1/2">
                            <p className=" text-red-500">Contact Us</p>
                            <h2 className=" text-4xl font-extrabold my-4">How Can We Help You?</h2>
                            <p className=" leading-10 text-gray-500 mb-7 text-left text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores pariatur a eius ea similique quod dicta ipsa vel quidem repellendus, beatae nulla veniam, quaerat veritatis architecto. Aliquid doloremque nesciunt nobis, debitis, quas veniam dolore culpa corrupti maxime cum similique.</p>
                            <div className=" flex items-center gap-5 text-xl">
                                <a target="blank" href="https://www.facebook.com/roknujjamansajib" className=" bg-gray-200  rounded-full text-[#002172] text-xl p-2"><FaFacebook></FaFacebook></a>
                                <a target="blank" href="https://twitter.com/Roknuzzaman5546" className="bg-gray-200 text-xl  rounded-full text-[#002172] p-2"><FaTwitter></FaTwitter></a>
                                <a target="blank" href="https://www.instagram.com/roknujjamansajib/" className="bg-gray-200  rounded-full text-[#002172] text-xl p-2"><FaInstagram></FaInstagram></a>
                                <a target="blank" href="https://www.linkedin.com/in/roknuzzaman-sojib-b794552a3/" className="bg-gray-200  rounded-full text-[#002172] text-xl p-2"><FaLinkedin></FaLinkedin></a>
                            </div>
                        </div>
                        <div className=" w-1/2">
                            {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* register your input into the hook by invoking the "register" function */}
                                <div className=" flex items-center gap-4 my-4">
                                    <input {...register("name")}
                                        placeholder="Name*"
                                        className=" w-full py-5 border-2 rounded-md px-2" />
                                    {/* include validation with required or other standard HTML validation rules */}
                                    <input {...register("email", { required: true })}
                                        placeholder="Email*"
                                        className="py-5 border-2 rounded-md px-2 w-full" />
                                    {/* errors will return when field validation fails  */}
                                </div>
                                <input {...register("subject", { required: true })}
                                    placeholder="Subject*"
                                    className="py-5 border-2 rounded-md px-2 w-full my-3" />
                                <textarea {...register("message", { required: true })} className="textarea textarea-bordered h-40 w-full mt-3 mb-4" placeholder="Your messages"></textarea>
                                <div className=" my-2 flex justify-start items-center gap-3">
                                    <input type="checkbox" className="checkbox" />
                                    <p className=" text-xl">I agree to the <Link to="/conditions"><span className=" text-orange-600">terms & conditions</span></Link> and <Link to="privacy"><span className="text-orange-600">privacy policy</span></Link></p>
                                </div>
                                <input type="submit" value="Send Message" className=" rounded px-8 py-4 mt-3 bg-[#EC3323] hover:bg-[#002172] text-white" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </>
    );
};

export default Contact;