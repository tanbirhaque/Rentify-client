//component added by "Fahima"

import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import loginAnimation from "../../../../assets/animation/LoginAnimation.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
import Swal from "sweetalert2";
import SocialLogin from "../Social/SocialLogin";

const Login = () => {
  const { loginUser } = useAuth();
  const currentLocation = useLocation();
  const destinedLocation = useNavigate();
  //form data
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    loginUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        destinedLocation(currentLocation?.state ? currentLocation.state : "/");
        Swal.fire({
          title: "Login successful!!!",
          timer: 2000,
          color: "#002172",
          showConfirmButton: false,
          icon: "success",
        });
      })
      .catch((err) => {
        console.log(err.message);
        Swal.fire({
          title: err.code,
          timer: 2000,
          color: "#002172",
          showConfirmButton: false,
          icon: "error",
        });
      });
  };

  return (
    <div className="max-w-screen-lg mx-auto my-10">
      <h3 className="text-3xl font-semibold text-center">Login to Rentify</h3>
      <div className="flex flex-col items-center md:flex-row gap-10">
        <div className="flex-1">
          <form
            className="max-w-screen-md mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h3 className="mt-8 mb-2 text-xl font-semibold">Email Address</h3>
            <input
              {...register("email", { required: true })}
              type="text"
              name="email"
              placeholder="Enter your email address"
              className="max-w-full md:w-[558px] bg-[#F3F3F3] h-14 pl-5 focus:ring-red-500 focus:border-red-500"
            />
            
            {errors.email && (
              <span className="text-xs text-red-600">
                Email is required to login.
              
              </span>
            )}
          
            <h3 className="text-xl font-semibold my-3">Password</h3>
            <input
              {...register("password", { required: true })}
              type="password"
              name="password"
              placeholder="Enter your password"
              className="max-w-full md:w-[558px] bg-[#F3F3F3] h-14 pl-5 mb-7"
            />
            {errors.password && (
              <span className="text-xs text-red-600">
                Password is required to login.
              </span>
            )}

            <button className="btn block bg-[#002172] hover:bg-[#142a9b] w-fit lg:w-[558px] text-white ">
              Login
            </button>
            {/*  */}
            <div className="md:flex md:justify-between mt-4">
              <div className="mb-2 mb-md-0">
                Don&#39;t have an account?{" "}
                <Link
                  to="/register"
                  className="hover:underline text-[#002172] hover:text-blue-700 font-bold"
                >
                  Register
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

export default Login;
