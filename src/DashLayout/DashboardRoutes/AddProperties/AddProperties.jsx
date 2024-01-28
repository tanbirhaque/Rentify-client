// This AddProperties page desgin by Sadia
// And AddProperties post crud oparetion added by sojib
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useProperties from "../../../Hooks/useProperties";

const AddProperties = () => {
  const [, refetch] = useProperties();
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const handleAddProperty = (e) => {
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
    const tags = form.tags.value;
    const city = form.city.value;
    const state = form.state.value;
    const country = form.country.value;
    const feature = form.feature.value;
    const title = form.title.value;
    const img = form.img.value;
    const video = form.video.value;
    const floor = form.floor.value;
    const id = form.id.value;
    const newProperty = {
      property_info: {
        owner_details: {
          owner_name: user.displayName,
          owner_img: user.photoURL,
          owner_email: user.email,

        },
        ownership_duration: ownership,
        property_for: status,
        verify_status: false,  // This object property is added for managing the verification feature from the owner dashboard as [verified or 'Non Verified'] >>> Changed 'property_status' to 'verify_status' status. -by Tanbir
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
          property_features: [
            feature
          ],
          property_tags: [
            tags
          ]
        },
        property_location: {
          address: {
            street: area,
            city: city,
            state: state,
            country: country
          }
        }
      }
    };

    axiosPublic.post("/properties", newProperty)
      .then(res => {
        // console.log(res.data)
        if (res.data) {
          Swal.fire(`Hey ${user.displayName}, Your property aded successfully`)
          refetch();
        }
      })
    // console.log(newProperty);
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
                <div className="form-control    ">
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

                <div className="form-control    ">
                  <label className="label ">
                    <span className="label-text text-lg font-semibold">
                      Property Price
                    </span>
                  </label>
                  <label className="input-group ">
                    <input
                      type="number"
                      placeholder="$2800"
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
                    <input
                      type="text"
                      placeholder="ex. Family-fiendly"
                      name="tags"
                      className="input form-border input-bordered w-full"
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
                      name="price"
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
                    <input
                      type="text"
                      placeholder="ex. Swimming Pool"
                      name="feature"
                      className="input form-border input-bordered w-full"
                    />
                  </label>
                </div>
              </div>

              <div className="md:grid grid-cols-3 gap-4 mb-8">
                <div className="form-control    ">
                  <label className="label ">
                    <span className="label-text text-lg font-semibold">
                      Property Image
                    </span>
                  </label>
                  <label className="input-group ">
                    <input
                      type="text"
                      placeholder="Add your image url"
                      name="img"
                      className="input form-border input-bordered w-full"
                    />
                  </label>
                </div>
                <div className="form-control    ">
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

                <div className="form-control    ">
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
