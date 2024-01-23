import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
import Swal from "sweetalert2";
const SocialLogin = () => {
  const currentLocation = useLocation();
  const destinedLocation = useNavigate();
  // console.log(currentLocation);

  const { googleLogin } = useAuth();
  const handleLogin = (data) => {
    data()
      .then((response) => {
        console.log(response.user);
        Swal.fire({
          title: "User logged in with Google successfully!!!",
          timer: 2000,
          color: "#002172",
          showConfirmButton: false,
          icon: "success",
        });
        // go to the route after login
        destinedLocation(currentLocation?.state ? currentLocation.state : "/");
      })
      .catch((error) => {});
  };
  return (
    <div>
      <div className=" divider ">Or</div>
      {/* google button */}
      <button
        onClick={() => handleLogin(googleLogin)}
        className="btn bg-[#ec3323] text-white w-full hover:bg-[#002172]"
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
