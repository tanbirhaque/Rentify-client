//component added by "Fahima"
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import loginAnimation from "../../../../assets/animation/LoginAnimation.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../Social/SocialLogin";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

const Register = () => {
  const { userRegister, userProfile } = useAuth();
  const currentLocation = useLocation();
  const destinedLocation = useNavigate();
  const axiosPublic = useAxiosPublic();

  //images hosting to imgbb
  const image_hosting_api =
    "https://api.imgbb.com/1/upload?key=bd58c2cacfaf8bbacf4ee63a9bafe25c";

  //form data
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //
  const onSubmit = async (data) => {
    //image upload and getting url
    const imageFile = { image: data.image[0] };
    console.log(imageFile)
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(res.data);
    //now send the image link
    userRegister(data.email, data.password)
      .then(() => {
        const imageUrl = res.data.data.display_url;
        const userInfo = {
          name: data.name,
          email: data.email,
          image: imageUrl,
          role: "user",
        };
        userProfile(data.name, imageUrl)
          .then(() => {
            Swal.fire({
              title: "User created successfully!",
              timer: 2000,
              color: "#002172",
              showConfirmButton: false,
              icon: "success",
            });
            destinedLocation(
              currentLocation?.state ? currentLocation.state : "/"
            );
            axiosPublic.post("/users", userInfo).then(() => {
              reset();
            });
          })
          .catch();
      })
      .catch((err) => {
        console.log(err.code);
        console.log(err.message);
        Swal.fire({
          title: err.code,
          timer: 2000,
          color: "#002172",
          showConfirmButton: false,
          icon: "error",
        });
      });
    // console.log(data);
  };
  return (
    <div className="max-w-screen-lg mx-auto my-10">
      <h3 className="text-3xl font-semibold text-center mb-5">Register</h3>
      <div className="flex flex-col items-center md:flex-row-reverse gap-5">
        <div className="flex-1">
          <form
            className="max-w-screen-md mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h3 className="mt-8 mb-2 text-xl font-semibold">Name</h3>
            <input
              {...register("name", { required: true })}
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="max-w-full md:w-[550px] bg-[#F3F3F3] h-14 pl-5"
            />
            {errors.name && (
              <span className="text-xs text-red-600">
                Name is required to register.
              </span>
            )}
            <h3 className="mt-8 mb-2 text-xl font-semibold">Image</h3>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input max-w-full md:w-[550px] bg-[#F3F3F3] h-14"
            />
            {errors.image && (
              <span className="text-xs text-red-600">
                Image is required to register.
              </span>
            )}
            <h3 className="mt-8 mb-2 text-xl font-semibold">Email Address</h3>
            <input
              {...register("email", { required: true })}
              type="text"
              name="email"
              placeholder="Enter your email address"
              className="max-w-full md:w-[550px] bg-[#F3F3F3] h-14 pl-5"
            />
            {errors.email && (
              <span className="text-xs text-red-600">
                Email is required to register.
              </span>
            )}
            <h3 className="text-xl font-semibold my-3">Password</h3>
            <input
              {...register("password", {
                required: true,
                minLength: 6,
                pattern: /^(?=.*[A-Z]).{6,}$/i,
              })}
              type="password"
              name="password"
              placeholder="Enter your password"
              className="max-w-full md:w-[550px] bg-[#F3F3F3] h-14 pl-5 mb-7"
            />
            {errors.password?.type === "minLength" && (
              <span className="text-red-700">
                Password length should be 6 characters.
              </span>
            )}
            {errors.password?.type === "required" && (
              <span className=" text-red-700">
                Password is required to register.
              </span>
            )}
            {errors.password?.type === "pattern" && (
              <span className=" text-red-700">
                Password should contain at least one Capital letter.
              </span>
            )}
            <button className="btn block bg-[#002172] hover:bg-[#142a9b] w-fit lg:w-[558px] text-white ">
              Register
            </button>
            {/*  */}
            <div className="md:flex md:justify-between mt-4">
              <div className="mb-2 mb-md-0">
                Already have an account?
                <Link
                  to="/login"
                  className="hover:underline text-[#002172] hover:text-blue-700 font-bold"
                >
                  Login
                </Link>
              </div>
              <div>
                <Link
                  to="/reset"
                  className="text-[#002172] hover:text-[#ec3323]"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
            {/*  */}
            <SocialLogin />
          </form>
        </div>
        <div className="flex-1">
          <Lottie height={"80vh"} animationData={loginAnimation} />
        </div>
      </div>
    </div>
  );
};

export default Register;
