// This ownerRequestForm full make and All functionality also responsive added by [sojib]
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import ButtonBlue from "../../../MainLayout/Shared/buttons/Blue/ButtonBlue";
import { FaPhotoVideo } from "react-icons/fa";
import { useRef, useState } from "react";

const OwnerRequestForm = () => {
  const [profileNext, setProfileNext] = useState(true);
  const [uploadForm, setUploadForm] = useState(true);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const image_hosting_api =
    "https://api.imgbb.com/1/upload?key=041c88632a7cf1ed57bab64c7c558177";
  const [images, setImages] = useState([]);
  const [showImages, setShowImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  console.log(showImages);

  // onFileSelect, SelectFiles, OnDragOver, OnDragLeave, onDrop this functions are used for input fils , drag and drop features
  const onFileSelect = (event) => {
    event.preventDefault();
    const files = event.target.files;
    setImages(files[0]);
    console.log(files);

    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!showImages.some((e) => e.name === files[i].name)) {
        setShowImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  };
  function selectFiles() {
    fileInputRef.current.click();
  }
  const onDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
    event.dataTransfer.dropEffect = "copy";
  };
  const onDragLeave = (event) => {
    event.preventDefault();
    setIsDragging(false);
  };
  const onDrop = async (event) => {
    event.preventDefault();
    setIsDragging(false);
    const files = event.dataTransfer.files;
    setImages(files[0]);
    // DO: This comment by sojib for doing multiple drag and drop  image hosting please dont uncomment it
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!showImages.some((e) => e.name === files[i].name)) {
        setShowImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  };

  // handleGoProfileInfo, handleGoUploadFile, handleBackStartForm, handleBackProfileInfo This four functions are functions of moving from one form to another by [sojib]
  const handleGoProfileInfo = () => {
    setProfileNext(false);
  };
  const handleGoUploadFile = () => {
    setUploadForm(false);
  };
  const handleBackStartForm = () => {
    setProfileNext(true);
  };
  const handleBackProfileInfo = () => {
    setUploadForm(true);
    setProfileNext(false);
  };

  const { register, reset, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    // image hosting post api
    const imageFile = { image: images };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    const ownerImg = res.data.data.url;
    // console.log(img)
    if (res.data) {
      console.log(res.data.data);
      setImages(ownerImg);
    }

    const ownerData = {
      firstName: data.firstName,
      lastName: data.lastName,
      number: data.number,
      ownerEmail: data.email,
      ownerImg: ownerImg,
      profession: data.profession,
      facebook: data.facebook,
      twitter: data.twitter,
      linkedin: data.linkedin,
      description: data.description,
      address: data.address,
      zipCode: data.zipCode,

      ownerStatus: false,
    };
    // console.log("ownerform data", ownerData)
    // TO DO : now this time i direct passed data if after we need add to owner then we will change it
    axiosSecure.post("/ownerRequest", ownerData).then((response) => {
      console.log(response);
      // This extra condition was added by [Sajib] because _id comes from Mongoose
      if (response.data.insertedId || response.data._id) {
        Swal.fire({
          title: `Your application will be reviewed soon.`,
          timer: 2000,
          color: "#002172",
          showConfirmButton: true,
          icon: "success",
        });
        reset();
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
      <div>
        <section className="py-1 bg-[#f3f3f3] w-full  min-h-screen">
          {/* header section */}
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
              <hr></hr>
              {/* Form heading section */}
              <div className=" my-9 flex md:flex-row flex-col justify-start md:items-center items-start gap-8">
                {/* get started heading */}
                {profileNext && uploadForm ? (
                  <div className=" flex items-center gap-4">
                    <p className=" text-3xl font-bold h-16 w-16 rounded-full items-center justify-center flex flex-col bg-[#002172] text-center text-white">
                      1
                    </p>
                    <div>
                      <h2 className=" text-xl font-bold text-[#002172]">
                        Get Started
                      </h2>
                      <p className=" font-bold text-[#002172]">
                        Account information
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className=" flex items-center gap-4">
                    <p className=" text-3xl font-bold h-16 w-16 rounded-full items-center justify-center flex flex-col bg-[#f3f3f3] text-center">
                      1
                    </p>
                    <div>
                      <h2 className=" text-xl font-bold">Get Started</h2>
                      <p className=" font-bold text-[#a8a2a2]">
                        Account information
                      </p>
                    </div>
                  </div>
                )}
                {
                  // Profile Info heading
                  !profileNext && uploadForm ? (
                    <div className=" flex items-center gap-4">
                      <p className=" text-3xl font-bold h-16 w-16 rounded-full items-center justify-center flex flex-col bg-[#002172] text-center text-white">
                        2
                      </p>
                      <div>
                        <h2 className=" text-xl font-bold text-[#002172]">
                          Profile Info
                        </h2>
                        <p className=" font-bold text-[#002172]">
                          Add profile info
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className=" flex items-center gap-4">
                      <p className=" text-3xl font-bold h-16 w-16 rounded-full items-center justify-center flex flex-col bg-[#f3f3f3] text-center">
                        2
                      </p>
                      <div>
                        <h2 className=" text-xl font-bold">Profile Info</h2>
                        <p className=" font-bold text-[#a8a2a2]">
                          Add profile info
                        </p>
                      </div>
                    </div>
                  )
                }
                {
                  // Upload heading
                  uploadForm ? (
                    <div className=" flex items-center gap-4">
                      <p className=" text-3xl font-bold h-16 w-16 rounded-full items-center justify-center flex flex-col bg-[#f3f3f3] text-center">
                        3
                      </p>
                      <div>
                        <h2 className=" text-xl font-bold">Upload files</h2>
                        <p className=" font-bold text-[#a8a2a2]">
                          Successfully submitted
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className=" flex items-center gap-4">
                      <p className=" text-3xl font-bold h-16 w-16 rounded-full items-center justify-center flex flex-col bg-[#002172] text-center text-white">
                        3
                      </p>
                      <div>
                        <h2 className=" text-xl font-bold text-[#002172]">
                          Upload files
                        </h2>
                        <p className=" font-bold text-[#002172]">
                          Successfully submitted
                        </p>
                      </div>
                    </div>
                  )
                }
              </div>
              <hr className="mb-10"></hr>
              {/* Form section */}
              <form className="px-4" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  {uploadForm ? (
                    <div>
                      {profileNext ? (
                        // This is get started field section
                        <div>
                          <div className="grid md:grid-cols-3 grid-cols-1 gap-4  mb-5">
                            {/* first name field */}
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
                                  required
                                  placeholder="Add your first name"
                                  className="input form-border input-bordered w-full"
                                />
                              </label>
                            </div>
                            {/* last name field */}
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
                                  required
                                  placeholder="Add your last name"
                                  className="input form-border input-bordered w-full"
                                />
                              </label>
                            </div>
                            {/* email field */}
                            <div className="form-control">
                              <label className="label ">
                                <span className="label-text text-lg font-semibold">
                                  Email Address
                                </span>
                              </label>
                              <label className="input-group ">
                                <input
                                  {...register("email")}
                                  defaultValue={user?.email}
                                  readOnly
                                  type="text"
                                  placeholder="Add your email"
                                  className="input form-border input-bordered w-full"
                                />
                              </label>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 grid-cols-1 gap-4  mb-5">
                            {/* phone number field */}
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
                                  required
                                  placeholder="Add your phone number"
                                  className="input form-border input-bordered w-full"
                                />
                              </label>
                            </div>
                            {/* profession field*/}
                            <div className="form-control">
                              <label className="label ">
                                <span className="label-text text-lg font-semibold">
                                  Profession
                                </span>
                              </label>
                              <label className="input-group ">
                                <input
                                  {...register("profession")}
                                  type="text"
                                  required
                                  className="input form-border input-bordered w-full"
                                />
                              </label>
                            </div>
                          </div>
                          {/* This is button part of ProfileInfo section for go to ProfileInfo form */}
                          <div
                            className=" flex flex-row justify-end items-center mb-8"
                            onClick={handleGoProfileInfo}
                          >
                            <ButtonBlue titleBlue={`Next`} />
                          </div>
                        </div>
                      ) : (
                        // This is profile Info field section
                        <div>
                          <div>
                            <div className="flex lg:flex-row md:flex-col flex-col items-center gap-4  mb-5">
                              <div className=" flex md:flex-row flex-col items-center gap-4 lg:w-[67%] md:w-full w-full">
                                {/* facebook link */}
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
                                {/* twitter link */}
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
                              {/* linkedin link */}
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
                              {/* description filed */}
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
                                    minLength={20}
                                  ></textarea>
                                </label>
                              </div>
                            </div>
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 ">
                              {/* address filed */}
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
                              {/* zipCode filed */}
                              <div className="form-control">
                                <label className="label ">
                                  <span className="label-text text-lg font-semibold">
                                    Zip code *
                                  </span>
                                </label>
                                <label className="input-group ">
                                  <input
                                    {...register("zipCode")}
                                    type="number"
                                    placeholder="Add your zip code"
                                    className="input form-border input-bordered w-full"
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
                          {/* This is button part of ProfileInfo section for back start form and go to uplad form request */}
                          <div className=" flex flex-row justify-between items-center mt-6 mb-8">
                            <div onClick={handleBackStartForm}>
                              <ButtonBlue titleBlue={`Previous`}></ButtonBlue>
                            </div>
                            <div onClick={handleGoUploadFile}>
                              <ButtonBlue titleBlue={`Next`}></ButtonBlue>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    // This is upload field section
                    <div>
                      {/* Image upload field */}
                      <div className="form-control">
                        <label className="label ">
                          <span className="label-text text-lg font-semibold">
                            Your image *
                          </span>
                        </label>
                        {showImages[0] ? (
                          <div className=" flex justify-center flex-wrap items-center gap-2 border-2 rounded-md py-6">
                            {showImages.map((item, index) => (
                              <div key={index}>
                                <img
                                  className=" w-[100px] h-[100px]"
                                  src={item.url}
                                  alt="Drop img"
                                />
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div
                            className=" border-2 rounded-md p-3 flex flex-col justify-center items-center h-[170px]"
                            onDragOver={onDragOver}
                            onDragLeave={onDragLeave}
                            onDrop={onDrop}
                          >
                            <label className="drag-area text-center flex flex-col items-center">
                              {isDragging ? (
                                <span>Drop imag here</span>
                              ) : (
                                <>
                                  <span role="button" onClick={selectFiles}>
                                    <FaPhotoVideo className="text-7xl font-bold"></FaPhotoVideo>
                                  </span>
                                </>
                              )}
                              <div className="">
                                <p className=" font-bold">
                                  Drop here files or click to upload your images
                                </p>
                                <input
                                  {...register("files")}
                                  type="file"
                                  placeholder="Drag and drop your image or url"
                                  name="files"
                                  className="file-input w-full h-[140px]"
                                  multiple
                                  ref={fileInputRef}
                                  onChange={onFileSelect}
                                  style={{ display: "none" }}
                                />
                              </div>
                            </label>
                          </div>
                        )}
                      </div>
                      {/* This is button part of upload field section for back profileInfo form and submit request */}
                      <div
                        className=" flex flex-row justify-between items-center my-6"
                        type="submit"
                      >
                        <div onClick={handleBackProfileInfo}>
                          <ButtonBlue titleBlue={`Previous`}></ButtonBlue>
                        </div>
                        <div type="submit">
                          <ButtonBlue titleBlue={`Submit`}></ButtonBlue>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OwnerRequestForm;
