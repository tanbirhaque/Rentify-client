// created by Sadia Afrin

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useRequested from "../../../Hooks/useRequested";
import useAuth from "../../../Hooks/useAuth";
import useProperties from "../../../Hooks/useProperties";
import { useParams } from "react-router-dom";
import { useRef } from "react";
import swal from "sweetalert";

const BookBuy = ({ item }) => {
  // console.log(items)
  
  const properties = useProperties();
  const { id } = useParams();
  // const item = properties.find((item) => item._id == id);
  const axiosPublic = useAxiosPublic();
  const [requested, refetch] = useRequested();
  const { user } = useAuth();
  // console.log(requested)

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
        property: item.property.property_info,
        propertyID: item.property._id,
        requestStatus: "pending",
        requesterName: data.name,
        requesterNumber: data.number,
        requesterEmail: user.email,
        requesterPhoto: user.photoURL,
        requesterMessage: data.message,
        family: data.family,
        children: data.children,
      };
      const title = requested.find(
        (request) => request.propertyID == propertyRequest.propertyID
      );
      if (title) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Your already have this property requested!",
          footer: `Please requsted more onther property`,
          showConfirmButton: false,
        });
        console.log("test to swal", propertyRequest );
      } 
      else {
        axiosPublic
          .post("/requested-properties", propertyRequest)
          .then((res) => {
            console.log(res.data);
            Swal.fire(`Hey ${data.name} Your Request is Successfully Send`);
            refetch();
            reset();
          });
        console.log("test request", propertyRequest );
      }
     
      // console.log("test request", propertyRequest );
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

  const modalRef = useRef(null);

  // const handleBookOrBuy = () => {
  //   // Open the modal using the showModal() method- Sadia

  //   modalRef.current.showModal();

  // };
  return (
    <>
      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto">
        <h2 className=" text-3xl font-bold pt-5">
          Send request for this property
        </h2>
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
        <div className="flex justify-between self-center items-center">
          <button
            type="submit"
            className=" rounded px-8 py-4 mt-3 bg-[#EC3323] hover:bg-[#002172] text-white mb-4"
          >
            Send Request
          </button>

          <div className="modal-action">
            <form method="dialog">
              <button
                className="bg-[#002172] py-3  px-8 -mt-4 hover:bg-[#e33226] text-white w-full rounded"
                onClick={() => modalRef.current.close()}
              >
                Close
                {/* <div className="flex justify-start items-start -ml-72">
           {property?.property_info?.property_for === "rent" ? (
            <>
            <div className="flex justify-start items-start">
            <button
                className="bg-[#002172] py-3 px-6 hover:bg-[#e33226] text-white w-full"
                onClick={handleBookOrBuy}
              >
                Book Now
              </button>
            </div>
            </>
          ) : (
           <div className="flex justify-start items-start"> 
            <button
           className="bg-[#002172] py-3 px-6 hover:bg-[#e33226] text-white w-full"
           onClick={handleBookOrBuy}
         >
           Buy Now
         </button></div>
      
          )}
           </div> */}
              </button>
            </form>
          </div>
        </div>
      </form>
    </>
  );
};

export default BookBuy;
