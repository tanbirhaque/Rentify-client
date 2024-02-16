//component made by "Fahima"
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useRequested from "../../../Hooks/useRequested";

const BookingForm = ({ item }) => {
  const axiosPublic = useAxiosPublic();
  const [requested, refetch] = useRequested();
  const { user } = useAuth();
  // console.log(requested)
  //form added by Sojib
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();

  //
  const onSubmit = (data) => {
    //condition for checking user
    if (user) {
      const propertyRequest = {
        property: item.property_info,
        propertyID: item._id,
        requestStatus: "pending", // Added this object property to manage requested property status as ['pending' || 'accepted' || 'rejected'] -by Tanbir
        requesterName: data.name,
        requesterNumber: data.number,
        requesterEmail: user.email,
        requesterPhoto: user.photoURL,
        requesterMessage: data.message,
        family: data.family,
        children: data.children,
      };
      const title = requested.find((request) => request.propertyID == propertyRequest.propertyID)

      if (title) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Your already have this property requested!",
          footer: `<a href='/all' className='font-bold underline'>Please request for another property</a>`,
          showConfirmButton: false,
        });
      } else {
        axiosPublic
          .post("/requested-properties", propertyRequest)
          .then((res) => {
            console.log(res.data);
            Swal.fire(`Hey ${data.name} Your Request is Successfully Send`);
            refetch();
            reset();
          });
      }
      console.log(propertyRequest);
      // reset();
    } else {
      // this login will allow user to add booking for their desired property only if they are user.
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Looks like you're not logged in!",
        footer: `<a href='/login' className='font-bold underline'>Please Log In</a>`,
        showConfirmButton: false,
      });
    }
  };
  //
  return (
    <>
      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto">
        <h2 className=" text-3xl font-bold pt-5">Book This Apartment</h2>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          {...register("name")}
          placeholder="Full Name*"
          defaultValue={user?.displayName}
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
          placeholder="Email Address*"
          defaultValue={user?.email}
          readOnly
          className="py-5 bg-[#F9F9F9] rounded-md px-2 w-full text-gray-400"
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
        <button
          type="submit"
          className=" rounded px-8 py-4 mt-3 bg-[#EC3323] hover:bg-[#002172] text-white mb-4"
        >
          Request Booking
        </button>
      </form>
    </>
  );
};

export default BookingForm;
