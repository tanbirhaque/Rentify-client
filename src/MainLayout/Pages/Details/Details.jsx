import { NavLink, useLoaderData, useParams } from 'react-router-dom';
import CommonHeading from '../../Shared/CommonHeading/CommonHeading';
import { CiLocationOn } from 'react-icons/ci';
import { RiCheckboxMultipleLine } from "react-icons/ri";
import { IoMdPlay } from "react-icons/io";
import VideoModal from '../Home/HomeComponents/Virtual Apartments/VideoModal';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import PropertyCard from '../../Shared/PropertyCards/PropertyCard';
import { useForm } from 'react-hook-form';

const Details = () => {
    const propertys = useLoaderData();
    const { id } = useParams();
    const item = propertys.find(item => item._id == id)
    console.log(item)

    const {
        register,
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => console.log(data)

    const {
        register: register2,
        handleSubmit: handleSubmit2,
    } = useForm()
    const onSubmit2 = (data) => console.log(data)


    return (
        <div>
            <div className="gridbgimg">
                <div className=" bg-[#000000B2]">
                    <div className=" max-w-screen-2xl mx-auto py-24">
                        <h2 className="text-6xl font-bold text-white font-serif">Property Details</h2>
                        <div className="mt-2">
                            <NavLink to='/' className='navAfter relative font-medium text-base text-white mx-3'>Home</NavLink>
                            <NavLink to='/blogs' className='navAfter relative font-medium text-base text-white mx-3'>Blogs</NavLink>
                            {/* <NavLink to={`/blogs/${blog._id}`} className='navAfter relative font-medium text-base text-white mx-3 '>Blogs details no slider</NavLink> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* details sections starts */}
            <div className='max-w-[1296px] mx-auto mt-16'>
                <div className='flex gap-6'>
                    <div className="main_details w-2/3">
                        <div className='mb-[30px]'>
                            <h2 className='text-[32px] poppins-font mb-[12px] font-semibold text-black'>Luxury & Modern Apartment</h2>
                            <p className="flex text-[16px] text-[#666666] items-center gap-2 "><CiLocationOn className="text-[#e33226]" />4890 Grey Fox Fam Road, Houston</p>
                        </div>
                        <div>
                            <img className='rounded-md' src={item?.property_info.property_img} alt="" />
                        </div>
                        {/* Description section */}
                        <div>
                            <h3 className='poppins-font text-[24px] font-semibold my-6'>Description</h3>
                            <p className='text-[#666666] text-[16px]'>
                                Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat accumsan id imperdiet et, porttitor at sem. Curabitur arcu erat accumsan id imperdiet et porttitor.
                                <br />
                                <br />
                                Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Nulla porttitor accumsan tincidunt. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Pellentesque in ipsum id orci porta dapibus.
                            </p>
                        </div>
                        {/* Property specification/details section */}
                        <div>
                            <h3 className='poppins-font text-[24px] font-semibold my-6'>Property Details</h3>
                            <ul className='grid grid-cols-3 gap-3'>
                                <li className='text-[16px] font-bold text-black'>Property ID: <span className='text-[#666666]'>V25680</span></li>
                                <li className='text-[16px] font-bold text-black'>Property Type: <span className='text-[#666666]'>Apartment</span></li>
                                <li className='text-[16px] font-bold text-black'>Property Status: <span className='text-[#666666]'>For Rent</span></li>
                                <li className='text-[16px] font-bold text-black'>Property Price: <span className='text-[#666666]'>$34,000</span></li>
                                <li className='text-[16px] font-bold text-black'>Rooms: <span className='text-[#666666]'>6</span></li>
                                <li className='text-[16px] font-bold text-black'>Bedrooms: <span className='text-[#666666]'>10</span></li>
                                <li className='text-[16px] font-bold text-black'>Bath: <span className='text-[#666666]'>2</span></li>
                                <li className='text-[16px] font-bold text-black'>Garages: <span className='text-[#666666]'>4</span></li>
                                <li className='text-[16px] font-bold text-black'>Year Built: <span className='text-[#666666]'>14/02/22</span></li>
                            </ul>
                        </div>
                        {/* Property Floor plans */}
                        <div>
                            <h3 className='poppins-font text-[24px] font-semibold my-6'>Floor Plans</h3>
                            <div className='p-[50px] bg-[#f9f9f9]'>
                                <img src="https://angular.hibootstrap.com/enuf/assets/img/property/floor-plan.png" alt="Floor plan image" />
                            </div>
                        </div>
                        {/* Property features */}
                        <div>
                            <h3 className='poppins-font text-[24px] font-semibold my-6'>Property Features</h3>
                            <ul className='grid grid-cols-3 gap-3'>
                                <li className='text-[#666666] flex items-center gap-2'><span><RiCheckboxMultipleLine className='text-[#eb3323]' /></span>Air Conditioned</li>
                                <li className='text-[#666666] flex items-center gap-2'><span><RiCheckboxMultipleLine className='text-[#eb3323]' /></span>Air Conditioned</li>
                                <li className='text-[#666666] flex items-center gap-2'><span><RiCheckboxMultipleLine className='text-[#eb3323]' /></span>Air Conditioned</li>
                                <li className='text-[#666666] flex items-center gap-2'><span><RiCheckboxMultipleLine className='text-[#eb3323]' /></span>Air Conditioned</li>
                                <li className='text-[#666666] flex items-center gap-2'><span><RiCheckboxMultipleLine className='text-[#eb3323]' /></span>Air Conditioned</li>
                                <li className='text-[#666666] flex items-center gap-2'><span><RiCheckboxMultipleLine className='text-[#eb3323]' /></span>Air Conditioned</li>
                                <li className='text-[#666666] flex items-center gap-2'><span><RiCheckboxMultipleLine className='text-[#eb3323]' /></span>Air Conditioned</li>
                                <li className='text-[#666666] flex items-center gap-2'><span><RiCheckboxMultipleLine className='text-[#eb3323]' /></span>Air Conditioned</li>
                                <li className='text-[#666666] flex items-center gap-2'><span><RiCheckboxMultipleLine className='text-[#eb3323]' /></span>Air Conditioned</li>
                            </ul>
                        </div>
                        {/* Property Video section */}
                        <div>
                            <h3 className='poppins-font text-[24px] font-semibold my-6'>Property Features</h3>
                            <div className='relative'>
                                <div>
                                    <img className='rounded-md' src="https://angular.hibootstrap.com/enuf/assets/img/property/single-property-2.jpg" alt="The video section image" />
                                </div>
                                <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-6 rounded-full'>
                                    <IoMdPlay
                                        className='text-[#eb3323] text-[34px]'
                                        onClick={() =>
                                            document.getElementById("my_modal_3").showModal()
                                        }
                                    />
                                    <VideoModal virtualLink={"https://www.youtube.com/embed/B4o8PvcqHC4?si=_KSnfXaSAJltBM0G"} />
                                </div>
                            </div>
                        </div>
                        {/* Property Review section */}
                        <div>
                            <h3 className='poppins-font text-[24px] font-semibold my-6'>3 Reviews</h3>
                            <div>
                                <div className='flex gap-5'>
                                    <div className='min-w-[100px]'>
                                        <img className='rounded-full w-[100px] h-[100px]' src="https://angular.hibootstrap.com/enuf/assets/img/clients/client-1.jpg" alt="Reviewer image" />
                                    </div>
                                    <div>
                                        <div className='flex items-center justify-between'>
                                            <h3 className='poppins-font text-[18px] font-semibold'>Josef Haris</h3>
                                            <div>
                                                <Rating
                                                    style={{ maxWidth: 80, }}
                                                    value={5}
                                                // onChange={setRating}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <p className='text-[14px] text-[#666666] mt-[12px] mb-[8px]'>15/04/2024</p>
                                            <p className='text-[#666666]'>Nulla porttitor accumsan tincidunt. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel.</p>
                                        </div>
                                        <div className='flex gap-5 mt-6'>
                                            <div>
                                                <img className='rounded-md' src="https://angular.hibootstrap.com/enuf/assets/img/property/property-1.jpg" alt="" />
                                            </div>
                                            <div>
                                                <img className='rounded-md' src="https://angular.hibootstrap.com/enuf/assets/img/property/property-2.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Review submition form starts */}
                        <div>
                            <h3 className='poppins-font text-[24px] font-semibold my-6'>Add your review</h3>
                            <div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    {/* register your input into the hook by invoking the "register" function */}
                                    <input {...register("name")}
                                        placeholder="Name*"
                                        className=" w-full py-5 bg-[#F9F9F9] rounded-md px-2 my-4" />
                                    {/* include validation with required or other standard HTML validation rules */}
                                    <input {...register("email", { required: true })}
                                        placeholder="Email Adress*"
                                        className="py-5 bg-[#F9F9F9] rounded-md px-2 w-full" />
                                    {/* errors will return when field validation fails  */}
                                    <input {...register("subject", { required: true })}
                                        placeholder="Website*"
                                        className="py-5 bg-[#F9F9F9] rounded-md px-2 w-full my-3" />
                                    <textarea {...register("message", { required: true })} className="textarea bg-[#F9F9F9] h-40 w-full mt-3 mb-4" placeholder="Please enter your comment"></textarea>
                                    <div className=" my-3 flex justify-start items-center gap-3">
                                        <input type="checkbox" className="checkbox" />
                                        <p className=" text-xl text-gray-400"> Save my name,email,website addres in this browser for the next time I commnet. </p>
                                    </div>
                                    <input type="submit" value="Post a comment" className=" rounded px-8 py-4 mt-3 bg-[#EC3323] hover:bg-[#002172] text-white mb-4" />
                                </form>
                            </div>
                        </div>
                        {/* similar property section starts */}
                        <div>
                            <h3 className='poppins-font text-[24px] font-semibold my-6'>Similar Properties</h3>
                            <div className='flex gap-6'>
                                <PropertyCard img={'https://angular.hibootstrap.com/enuf/assets/img/property/property-10.jpg'}></PropertyCard>
                                <PropertyCard img={'https://angular.hibootstrap.com/enuf/assets/img/property/property-2.jpg'}></PropertyCard>
                            </div>
                        </div>
                    </div>
                    <div className="details_aside bg-slate-300 w-1/3">
                        <form onSubmit={handleSubmit2(onSubmit2)} className=' w-[90%] mx-auto'>
                            <h2 className=' text-3xl font-bold my-5'>Book This Apartment</h2>
                            {/* register your input into the hook by invoking the "register" function */}
                            <input {...register2("name")}
                                placeholder="Full Name*"
                                className=" w-full py-5 bg-[#F9F9F9] rounded-md px-2 my-4" />
                            {/* include validation with required or other standard HTML validation rules */}
                            <input {...register2("number", { required: true })}
                                placeholder="Phone number*"
                                className="py-5 bg-[#F9F9F9] rounded-md px-2 mb-4 w-full" />
                            <input {...register2("email", { required: true })}
                                placeholder="Email Adress*"
                                className="py-5 bg-[#F9F9F9] rounded-md px-2 w-full" />
                            {/* errors will return when field validation fails  */}
                            <select {...register2("family", { required: true })}
                                className="select h-16 rounded-md px-2 w-full my-4">
                                <option defaultValue={"family members"}>Family Members</option>
                                <option value="two">2</option>
                                <option value="four">4</option>
                                <option value="six">6</option>
                            </select>
                            <select {...register2("children", { required: true })}
                                className="select h-16 rounded-md px-2 w-full mb-4">
                                <option defaultValue={"family members"}>Children</option>
                                <option value="one">1</option>
                                <option value="twos">2</option>
                                <option value="threes">3</option>
                            </select>
                            <textarea {...register2("message", { required: true })} className="textarea bg-[#F9F9F9] h-40 w-full mt-3 mb-4" placeholder="Enter you message"></textarea>
                            <input type="submit" value="Request Booknig" className=" rounded px-8 py-4 mt-3 bg-[#EC3323] hover:bg-[#002172] text-white mb-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;