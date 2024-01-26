// just add post operation has worked by sajib
import { useForm } from "react-hook-form";
// import useAxiosPublic from "../Hooks/useAxiosPublic";

const AddProperties = () => {
    // const axiosPublic = useAxiosPublic();

    const { register, handleSubmit, reset } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        // axiosPublic.post('/property', data)
        //     .then(res => {
        //         console.log(res.data)
        //         if (res.data) {
        //             Swal.fire(`${data.hotelName} is Added successfully`)
        //         }
        //     })
        reset();
    }

    return (
        <div className="">
            <h2 className=" text-4xl text-center font-bold font-mono my-7">Add your Property</h2>
            <div className=" bg-[#eae8e8] px-8 py-10 rounded space-y-2 text-black">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Oweners details related */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="text-xl font-mono font-bold">Owner name?</span>
                        </label>
                        <input type="text" placeholder="Type here" {...register("owner_name", { required: true })} className="py-5 px-2 rounded-md text-xl font-bold font-mono w-full" />
                    </div>
                    <div className=" flex items-center gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-xl font-mono font-bold">Owner image Url?</span>
                            </label>
                            <input type="text" placeholder="imageUrl" {...register("owner_img", { required: true })} className="py-5 px-2 rounded-md text-xl font-bold font-mono w-full" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="text-xl font-mono font-bold">owner_phone*</span>
                            </label>
                            <input type="number" {...register("owner_phone", { required: true })} placeholder="Type here" className="py-5 px-2 rounded-md text-xl font-bold font-mono w-full max-w-xs" />
                        </div>
                    </div>
                    <div className=" flex items-center gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-xl font-mono font-bold">owner_email?</span>
                            </label>
                            <input type="text" placeholder="owner_email" {...register("owner_email", { required: true })} className="py-5 px-2 rounded-md text-xl font-bold font-mono w-full" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="text-xl font-mono font-bold">owner_profession*</span>
                            </label>
                            <input type="text" {...register("owner_profession", { required: true })} placeholder="Type here" className="py-5 px-2 rounded-md text-xl font-bold font-mono w-full max-w-xs" />
                        </div>
                    </div>
                    <div className=" flex items-center gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-xl font-mono font-bold">owner_address?</span>
                            </label>
                            <input type="text" placeholder="owner_address" {...register("imageUrl", { required: true })} className="py-5 px-2 rounded-md text-xl font-bold font-mono w-full" />
                        </div>
                        {/* Property related */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="text-xl font-mono font-bold">Booking cost*</span>
                            </label>
                            <input type="text" {...register("bookingCost", { required: true })} placeholder="Type here" className="py-5 px-2 rounded-md text-xl font-bold font-mono w-full max-w-xs" />
                        </div>
                    </div>
                    <div className=" flex items-center gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-xl font-mono font-bold">property image Url?</span>
                            </label>
                            <input type="text" placeholder="imageUrl" {...register("imageUrl", { required: true })} className="py-5 px-2 rounded-md text-xl font-bold font-mono w-full" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="text-xl font-mono font-bold">Booking cost*</span>
                            </label>
                            <input type="text" {...register("bookingCost", { required: true })} placeholder="Type here" className="py-5 px-2 rounded-md text-xl font-bold font-mono w-full max-w-xs" />
                        </div>
                    </div>
                    <div className=" flex items-center gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-xl font-mono font-bold">property image Url?</span>
                            </label>
                            <input type="text" placeholder="imageUrl" {...register("imageUrl", { required: true })} className="py-5 px-2 rounded-md text-xl font-bold font-mono w-full" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="text-xl font-mono font-bold">Booking cost*</span>
                            </label>
                            <input type="text" {...register("bookingCost", { required: true })} placeholder="Type here" className="py-5 px-2 rounded-md text-xl font-bold font-mono w-full max-w-xs" />
                        </div>
                    </div>
                    <div className=" flex items-center gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-xl font-mono font-bold">property image Url?</span>
                            </label>
                            <input type="text" placeholder="imageUrl" {...register("imageUrl", { required: true })} className="py-5 px-2 rounded-md text-xl font-bold font-mono w-full" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="text-xl font-mono font-bold">Booking cost*</span>
                            </label>
                            <input type="text" {...register("bookingCost", { required: true })} placeholder="Type here" className="py-5 px-2 rounded-md text-xl font-bold font-mono w-full max-w-xs" />
                        </div>
                    </div>
                    <div className=" flex items-center gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-xl font-mono font-bold">property image Url?</span>
                            </label>
                            <input type="text" placeholder="imageUrl" {...register("imageUrl", { required: true })} className="py-5 px-2 rounded-md text-xl font-bold font-mono w-full" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="text-xl font-mono font-bold">Booking cost*</span>
                            </label>
                            <input type="text" {...register("bookingCost", { required: true })} placeholder="Type here" className="py-5 px-2 rounded-md text-xl font-bold font-mono w-full max-w-xs" />
                        </div>
                    </div>
                    <label className="label mt-4">
                        <span className="text-xl font-mono font-bold">Details*</span>
                    </label>
                    <textarea {...register("details")} className="textarea textarea-bordered w-full" placeholder="Details"></textarea>
                    <div className=" flex flex-row-reverse items-center gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-xl font-mono font-bold">Title?</span>
                            </label>
                            <input type="text" placeholder="Type title" {...register("title", { required: true })} className="py-5 px-2 rounded-md text-xl font-bold font-mono w-full" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="text-xl font-mono font-bold">Rating*</span>
                            </label>
                            <input type="text" {...register("rating", { required: true })} placeholder="Type here" className="py-5 px-2 rounded-md text-xl font-bold font-mono w-full max-w-xs" />
                        </div>
                    </div>
                    <button className="bg-[#000] hover:bg-[#ff9c1c] text-white px-6 py-4 rounded-md text-xl font-bold font-mono mt-3">
                        Add Property
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProperties;