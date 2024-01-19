import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import loginAnimation from "../../../../public/LoginAnimation.json";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

import Swal from "sweetalert2";
import toast from "react-hot-toast";
import SocialLogin from "../../Shared/Social/SocialLogin";

const Login = () => {
  const { loginUser } = useAuth();

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
        Swal.fire({
          title: "Login successful!",
          showClass: {
            popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
          },
          hideClass: {
            popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
          },
        });
      })
      .catch((err) => {
        console.log(err.message);
        toast(err.code, {
          icon: "❌",
          style: {
            borderRadius: "10px",
            background: "#002172",
            color: "#fff",
          },
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
            <div className="flex flex-col gap-5">
              <div className="ms-auto text-sm text-blue-500">
                Don&#39;t have an account?{" "}
                <Link
                  to="/register"
                  className="hover:underline hover:text-blue-700"
                >
                  Register
                </Link>
              </div>
              <button className="btn block bg-[#002172] hover:bg-[#142a9b] w-fit lg:w-[558px] text-white ">
                Login
              </button>
            </div>
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
