import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import loginAnimation from "../../../../public/LoginAnimation.json";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Register = () => {
  const { userRegister, userProfile } = useAuth();

  //form data
  const {
    register,
    handleSubmit,
    // reset,
    // watch,
    formState: { errors },
  } = useForm();

  //
  const onSubmit = (data) => {
    // console.log(data);
    userRegister(data.email, data.password)
      .then((res) => {
        console.log(res.user);

        // const userInfo = {
        //   name: data.name,
        //   email: data.email,
        //   image: data.image,
        //   role: "student",
        // };
        userProfile(data.name, data.image)
          .then((res) => {
            Swal.fire({
              title: "User created successfully!",
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
          .catch();
      })
      .catch((err) => {
        console.log(err.code);
        toast.error(err.code);
      });
  };
  //

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
              type="url"
              name="image"
              placeholder="Enter your Image URL"
              className="max-w-full md:w-[550px] bg-[#F3F3F3] h-14 pl-5"
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
              {...register("password", { required: true })}
              type="password"
              name="password"
              placeholder="Enter your password"
              className="max-w-full md:w-[550px] bg-[#F3F3F3] h-14 pl-5 mb-7"
            />
            {errors.password && (
              <span className="text-xs text-red-600">
                Password is required to register.
              </span>
            )}
            <div className="flex flex-col gap-5">
              <div className="ms-auto text-sm text-blue-500">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="hover:underline hover:text-blue-700"
                >
                  Register
                </Link>
              </div>
              <button className="btn block bg-[#002172] hover:bg-[#142a9b] w-fit lg:w-[558px] text-white ">
                Register
              </button>
            </div>
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
