import { useLocation, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";

const SocialLogin = () => {
  const currentLocation = useLocation();
  const destinedLocation = useNavigate();
  // console.log(currentLocation);

  const { googleLogin } = useAuth();
  const handleLogin = (data) => {
    data()
      .then((response) => {
        toast.success("User created successfully!!!");
        console.log(response.user);
        // go to the route after login
        destinedLocation(currentLocation?.state ? currentLocation.state : "/");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };
  return (
    <div>
      <div className=" divider ">Or</div>
      {/* google button */}
      <button
        onClick={() => handleLogin(googleLogin)}
        className="btn bg-[#ec3323] text-white w-full"
      >
        <div className="flex gap-3">
          <img
            className=" w-[29px] h-[29px] rounded-full"
            src="https://i.ibb.co/dMy26rb/g.png"
          />
          <p className="text-center mt-2">SignUp with Google</p>
        </div>
      </button>
    </div>
  );
};

export default SocialLogin;
