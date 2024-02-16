// This AddProperties page design by Sadia
// And AddProperties post crud operation added by sojib
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useProperties from "../../../Hooks/useProperties";
import Select from 'react-select';
import { FaPhotoVideo } from "react-icons/fa";
import { useForm } from "react-hook-form";
import ButtonRed from "../../../MainLayout/Shared/buttons/Red/ButtonRed";
import ButtonBlue from "../../../MainLayout/Shared/buttons/Blue/ButtonBlue";
// import { colourOptions } from '../data';


const AddProperties = () => {
  const [, refetch] = useProperties();
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const image_hosting_api =
    "https://api.imgbb.com/1/upload?key=041c88632a7cf1ed57bab64c7c558177";

  // This code from line 19 to line 130 is done by [ sojib ] for react select the option and value of the select field for property tags, property featuries and image drag drop.

  // multiple tags and features functionality [25 to 78]
  const [tagValue, setTagValue] = useState([]);
  const newTags = [];
  for (let i = 0; i < tagValue.length; i++) {
    newTags.push(tagValue[i].value)
  }
  // console.log(newTags)
  const [featureValue, setFeatureValue] = useState([])
  const newFeatures = [];
  for (let i = 0; i < featureValue.length; i++) {
    newFeatures.push(featureValue[i].value);
  }
  // console.log(newFeatures)
  const featureOptions = [
    { value: "balcony", label: "Balcony" },
    { value: "Modern kitchen", label: "Modern kitchen" },
    { value: "pet-friendly", label: "Pet-friendly" },
    { value: "rooftop terrace", label: "Rooftop terrace" },
    { value: "Security", label: "Security" },
    { value: "gym", label: "Gym" },
    { value: "Pool", label: "Pool" },
    { value: "Fireplace", label: "Fireplace" },
    { value: "Garden", label: "Garden" },
    { value: "Walking distance to village", label: "Walking distance to village" },
    { value: "olive grove", label: "Olive grove" },
    { value: "Swimming pool", label: "Swimming pool" },
  ]
  const tagsOptions = [
    { value: "Historic", label: "Historic" },
    { value: "Luxury", label: "Luxury" },
    { value: "Tranquil", label: "Tranquil" },
    { value: "wine lover's dream", label: "wine lover's dream" },
    { value: "contemporary", label: "contemporary" },
    { value: "urban", label: "urban" },
    { value: "luxurious", label: "luxurious" },
    { value: "prime location", label: "prime location" },
    { value: "opulent", label: "opulent" },
    { value: "exclusive", label: "exclusive" },
    { value: "private retreat", label: "private retreat" },
    { value: "luxury living", label: "luxury living" },
    { value: "tech-savvy", label: "tech-savvy" },
    { value: "modern", label: "modern" },
    { value: "urban oasis", label: "urban oasis" },
    { value: "high-tech living", label: "high-tech living" }
  ]
  const handleValueTags = (tagValue) => {
    setTagValue(tagValue)
  }

  const handleValueFeature = (featureValue) => {
    setFeatureValue(featureValue)
  }


  // property adnd floor plan images drop and file input functionality [81 to 139]
  const [images, setImages] = useState([])
  const [showImages, setShowImages] = useState([])
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef(null)
  // console.log(showImages)

  const onFileSelect = (event) => {
    event.preventDefault();
    const files = event.target.files;
    setImages(files[0])
    console.log(files)

    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split('/')[0] !== 'image') continue;
      if (!showImages.some((e) => e.name === files[i].name)) {
        setShowImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i])
          }
        ])
      }
    }
  }
  function selectFiles() {
    fileInputRef.current.click();
  }
  const onDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true)
    event.dataTransfer.dropEffect = "copy"
  }
  const onDragLeave = (event) => {
    event.preventDefault();
    setIsDragging(false)
  }
  const onDrop = async (event) => {
    event.preventDefault();
    setIsDragging(false)
    const files = event.dataTransfer.files;
    setImages(files[0])
    // TODO: This comment by sojib for doing multiple drag and drop  image hosting please don't uncomment it
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split('/')[0] !== 'image') continue;
      if (!showImages.some((e) => e.name === files[i].name)) {
        setShowImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i])
          }
        ])
      }
    }
  }

  const [floorImages, setFloorImages] = useState([])
  const [showFloorImages, setShowFloorImages] = useState([])
  const [isFloorDragging, setIsFloorDragging] = useState(false)
  const fileFloorInputRef = useRef(null)
  // console.log(showFloorImages)

  const onFloorFileSelect = (event) => {
    event.preventDefault();
    const files = event.target.files;
    setFloorImages(files[0])
    console.log(files)
    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split('/')[0] !== 'image') continue;
      if (!showFloorImages.some((e) => e.name === files[i].name)) {
        setShowFloorImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i])
          }
        ])
      }
    }
  }
  function selectFloorFiles() {
    fileFloorInputRef.current.click();
  }
  const onFloorDragOver = (event) => {
    event.preventDefault();
    setIsFloorDragging(true)
    event.dataTransfer.dropEffect = "copy"
  }
  const onFloorDragLeave = (event) => {
    event.preventDefault();
    setIsFloorDragging(false)
  }
  const onFloorDrop = async (event) => {
    event.preventDefault();
    setIsFloorDragging(false)
    const files = event.dataTransfer.files;
    setFloorImages(files[0])
    // TODO: This comment by sojib for doing multiple drag and drop  image hosting please don't uncomment it
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split('/')[0] !== 'image') continue;
      if (!showFloorImages.some((e) => e.name === files[i].name)) {
        setShowFloorImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i])
          }
        ])
      }
    }
  }

  // This react hook onsubmit added by [sojib] and all input file update into react hook file
  const {
    register,
    handleSubmit,
    reset,
  } = useForm()
  const onSubmit = async (data) => {
    console.log(data)
    const imageFile = { image: images };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    const img = res.data.data.url;
    console.log(img)
    if (res.data) {
      // console.log(res.data.data)
      setImages(img)
    }

    const imageFloorFile = { image: floorImages };
    const resfloor = await axiosPublic.post(image_hosting_api, imageFloorFile, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    const floorPlanIMG = resfloor.data.data.url;
    console.log(floorPlanIMG)
    if (res.data) {
      // console.log(res.data.data)
      setFloorImages(floorPlanIMG)
    }

    const newProperty = {
      property_info: {
        owner_details: {
          owner_name: user.displayName,
          owner_img: user.photoURL,
          owner_email: user.email,
        },
        ownership_duration: data.ownership,
        property_for: data.status,
        verify_status: "pending",  // Ex: [verify_status: "pending" / "verified" / "declined"] => This status is changed from boolean value to string for managing the property verification feature from the admin dashboard. -by Tanbir
        property_img: img,
        property_title: data.title,
        property_category: data.property,
        property_description: data.description,
        property_details: {
          property_id: data.id,
          property_price: data.price,
          property_type: data.property,
          property_status: data.propertyStatus,
          bedroom: data.rooms,
          bath: data.baths,
          balcony: data.balcony,
          garages: data.garage,
          sqf: data.squareFeet,
          built: data.ate,
          floor_plans: floorPlanIMG,
          property_video: data.video,
          property_features: newFeatures,
          property_tags: newTags
        },
        property_location: {
          address: {
            street: data.area,
            city: data.city,
            state: data.state,
            country: data.country
          }
        }
      }
    };
    console.log(newProperty);
    axiosPublic.post("/properties", newProperty)
      .then(res => {
        console.log(res.data)
        if (res.data) {
          Swal.fire(`Hey ${user.displayName}, Your property added successfully`)
          refetch();
          setShowImages([])
          setShowFloorImages([])
          reset()
        }
      })
  }

  const handleReset = () => {
    reset()
    setShowImages([])
    setShowFloorImages([])
    refetch()
  }

  return (
    <div>
      <section className="py-1 bg-[#f3f3f3] w-full">
        <div className=" bg-white w-[93%] mx-auto shadow-md pl-6 py-3 mt-4 rounded-lg">
          <ol className=" flex items-center gap-1">
            <p>Property</p>
            <p className=" font-bold text-[#002172]">/ Add property</p>
          </ol>
        </div>
        <div className="w-[93%] bg-white  px-6 mx-auto mt-6 mb-20 shadow-lg rounded-lg">
          <div className="relative flex flex-col  break-words w-full mb-6 bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  Add Property
                </h6>
              </div>
            </div>
            <hr className="mb-5"></hr>
            <form className="px-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="md:grid grid-cols-2 gap-4  mb-5">
                <div className="form-control">
                  <label className="label ">
                    <span className="label-text text-lg font-semibold">
                      Property Title
                    </span>
                  </label>
                  <label className="input-group ">
                    <input
                      {...register("title")}
                      type="text"
                      placeholder="Add your property title"
                      className="input form-border input-bordered w-full"
                    />
                  </label>
                </div>
                <div className="form-control    ">
                  <label className="label ">
                    <span className="label-text text-lg font-semibold">
                      Property ID
                    </span>
                  </label>
                  <label className="input-group ">
                    <input
                      {...register("id")}
                      type="text"
                      placeholder="Add your property id"
                      name="id"
                      className="input form-border input-bordered w-full"
                    />
                  </label>
                </div>
              </div>
              <div className="md:grid grid-cols-3 gap-4 mb-5">
                <div className="form-control w-full  ">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Property category
                    </span>
                  </label>
                  <label className="">
                    <select
                      {...register("property")}
                      name="property"
                      required
                      className="select select-bordered w-full"
                    >
                      <option value="Apartment"> Apartment</option>
                      <option value="Commercial"> Commercial</option>
                      <option value="Residential"> Residential</option>
                    </select>
                  </label>
                </div>

                <div className="form-control w-full  ">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Property For
                    </span>
                  </label>
                  <label className="">
                    <select
                      {...register("status")}
                      name="status"
                      required
                      className="select select-bordered w-full"
                    >
                      <option value="rent"> Rent</option>
                      <option value="sale"> Sale</option>
                    </select>
                  </label>
                </div>

                <div className="form-control">
                  <label className="label ">
                    <span className="label-text text-lg font-semibold">
                      Property Price
                    </span>
                  </label>
                  <label className="input-group ">
                    <input
                      {...register("price")}
                      type="number"
                      placeholder="$"
                      name="price"
                      className="input form-border input-bordered w-full"
                    />
                  </label>
                </div>
              </div>
              <div className="md:grid grid-cols-3 gap-4 mb-5">
                <div className="form-control w-full  ">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Bed Room
                    </span>
                  </label>
                  <label className="">
                    <select
                      {...register("rooms")}
                      name="rooms"
                      required
                      className="select select-bordered w-full"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                  </label>
                </div>
                <div className="form-control w-full  ">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Property Status
                    </span>
                  </label>
                  <label className="">
                    <select
                      {...register("propertyStatus")}
                      name="propertyStatus"
                      required
                      className="select select-bordered w-full"
                    >
                      <option value="Available">Available</option>
                      <option value="Not Available">Not Available</option>
                    </select>
                  </label>
                </div>
                <div className="form-control w-full  ">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Bathroom
                    </span>
                  </label>
                  <label className="">
                    <select
                      {...register("baths")}
                      name="baths"
                      required
                      className="select select-bordered w-full"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                  </label>
                </div>
              </div>
              <div className="md:grid grid-cols-3 gap-4 mb-5">
                <div className="form-control w-full  ">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Balcony
                    </span>
                  </label>
                  <label className="">
                    <select
                      {...register("balcony")}
                      name="balcony"
                      required
                      className="select select-bordered w-full"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </label>
                </div>
                <div className="form-control w-full  ">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Garage
                    </span>
                  </label>
                  <label className="">
                    <select
                      {...register("garage")}
                      name="garage"
                      required
                      className="select select-bordered w-full"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </label>
                </div>
                <div className="form-control w-full  ">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Ownership Duration
                    </span>
                  </label>
                  <label className="">
                    <select
                      {...register("ownership")}
                      name="ownership"
                      required
                      className="select select-bordered w-full"
                    >
                      <option value="Weekly">Weekly</option>
                      <option value="Monthly">Monthly</option>
                      <option value="Annually">Annually</option>
                      <option value="Permanent">Permanent</option>
                    </select>
                  </label>
                </div>
              </div>
              <div className="md:grid grid-cols-3 gap-4 mb-5">
                <div className="form-control    ">
                  <label className="label ">
                    <span className="label-text text-lg font-semibold">
                      Property Build Date
                    </span>
                  </label>
                  <label className="input-group ">
                    <input
                      {...register("date")}
                      type="date"
                      name="date"
                      className="input form-border input-bordered w-full"
                    />
                  </label>
                </div>
                <div className="form-control    ">
                  <label className="label ">
                    <span className="label-text text-lg font-semibold">
                      Square Feet
                    </span>
                  </label>
                  <label className="input-group ">
                    <input
                      {...register("squareFeet")}
                      type="number"
                      placeholder="2500"
                      name="squareFeet"
                      className="input form-border input-bordered w-full"
                    />
                  </label>
                </div>
                <div className="form-control    ">
                  <label className="label ">
                    <span className="label-text text-lg font-semibold">
                      Property Tags
                    </span>
                  </label>
                  <label className="input-group ">
                    {/* This select field implemented by sojib for find multiple tags*/}
                    <Select
                      {...register("tags")}
                      value={tagValue}
                      onChange={handleValueTags}
                      placeholder={`Select your property tags`}
                      isMulti
                      name="tags"
                      options={tagsOptions}
                      className="basic-multi-select w-full"
                      styles={{
                        control: (baseStyles) => ({
                          ...baseStyles,
                          padding: "5px",
                          borderRadius: "8px"
                        }),
                      }}
                    />
                  </label>
                </div>
              </div>
              <div className="md:grid grid-cols-3 gap-4 mb-5">
                <div className="form-control    ">
                  <label className="label ">
                    <span className="label-text text-lg font-semibold">
                      Street
                    </span>
                  </label>
                  <label className="input-group ">
                    <input
                      {...register("area")}
                      type="text"
                      placeholder="ex. 123 Main Street"
                      name="area"
                      className="input form-border input-bordered w-full"
                    />
                  </label>
                </div>
                <div className="form-control    ">
                  <label className="label ">
                    <span className="label-text text-lg font-semibold">
                      City
                    </span>
                  </label>
                  <label className="input-group ">
                    <input
                      {...register("city")}
                      type="text"
                      placeholder="ex. Any Town"
                      name="city"
                      className="input form-border input-bordered w-full"
                    />
                  </label>
                </div>

                <div className="form-control w-full mb-5">
                  <label className="label ">
                    <span className="label-text text-lg font-semibold">
                      Property Video
                    </span>
                  </label>
                  <label className="input-group ">
                    <input
                      {...register("video")}
                      type="text"
                      placeholder="Add your video url"
                      name="video"
                      className="input form-border input-bordered w-full"
                    />
                  </label>
                </div>
              </div>
              <div className="md:grid grid-cols-3 gap-4 mb-5">
                <div className="form-control    ">
                  <label className="label ">
                    <span className="label-text text-lg font-semibold">
                      State
                    </span>
                  </label>
                  <label className="input-group ">
                    <input
                      {...register("state")}
                      type="text"
                      placeholder="ex. CA"
                      name="state"
                      className="input form-border input-bordered w-full"
                    />
                  </label>
                </div>
                <div className="form-control    ">
                  <label className="label ">
                    <span className="label-text text-lg font-semibold">
                      Country
                    </span>
                  </label>
                  <label className="input-group ">
                    <input
                      {...register("country")}
                      type="text"
                      placeholder="ex. USA"
                      name="country"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>

                <div className="form-control    ">
                  <label className="label ">
                    <span className="label-text text-lg font-semibold">
                      Property Feature
                    </span>
                  </label>
                  <label className="input-group ">
                    {/* This select field implemented by sojib for find multiple property features */}
                    <Select
                      {...register("feature")}
                      value={featureValue}
                      onChange={handleValueFeature}
                      placeholder={`Select your property tags`}
                      isMulti
                      name="feature"
                      options={featureOptions}
                      className="basic-multi-select w-full"
                      styles={{
                        control: (baseStyles) => ({
                          ...baseStyles,
                          padding: "5px",
                          borderRadius: "8px"
                        }),
                      }}
                    />
                  </label>
                </div>
              </div>
              <div className=" flex md:flex-row flex-col justify-between items-start mb-5 gap-5">
                {/* Property Image input field must be required */}
                <div className="form-control md:w-1/2 w-full">
                  <label className="label ">
                    <span className="label-text text-lg font-semibold">
                      Property Image
                    </span>
                  </label>
                  {/* this field updated to drag and drop option by sojib [ 632 to 663 line] */}
                  {showImages[0] ?
                    <div className=" flex justify-center flex-wrap items-center gap-2 border-2 rounded-md p-3">
                      {
                        showImages.map((item, index) =>
                          <div key={index}>
                            <img className=" w-[100px] h-[100px]" src={item.url} alt="Drop img" />
                          </div>)
                      }
                    </div> :
                    <div className=" border-2 rounded-md p-3 flex flex-col justify-center items-center h-[170px]">
                      <label className="drag-area text-center flex flex-col items-center" onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
                        {isDragging ? (<span>Drop imag here</span>) : (<>
                          <span role="button" onClick={selectFiles}>
                            <FaPhotoVideo className="text-7xl font-bold"></FaPhotoVideo>
                          </span>
                        </>)}
                        <div className="">
                          <p className=" font-bold">Drop here files or click to upload Properties images</p>
                          <input
                            {...register("files")}
                            type="file"
                            placeholder="Drag and drop your image or url"
                            name="files"
                            className="file-input w-full h-[140px]"
                            multiple
                            ref={fileInputRef}
                            onChange={onFileSelect}
                            style={{ display: 'none' }}
                          />
                        </div>
                      </label>
                    </div>
                  }
                </div>
                {/* Property Floor plans image input Field */}
                <div className="form-control md:w-1/2 w-full">
                  <label className="label ">
                    <span className="label-text text-lg font-semibold">
                      Floor plan image
                    </span>
                  </label>
                  {/* this field updated to drag and drop option by sojib [ 632 to 663 line] */}
                  {showFloorImages[0] ?
                    <div className=" flex justify-center flex-wrap items-center gap-2 border-2 rounded-md p-3 ">
                      {
                        showFloorImages.map((item, index) =>
                          <div key={index}>
                            <img className=" w-[100px] h-[100px]" src={item.url} alt="Drop img" />
                          </div>)
                      }
                    </div> :
                    <div className=" border-2 rounded-md p-3 flex flex-col justify-center items-center h-[170px]">
                      <label className="drag-area text-center flex flex-col items-center" onDragOver={onFloorDragOver} onDragLeave={onFloorDragLeave} onDrop={onFloorDrop}>
                        {isFloorDragging ? (<span>Drop imag here</span>) : (<>
                          <span role="button" onClick={selectFloorFiles}>
                            <FaPhotoVideo className="text-7xl font-bold"></FaPhotoVideo>
                          </span>
                        </>)}
                        <div className="">
                          <p className=" font-bold">Drop here files or click to upload Floor plan images</p>
                          <input
                            {...register("filesFloor")}
                            type="file"
                            placeholder="Drag and drop your image or url"
                            name="files"
                            className="file-input w-full h-[140px]"
                            multiple
                            ref={fileFloorInputRef}
                            onChange={onFloorFileSelect}
                            style={{ display: 'none' }}
                            required={true}
                          />
                        </div>
                      </label>
                    </div>
                  }
                </div>
              </div>
              <div className="  mb-2">
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
                      className="textarea py-8 form-border textarea-bordered w-full"
                    ></textarea>
                  </label>
                </div>
              </div>
              <div className=" flex items-center mb-8 mt-5 gap-2">
                <button
                  type="submit"
                >
                  <ButtonBlue
                    titleBlue={`Submit`}
                  ></ButtonBlue>
                </button>
                <button onClick={handleReset}>
                  <ButtonRed
                    titleRed={`Clear`}>
                  </ButtonRed>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddProperties;