import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import ButtonBlue from "../../../MainLayout/Shared/buttons/Blue/ButtonBlue";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const OwnerRequestForm = () => {
  const [profileNext, setProfileNext] = useState(true)
  const [uploadForm, setUploadForm] = useState(true)
  //   const [selectedFile, setSelectedFile] = useState(null);

  //   const handleFileChange = (event) => {
  //     const file = event.target.files[0];
  //     setSelectedFile(file);
  //   };
  //

  // handleGoProfileInfo, handleGoUploadFile, handleGoStartForm, handleBackProfileInfo These four functions are functions of moving from one form to another by [sojib]
  const handleGoProfileInfo = () => {
    setProfileNext(false)
  }
  const handleGoUploadFile = () => {
    setUploadForm(false)
  }
  const handleGoStartForm = () => {
    setProfileNext(true)
  }
  const handleBackProfileInfo = () => {
    setUploadForm(true)
    setProfileNext(false)
  }

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
    // axiosSecure.post("/ownerRequest", ownerRequest)
    //   .then((response) => {
    //     console.log(response);
    //     // This extra condition was added by [Sajib] because _id comes from Mongoose
    //     if (response.data.insertedId || response.data._id) {
    //       Swal.fire({
    //         title: `Your application will be reviewed soon.`,
    //         timer: 2000,
    //         color: "#002172",
    //         showConfirmButton: true,
    //         icon: "success",
    //       });
    //     }
    //     else {
    //       Swal.fire({
    //         title:
    //           "Can not request more than once. Please wait for admin approval.",
    //         timer: 2000,
    //         color: "#002172",
    //         showConfirmButton: false,
    //         icon: "error",
    //       });
    //     }
    //   });
  };
  //

  return (
    <>
      <div>
        <section className="py-1 bg-[#f3f3f3] w-full h-screen">
          <div className=" bg-white w-[93%] mx-auto shadow-md pl-6 py-3 mt-4 rounded-lg">
            <ol className=" flex items-center gap-1">
              <p>Users</p>
              <p className=" font-bold text-[#002172]">/ Request for owner</p>
            </ol>
          </div>
          <div className="w-[93%] bg-white  px-6 mx-auto mt-6 mb-20 shadow-lg rounded-lg">
            <div className="relative flex flex-col  break-words w-full mb-6 bg-blueGray-100 border-0">
              <div className="rounded-t bg-white mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                  <h6 className="text-blueGray-700 text-xl font-bold">
                    Request for owner
                  </h6>
                </div>
              </div>
              <hr className="mb-7"></hr>
              <div className=" mb-7 flex justify-start items-center gap-8">
                {
                  profileNext && uploadForm ?
                    <div className=" flex items-center gap-4">
                      <p className=" text-3xl font-bold h-16 w-16 rounded-full items-center justify-center flex flex-col bg-[#002172] text-center text-black">1</p>
                      <div>
                        <h2 className=" text-xl font-bold text-[#002172]">Get Started</h2>
                        <p className=" font-bold text-[#002172]">Account information</p>
                      </div>
                    </div>
                    :
                    <div className=" flex items-center gap-4">
                      <p className=" text-3xl font-bold h-16 w-16 rounded-full items-center justify-center flex flex-col bg-[#f3f3f3] text-center">1</p>
                      <div>
                        <h2 className=" text-xl font-bold">Get Started</h2>
                        <p className=" font-bold text-[#a8a2a2]">Account information</p>
                      </div>
                    </div>
                }
                {
                  !profileNext && uploadForm ?
                    <div className=" flex items-center gap-4">
                      <p className=" text-3xl font-bold h-16 w-16 rounded-full items-center justify-center flex flex-col bg-[#002172] text-center text-black">2</p>
                      <div>
                        <h2 className=" text-xl font-bold text-[#002172]">Profile Info</h2>
                        <p className=" font-bold text-[#002172]">Add profile info</p>
                      </div>
                    </div>
                    :
                    <div className=" flex items-center gap-4">
                      <p className=" text-3xl font-bold h-16 w-16 rounded-full items-center justify-center flex flex-col bg-[#f3f3f3] text-center">2</p>
                      <div>
                        <h2 className=" text-xl font-bold">Profile Info</h2>
                        <p className=" font-bold text-[#a8a2a2]">Add profile info</p>
                      </div>
                    </div>
                }
                {
                  uploadForm ?
                    <div className=" flex items-center gap-4">
                      <p className=" text-3xl font-bold h-16 w-16 rounded-full items-center justify-center flex flex-col bg-[#f3f3f3] text-center">3</p>
                      <div>
                        <h2 className=" text-xl font-bold">Upload files</h2>
                        <p className=" font-bold text-[#a8a2a2]">Successfully submitted</p>
                      </div>
                    </div>
                    :
                    <div className=" flex items-center gap-4">
                      <p className=" text-3xl font-bold h-16 w-16 rounded-full items-center justify-center flex flex-col bg-[#002172] text-center text-black">3</p>
                      <div>
                        <h2 className=" text-xl font-bold text-[#002172]">Upload files</h2>
                        <p className=" font-bold text-[#002172]">Successfully submitted</p>
                      </div>
                    </div>
                }
              </div>
              <hr className="mb-5"></hr>
              <form className="px-4" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  {
                    uploadForm ?
                      <div>
                        {
                          profileNext ?
                            < div >
                              <div className="grid md:grid-cols-3 grid-cols-1 gap-4  mb-5">
                                <div className="form-control">
                                  <label className="label ">
                                    <span className="label-text text-lg font-semibold">
                                      First Name
                                    </span>
                                  </label>
                                  <label className="input-group ">
                                    <input
                                      {...register("firstName")}
                                      type="text"
                                      placeholder="Add your first name"
                                      className="input form-border input-bordered w-full"
                                    />
                                  </label>
                                </div>
                                <div className="form-control">
                                  <label className="label ">
                                    <span className="label-text text-lg font-semibold">
                                      Last Name
                                    </span>
                                  </label>
                                  <label className="input-group ">
                                    <input
                                      {...register("lastName")}
                                      type="text"
                                      placeholder="Add your last name"
                                      className="input form-border input-bordered w-full"
                                    />
                                  </label>
                                </div>
                                <div className="form-control">
                                  <label className="label ">
                                    <span className="label-text text-lg font-semibold">
                                      Email Address
                                    </span>
                                  </label>
                                  <label className="input-group ">
                                    <input
                                      {...register("email")}
                                      type="text"
                                      placeholder="Add your email"
                                      className="input form-border input-bordered w-full"
                                    />
                                  </label>
                                </div>
                              </div>
                              <div className="grid md:grid-cols-2 grid-cols-1 gap-4  mb-5">
                                <div className="form-control">
                                  <label className="label ">
                                    <span className="label-text text-lg font-semibold">
                                      Phone Number
                                    </span>
                                  </label>
                                  <label className="input-group ">
                                    <input
                                      {...register("number")}
                                      type="text"
                                      placeholder="Add your phone number"
                                      className="input form-border input-bordered w-full"
                                    />
                                  </label>
                                </div>
                                <div className="form-control">
                                  <label className="label ">
                                    <span className="label-text text-lg font-semibold">
                                      Date of birth
                                    </span>
                                  </label>
                                  <label className="input-group ">
                                    <input
                                      {...register("dateBirth")}
                                      type="date"
                                      className="input form-border input-bordered w-full"
                                    />
                                  </label>
                                </div>
                              </div>
                              <div className=" flex flex-row justify-end items-center mb-4" onClick={handleGoProfileInfo}>
                                <ButtonBlue
                                  titleBlue={`Next`}
                                >
                                </ButtonBlue>
                              </div>
                            </div>
                            :
                            <div>
                              <div>
                                <div className="flex lg:flex-row md:flex-col flex-col items-center gap-4  mb-5">
                                  <div className=" flex md:flex-row flex-col items-center gap-4 lg:w-[67%] md:w-full w-full">
                                    <div className="form-control  w-full">
                                      <label className="label ">
                                        <span className="label-text text-lg font-semibold">
                                          Facebook link
                                        </span>
                                      </label>
                                      <label className="input-group ">
                                        <input
                                          {...register("facebook")}
                                          type="text"
                                          placeholder="Add your facebook link"
                                          className="input form-border input-bordered w-full"
                                        />
                                      </label>
                                    </div>
                                    <div className="form-control w-full">
                                      <label className="label ">
                                        <span className="label-text text-lg font-semibold">
                                          Twitter link
                                        </span>
                                      </label>
                                      <label className="input-group ">
                                        <input
                                          {...register("twitter")}
                                          type="text"
                                          placeholder="Add your twitter id link"
                                          className="input form-border input-bordered w-full"
                                        />
                                      </label>
                                    </div>
                                  </div>
                                  <div className="form-control lg:w-[33%] md:w-full w-full">
                                    <label className="label ">
                                      <span className="label-text text-lg font-semibold">
                                        Linkedin link
                                      </span>
                                    </label>
                                    <label className="input-group ">
                                      <input
                                        {...register("linkedin")}
                                        type="text"
                                        placeholder="Add your linkedin id link"
                                        className="input form-border input-bordered w-full"
                                      />
                                    </label>
                                  </div>
                                </div>
                                <div>
                                  <div className="form-control">
                                    <label className="label">
                                      <span className="label-text text-lg font-semibold">
                                        Description
                                      </span>
                                    </label>
                                    <label className="input-group">
                                      <textarea
                                        {...register("description")}
                                        required
                                        name="description"
                                        className="textarea py-10 form-border textarea-bordered w-full"
                                      ></textarea>
                                    </label>
                                  </div>
                                </div>
                                <div className="grid md:grid-cols-2 grid-cols-1 gap-4  mb-5">
                                  <div className="form-control">
                                    <label className="label ">
                                      <span className="label-text text-lg font-semibold">
                                        Address
                                      </span>
                                    </label>
                                    <label className="input-group ">
                                      <input
                                        {...register("address")}
                                        type="text"
                                        placeholder="Add your address"
                                        className="input form-border input-bordered w-full"
                                      />
                                    </label>
                                  </div>
                                  <div className="form-control">
                                    <label className="label ">
                                      <span className="label-text text-lg font-semibold">
                                        Zip code *
                                      </span>
                                    </label>
                                    <label className="input-group ">
                                      <input
                                        {...register("zipCode")}
                                        type="text"
                                        placeholder="Add your zip code"
                                        className="input form-border input-bordered w-full"
                                      />
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className=" flex flex-row justify-between items-center mb-4">
                                <div onClick={handleGoStartForm}>
                                  <ButtonBlue
                                    titleBlue={`Previous`}
                                  ></ButtonBlue>
                                </div>
                                <div onClick={handleGoUploadFile}>
                                  <ButtonBlue
                                    titleBlue={`Next`}
                                  >
                                  </ButtonBlue>
                                </div>
                              </div>
                            </div>
                        }
                      </div>
                      :
                      <div>
                        <div className="form-control">
                          <label className="label ">
                            <span className="label-text text-lg font-semibold">
                              Address
                            </span>
                          </label>
                          <label className="input-group ">
                            <input
                              {...register("imgUrl")}
                              type="text"
                              placeholder="Add your image url"
                              className="input form-border input-bordered w-full h-36"
                            />
                          </label>
                        </div>
                        <div className=" flex flex-row justify-between items-center mb-4" type="submit">
                          <div onClick={handleBackProfileInfo}>
                            <ButtonBlue
                              titleBlue={`Previous`}
                            ></ButtonBlue>
                          </div>
                          <div type="submit">
                            <ButtonBlue
                              titleBlue={`Next`}
                            >
                            </ButtonBlue>
                          </div>
                        </div>
                      </div>
                  }
                </div>
                {/* Profile section */}

              </form>
            </div>
          </div >
        </section >
      </div >
    </>
  );
};

export default OwnerRequestForm;
