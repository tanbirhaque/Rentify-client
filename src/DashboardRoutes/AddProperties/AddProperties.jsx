import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const AddProperties = () => {

    const {user} = useContext(AuthContext)
    const handleAddProperty = (e) => {
        e.preventDefault();
        const form = e.target;
        const property = form.property.value;
        const rooms = form.rooms.value;
        const beds = form.beds.value;
        const baths = form.baths.value;
        const price = form.price.value;
        // const minprice = form.minprice.value;
        const status = form.status.value;
    
        const newProperty = {
           property,
           status,
           price,
           rooms,
           beds,
           baths
          };

          console.log(newProperty)
        
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
      
          <div className="md:grid grid-cols-3 gap-4 mb-8">
            <div className="form-control    ">
              <label className="label ">
                <span className="label-text text-lg font-semibold">Property Type</span>
              </label>
              <label className="input-group ">
                <input
                 
                
                  type="text"
                  placeholder="Office,Villa,Apartment"
                  name="property"
                  className="input form-border input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control w-full  ">
              <label className="label">
                <span className="label-text text-lg font-semibold">Property Status</span>
              </label>
              <label className="">
                <select
                  name="status"
                  required
                  className="select select-bordered w-full"
                >
                  
                  <option value="For Rent">For Rent</option>
                  <option value="For Sale">For Sale</option>
                  
                </select>
              </label>
            </div>
         
            <div className="form-control    ">
              <label className="label ">
                <span className="label-text text-lg font-semibold">Property Price</span>
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
                <span className="label-text text-lg font-semibold">Max Rooms</span>
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
                <span className="label-text text-lg font-semibold">Beds</span>
              </label>
              <label className="">
                <select
                  name="beds"
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
                <span className="label-text text-lg font-semibold">Baths</span>
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

         
         

       

          
          
         

          <button type="submit" className="btn btn-block bg-gray-800 form-border text-white mb-7">Add Property</button>
         

   
      
      

        </form>
         
        </div>
      
      </div>
    </section>
        </div>
    );
};

export default AddProperties;