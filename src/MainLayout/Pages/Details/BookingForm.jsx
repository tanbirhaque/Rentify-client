//coded by "Fahima"

import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import ButtonRed from "../../Shared/buttons/Red/ButtonRed";

const BookingForm = ({ item }) => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  //form
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const propertyRequest = {
      property: item.property_info,
      requesterName: data.name,
      requesterNumber: data.number,
      requesterEmail: data.email,
      requesterPhoto: user.photoURL,
      requesterMessage: data.message,
      family: data.family,
      children: data.children,
    };
    axiosPublic.post("/requested-properties", propertyRequest).then((res) => {
      console.log(res.data);
      Swal.fire(`Hey ${data.name} Your Request is Successfully Send`);
    });
    console.log(propertyRequest);
    reset();
  };
  //
  return (
    <>
      {/* form */}

      <form onSubmit={handleSubmit(onSubmit)} className=" w-[90%] mx-auto">
        <h2 className=" text-3xl font-bold my-5">Book This Apartment</h2>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          {...register("name")}
          placeholder="Full Name*"
          className=" w-full py-5 bg-[#F9F9F9] rounded-md px-2 my-4"
        />
        {/* include validation with required or other standard HTML validation rules */}
        <input
          {...register("number", { required: true })}
          placeholder="Phone number*"
          className="py-5 bg-[#F9F9F9] rounded-md px-2 mb-4 w-full"
        />
        <input
          {...register("email", { required: true })}
          placeholder="Email Adress*"
          className="py-5 bg-[#F9F9F9] rounded-md px-2 w-full"
        />
        {/* errors will return when field validation fails  */}
        <select
          {...register("family", { required: true })}
          className="select h-16 rounded-md px-2 w-full my-4 py-5 bg-[#F9F9F9]"
        >
          <option defaultValue={"family members"}>Family Members</option>
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="6">6</option>
        </select>
        <select
          {...register("children", { required: true })}
          className="select h-16 rounded-md px-2 w-full my-4 py-5 bg-[#F9F9F9]"
        >
          <option defaultValue={"family members"}>Children</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <textarea
          {...register("message", { required: true })}
          className="textarea h-32 rounded-md px-2 w-full my-4 py-5 bg-[#F9F9F9]"
          placeholder="Enter you message"
        ></textarea>
        {/* <button>
          <ButtonRed titleRed={"Request Booking"} />
        </button> */}
        <input
          type="submit"
          value="Request Booking"
          className=" rounded px-8 py-4 mt-3 bg-[#EC3323] hover:bg-[#002172] text-white mb-4"
        ></input>
      </form>
    </>
  );
};

export default BookingForm;
