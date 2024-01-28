import { useForm } from "react-hook-form";

const ReviewForm = () => {
  //review form
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="shadow-xl h-auto w-fit p-10 bg-[#F9F9F9]">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            {...register("name")}
            placeholder="Name*"
            className=" w-full py-5  rounded-md px-2 my-4"
          />
          {/* include validation with required or other standard HTML validation rules */}
          <input
            {...register("email", { required: true })}
            placeholder="Email Adress*"
            className="py-5 rounded-md px-2 w-full"
          />
          {/* errors will return when field validation fails  */}
          <input
            {...register("subject", { required: true })}
            placeholder="Website*"
            className="py-5 rounded-md px-2 w-full my-3"
          />
          <textarea
            {...register("message", { required: true })}
            className="textarea h-40 w-full mt-3 mb-4"
            placeholder="Please enter your comment"
          ></textarea>
          <div className=" my-3 flex justify-start items-center gap-3">
            <input type="checkbox" className="checkbox" />
            <p className=" text-xl text-gray-400">
              {" "}
              Save my name,email,website addres in this browser for the next
              time I commnet.{" "}
            </p>
          </div>
          <input
            type="submit"
            value="Submit Review"
            className=" rounded px-8 py-4 mt-3 bg-[#EC3323] hover:bg-[#002172] text-white mb-4"
          />
        </form>
      </div>
    </>
  );
};

export default ReviewForm;
