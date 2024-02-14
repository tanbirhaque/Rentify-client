// This AddProperties page desgin by Sadia
// And AddProperties post crud oparetion added by sojib
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useProperties from "../../../Hooks/useProperties";
import Select from "react-select";
// import { colourOptions } from '../data';

const AddProperties = () => {
  const [, refetch] = useProperties();
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const image_hosting_api =
    "https://api.imgbb.com/1/upload?key=041c88632a7cf1ed57bab64c7c558177";

  // This code from line 19 to line 130 is done by [ sojib ] for react select the option and value of the select field for property tags, property featuries and image drag drop.
  const [tagValue, setTagValue] = useState([]);
  const newTags = [];
  for (let i = 0; i < tagValue.length; i++) {
    newTags.push(tagValue[i].value);
  }
  // console.log(newTags)
  const [featureValue, setFeatureValue] = useState([]);
  const newFeaturs = [];
  for (let i = 0; i < featureValue.length; i++) {
    newFeaturs.push(featureValue[i].value);
  }
  // console.log(newFeaturs)
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
    {
      value: "Walking distance to village",
      label: "Walking distance to village",
    },
    { value: "olive grove", label: "Olive grove" },
    { value: "Swimming pool", label: "Swimming pool" },
  ];

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
    { value: "high-tech living", label: "high-tech living" },
  ];

  const handlevaluetags = (tagValue) => {
    setTagValue(tagValue);
  };

  const handleValueFeature = (featureValue) => {
    setFeatureValue(featureValue);
  };

  const [images, setImages] = useState([]);
  const [isDraging, setisDreaging] = useState(false);
  const fileInputRef = useRef(null);
  console.log(typeof images);

  const onFileSelect = (event) => {
    event.preventDefault();
    const files = event.target.files;
    setImages(files[0]);
    // console.log(files)
    // if (files.length === 0) return;
    // for (let i = 0; i < files.length; i++) {
    //   if (files[i].type.split('/')[0] !== 'image') continue;
    //   if (!images.some((e) => e.name === files[i].name)) {
    //     setImages((prevImages) => [
    //       ...prevImages,
    //       {
    //         name: files[i].name,
    //         url: URL.createObjectURL(files[i])
    //       }
    //     ])
    //   }
    // }
  };

  function selectFiles() {
    fileInputRef.current.click();
  }
  const onDragOver = (event) => {
    event.preventDefault();
    setisDreaging(true);
    event.dataTransfer.dropEffect = "copy";
  };
  const onDragLeave = (event) => {
    event.preventDefault();
    setisDreaging(false);
  };

  const onDrop = async (event) => {
    event.preventDefault();
    setisDreaging(false);
    const files = event.dataTransfer.files;
    setImages(files[0]);
    // TODO: This comment by sojib for doing multiple drag and drop  image hosting please dont uncomment it
    // for (let i = 0; i < files.length; i++) {
    //   if (files[i].type.split('/')[0] !== 'image') continue;
    //   if (!images.some((e) => e.name === files[i].name)) {
    //     setImages((prevImages) => [
    //       ...prevImages,
    //       {
    //         name: files[i].name,
    //         url: URL.createObjectURL(files[i])
    //       }
    //     ])
    //   }
    // }
  };

  const handleAddProperty = async (e) => {
    e.preventDefault();
    const form = e.target;
    const property = form.property.value;
    const rooms = form.rooms.value;
    const baths = form.baths.value;
    const price = form.price.value;
    const area = form.area.value;
    const status = form.status.value;
    const sqprice = form.sqprice.value;
    const description = form.description.value;
    const balcony = form.balcony.value;
    const garage = form.garage.value;
    const prostatus = form.prostatus.value;
    const ownership = form.ownership.value;
    const date = form.date.value;
    const tags = newTags;
    const city = form.city.value;
    const state = form.state.value;
    const country = form.country.value;
    const feature = newFeaturs;
    const title = form.title.value;
    const video = form.video.value;
    const floor = form.floor.value;
    const id = form.id.value;
    const imageFile = { image: images };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    const img = res.data.data.url;
    if (res.data) {
      console.log(res.data.data);
      setImages(img);
    }
    console.log(res.data, img);
    const newProperty = {
      property_info: {
        owner_details: {
          owner_name: user.displayName,
          owner_img: user.photoURL,
          owner_email: user.email,
        },
        ownership_duration: ownership,
        property_for: status,
        verify_status: false, // This object property is added for managing the verification feature from the owner dashboard as [verified or 'Non Verified'] >>> Changed 'property_status' to 'verify_status' status. -by Tanbir
        property_img: img,
        property_title: title,
        property_category: property,
        property_description: description,
        property_details: {
          property_id: id,
          property_price: price,
          property_type: property,
          property_status: prostatus,
          bedroom: rooms,
          bath: baths,
          balcony: balcony,
          garages: garage,
          sqf: sqprice,
          built: date,
          floor_plans: floor,
          property_video: video,
          property_features: feature,
          property_tags: tags,
        },
        property_location: {
          address: {
            street: area,
            city: city,
            state: state,
            country: country,
          },
        },
      },
    };
    axiosPublic.post("/properties", newProperty).then((res) => {
      // console.log(res.data)
      if (res.data) {
        Swal.fire(`Hey ${user.displayName}, Your property added successfully`);
        refetch();
      }
    });
    console.log(newProperty);
  };

  return (
    <div>
      <section className="py-1 bg-blueGray-50 w-[1350px]">
        <div className="w-full  px-4 mx-auto mt-6">
          <div className="relative flex flex-col  break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  Add Property
                </h6>
              </div>
            </div>
            <hr className="mb-5"></hr>
            <form className="px-4" onSubmit={handleAddProperty}>
              <div className="md:grid grid-cols-2 gap-4  mb-8">
                <div className="form-control">
                  <label className="label ">
                    <span className="label-text text-lg font-semibold">
                      Property Title
                    </span>
                  </label>
                  <label className="input-group ">
                    <input
                      type="text"
                      placeholder="Add your property title"
                      name="title"
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
                      type="text"
                      placeholder="Add your property id"
                      name="id"
                      className="input form-border input-bordered w-full"
                    />
                  </label>
                </div>
              </div>
              <div className="md:grid grid-cols-3 gap-4 mb-8">
                <div className="form-control w-full  ">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Property category
                    </span>
                  </label>
                  <label className="">
                    <select
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
                      type="number"
                      placeholder="$"
                      name="price"
                      className="input form-border input-bordered w-full"
                    />
                  </label>
                </div>
              </div>
              <div className="md:grid grid-cols-3 gap-4 mb-8">
                <div className="form-control w-full  ">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Bed Room
                    </span>
                  </label>
                  <label className="">
                    <select
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
                      name="prostatus"
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
              <div className="md:grid grid-cols-3 gap-4 mb-8">
                <div className="form-control w-full  ">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Balcony
                    </span>
                  </label>
                  <label className="">
                    <select
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
                      name="ownership"
                      required
                      className="select select-bordered w-full"
                    >
                      <option value="Weekly">Weekly</option>
                      <option value="Monthly">Monthly</option>
                      <option value="Annualy">Annualy</option>
                      <option value="Permanent">Permanent</option>
                    </select>
                  </label>
                </div>
              </div>

              <div className="md:grid grid-cols-3 gap-4 mb-8">
                <div className="form-control    ">
                  <label className="label ">
                    <span className="label-text text-lg font-semibold">
                      Property Build Date
                    </span>
                  </label>
                  <label className="input-group ">
                    <input
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
                      type="number"
                      placeholder="2500"
                      name="sqprice"
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
                    {/* This select field impleamented by sojib*/}
                    <Select
                      value={tagValue}
                      onChange={handlevaluetags}
                      placeholder={`Select your property tags`}
                      isMulti
                      name="tags"
                      options={tagsOptions}
                      classNames={{
                        control: (state) =>
                          state.isFocused
                            ? "border-red-600"
                            : "border-grey-300",
                      }}
                      className="basic-multi-select w-full"
                    />
                  </label>
                </div>
              </div>

              <div className="md:grid grid-cols-3 gap-4 mb-8">
                <div className="form-control    ">
                  <label className="label ">
                    <span className="label-text text-lg font-semibold">
                      Street
                    </span>
                  </label>
                  <label className="input-group ">
                    <input
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
                      type="text"
                      placeholder="ex. Anytown"
                      name="city"
                      className="input form-border input-bordered w-full"
                    />
                  </label>
                </div>

                <div className="form-control    ">
                  <label className="label ">
                    <span className="label-text text-lg font-semibold">
                      Zip Code
                    </span>
                  </label>
                  <label className="input-group ">
                    <input
                      type="number"
                      placeholder="Enter Zip Code"
                      // name="price"
                      className="input form-border input-bordered w-full"
                    />
                  </label>
                </div>
              </div>

              <div className="md:grid grid-cols-3 gap-4 mb-8">
                <div className="form-control    ">
                  <label className="label ">
                    <span className="label-text text-lg font-semibold">
                      State
                    </span>
                  </label>
                  <label className="input-group ">
                    <input
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
                      type="text"
                      placeholder="ex. USA"
                      name="country"
                      className="input form-border input-bordered w-full"
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
                    {/* This select field impleamented by sojib */}
                    <Select
                      value={featureValue}
                      onChange={handleValueFeature}
                      placeholder={`Select your property tags`}
                      isMulti
                      name="tags"
                      options={featureOptions}
                      className="basic-multi-select w-full"
                    />
                  </label>
                </div>
              </div>

              <div className=" flex justify-between items-start mb-8 gap-5">
                <div className="form-control w-1/2">
                  <label className="label ">
                    <span className="label-text text-lg font-semibold">
                      Property Image
                    </span>
                  </label>
                  {/* this feild updated to drag and drop option by sojib */}
                  <div className=" border-2 rounded-md p-3">
                    <label
                      className="drag-area"
                      onDragOver={onDragOver}
                      onDragLeave={onDragLeave}
                      onDrop={onDrop}
                    >
                      {isDraging ? (
                        <span>Drop imag here</span>
                      ) : (
                        <>
                          Drag & Drop image here or {""}
                          <span role="button" onClick={selectFiles}>
                            Browser
                          </span>
                        </>
                      )}
                      <input
                        type="file"
                        placeholder="Drag and drop your image or url"
                        name="files"
                        className="input w-full"
                        multiple
                        ref={fileInputRef}
                        onChange={onFileSelect}
                      />
                    </label>
                    {images ? (
                      <div>
                        <img
                          className=" w-[100px] h-[100px]"
                          src={images}
                          alt="Drop img"
                        />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className=" w-1/2">
                  <div className="form-control w-full mb-8">
                    <label className="label ">
                      <span className="label-text text-lg font-semibold">
                        Property Video
                      </span>
                    </label>
                    <label className="input-group ">
                      <input
                        type="text"
                        placeholder="Add your video url"
                        name="video"
                        className="input form-border input-bordered w-full"
                      />
                    </label>
                  </div>
                  <div className="form-control w-full">
                    <label className="label ">
                      <span className="label-text text-lg font-semibold">
                        Property Floor Plan
                      </span>
                    </label>
                    <label className="input-group ">
                      <input
                        type="text"
                        placeholder="Add your floor plan url"
                        name="floor"
                        className="input form-border input-bordered w-full"
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="  mb-8">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Description
                    </span>
                  </label>
                  <label className="input-group">
                    <textarea
                      required
                      name="description"
                      className="textarea py-8 form-border textarea-bordered w-full"
                    ></textarea>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-block bg-gray-800 form-border text-white mb-7"
              >
                Add Property
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddProperties;
