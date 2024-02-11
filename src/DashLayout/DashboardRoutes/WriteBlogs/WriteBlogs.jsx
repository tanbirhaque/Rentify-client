// Blog writing page is created by Shajib and responsive design implementation by Tanbir

import { useForm } from 'react-hook-form';
import './Writeblogs.css'
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import ButtonRed from '../../../MainLayout/Shared/buttons/Red/ButtonRed'

const WriteBlogs = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const {
        register,
        handleSubmit,
        reset,
    } = useForm()
    const onSubmit = (data) => {
        const newBlog = {
            img: data.img,
            title: data.title,
            date: new Date().toLocaleDateString("en-GB"),
            details: data.details,
            description: data.description,
            commodoviverra: [
                data.commodoviverra
            ],
            majorFacility: [
                data.facility
            ],
            bloggerInfo: {
                bloggerName: user?.displayName,
                bloggerEmail: user?.email,
                bloggerImg: user?.photoURL,
                bloggerDetails: data.bloggerDetails
            }
        }
        console.log(newBlog)
        axiosSecure.post("/blogs", newBlog)
            .then(res => {
                console.log(res.data)
                Swal.fire(`Hey ${user.displayName} Your blog successfully added`)
                reset();
            })
    }

    return (
        <div>
            <div className="writeBlogBG">
                <div className=" bg-[#000000B2] rounded-lg">
                    <div className="max-w-full lg:w-fit xl:max-w-screen-2xl mx-auto lg:ml-5 xl:ml-12 py-24 w-[1350px] ">
                        <h2 className="text-6xl font-bold text-white font-serif pl-4">Write Blogs</h2>
                        <p className="text-lg font-normal text-gray-200 font-serif pl-4 pt-4">Your blogs Added here</p>
                    </div>
                </div>
            </div>
            <div className=' w-11/12 mx-auto mt-8 mb-20'>
                <h2 className=' text-4xl font-bold my-5'>Write your blog</h2>
                <div className=' bg-gray-200 p-8 rounded'>
                    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto">
                        <div className='flex flex-col lg:flex-row justify-between items-center gap-3'>
                            <div className=' w-full'>
                                <label className="label ">
                                    <span className="label-text text-lg font-semibold">
                                        Blog image
                                    </span>
                                </label>
                                <input
                                    {...register("img", { required: true })}
                                    placeholder="image url*"
                                    className="py-5 bg-[#F9F9F9] rounded-md px-2 mb-4 w-full"
                                />
                            </div>
                            <div className=' w-full'>
                                <label className="label ">
                                    <span className="label-text text-lg font-semibold">
                                        Blog Title
                                    </span>
                                </label>
                                <input
                                    {...register("title", { required: true })}
                                    placeholder="Blog title*"
                                    className="py-5 bg-[#F9F9F9] rounded-md px-2 mb-4 w-full"
                                />
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row justify-between items-center gap-3'>
                            <div className=' w-full'>
                                <label className="label ">
                                    <span className="label-text text-lg font-semibold">
                                        Commodo Viverra
                                    </span>
                                </label>
                                <input
                                    {...register("commodoviverra", { required: true })}
                                    placeholder="Blog Commodo Viverra *"
                                    className="py-5 bg-[#F9F9F9] rounded-md px-2 mb-4 w-full"
                                />
                            </div>
                            <div className=' w-full'>
                                <label className="label ">
                                    <span className="label-text text-lg font-semibold">
                                        Major Facilitys
                                    </span>
                                </label>
                                <input
                                    {...register("facility", { required: true })}
                                    placeholder="Facilitys*"
                                    className="py-5 bg-[#F9F9F9] rounded-md px-2 mb-4 w-full"
                                />
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row justify-between items-center gap-3'>
                            <div className='w-full'>
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">
                                        Write about your details
                                    </span>
                                </label>
                                <textarea
                                    {...register("bloggerDetails", { required: true })}
                                    className="textarea h-32 rounded-md px-2 w-full mb-4 py-5 bg-[#F9F9F9]"
                                    placeholder="Write yourself"
                                ></textarea>
                            </div>
                            <div className=' w-full'>
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">
                                        Write blog description
                                    </span>
                                </label>
                                <textarea
                                    {...register("description", { required: true })}
                                    className="textarea h-32 rounded-md px-2 w-full mb-4 py-5 bg-[#F9F9F9]"
                                    placeholder="Write blog description"
                                ></textarea>
                            </div>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-lg font-semibold">
                                    Write your blog
                                </span>
                            </label>
                            <textarea
                                {...register("details", { required: true })}
                                className="textarea h-40 rounded-md px-2 w-full mb-4 py-5 bg-[#F9F9F9]"
                                placeholder="Wrrite your blog"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                        >
                            <ButtonRed
                            titleRed={`Submit blog`}
                            padY={"py-16"}
                            ></ButtonRed>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default WriteBlogs;