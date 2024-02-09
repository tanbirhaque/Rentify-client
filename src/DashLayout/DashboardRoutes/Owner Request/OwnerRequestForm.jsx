import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const OwnerRequestForm = () => {
  //   const [selectedFile, setSelectedFile] = useState(null);

  //   const handleFileChange = (event) => {
  //     const file = event.target.files[0];
  //     setSelectedFile(file);
  //   };
  //
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  //const axiosPublic = useAxiosPublic();

  //images hosting to imgbb
  //   const image_hosting_api =
  //     "https://api.imgbb.com/1/upload?key=bd58c2cacfaf8bbacf4ee63a9bafe25c";

  const onSubmit = async (data) => {
    console.log(data);
    // const imageFile = { image: data.image[0] };
    // const res = await axiosPublic.post(image_hosting_api, imageFile, {
    //   headers: { "Content-Type": "multipart/form-data" },
    // });
    // const imageUrl = res.data.data.display_url;

    //for saving property data to backend
    const ownerRequest = {
      ownerEmail: user?.email,
      ownerName: user?.displayName,
      ownerImage: user?.photoURL,
      ownerProfession: data.profession,
      status: "pending",
    };
    console.log(ownerRequest);
    axiosSecure.post("/ownerRequest", ownerRequest).then((response) => {
      console.log(response.data);
      if (response.data.insertedId) {
        Swal.fire({
          title: `Your application will be reviewed soon.`,
          timer: 2000,
          color: "#002172",
          showConfirmButton: false,
          icon: "success",
        });
      } else {
        Swal.fire({
          title:
            "Can not request more than once. Please wait for admin approval.",
          timer: 2000,
          color: "#002172",
          showConfirmButton: false,
          icon: "error",
        });
      }
    });
  };
  //

  return (
    <>
      <h1 className="text-center my-3 text-3xl font-bold">
        Apply for being an Owner
      </h1>
      <div
        className="h-auto p-5 md:w-[416px] max-w-[416px] mt-3 mx-auto"
        style={{
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.09)",
        }}
      >
        <form className="mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Full Name"
            {...register("name")}
            defaultValue={user?.displayName}
            readOnly
            className="w-full py-5 bg-[#F9F9F9] rounded-md px-2 my-4"
          />
          <input
            placeholder="Email Address"
            {...register("email")}
            defaultValue={user?.email}
            readOnly
            className="w-full py-5 bg-[#F9F9F9] rounded-md px-2 my-4"
          />
          <input
            placeholder="Phone number"
            {...register("phone")}
            type="number"
            className="w-full py-5 bg-[#F9F9F9] rounded-md px-2 my-4"
            required
          />
          <input
            placeholder="Profession"
            {...register("profession")}
            className="w-full py-5 bg-[#F9F9F9] rounded-md px-2 my-4"
            required
          />
          <button className="rounded p-4 bg-[#002172] hover:bg-[#EC3323] text-white mb-4 w-full mt-3">
            Apply
          </button>
        </form>
      </div>
    </>
  );
};

export default OwnerRequestForm;
